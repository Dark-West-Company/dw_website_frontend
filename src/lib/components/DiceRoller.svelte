<script lang="ts">
  import { apiGet, apiPost } from '@/api';
  import { HUMAN_ABILITIES, VAMPIRE_ABILITIES, WEREWOLF_ABILITIES, MAGE_ABILITIES } from '../../constants';
  import moment from 'moment';

  export let sheet;

  let rollHistory = [];

  // Form state
  let selectedAttribute = '';
  let selectedAbility = '';
  let bonusDice = 0;
  let difficulty = 6;
  let specialty = false;
  let spendWillpower = false;
  let autoSuccesses = 0;
  let note = '';

  let abilities = null;
  let attributes = [
    { label: 'Strength', value: 'strength' },
    { label: 'Dexterity', value: 'dexterity' },
    { label: 'Stamina', value: 'stamina' },
    { label: 'Charisma', value: 'charisma' },
    { label: 'Manipulation', value: 'manipulation' },
    { label: 'Appearance', value: 'appearance' },
    { label: 'Perception', value: 'perception' },
    { label: 'Intelligence', value: 'intelligence' },
    { label: 'Wits', value: 'wits' },
  ];
  let abilityOptions = [];

  // API state
  let loading = false;
  let error = '';
  let result = null;

  // we need to be reactive on the sheet changing
  $: if (sheet) {
    setupAbilityOptions();
    getRollHistory();
    // set defaults if not set
    // if (!selectedAttribute && attributes.length > 0) {
    //   selectedAttribute = attributes[0].value;
    // }
    // if (!selectedAbility && abilityOptions.length > 0) {
    //   selectedAbility = abilityOptions[0].value;
    // }
  }

  const setupAbilityOptions = () => {
    console.log('Setting up ability options for character type:', sheet);
    // we need to generate the options for attributes and abilities based on the character type
    switch (sheet.character_type) {
      case 'human':
        abilities = HUMAN_ABILITIES;
        break;
      case 'vampire':
        abilities = VAMPIRE_ABILITIES;
        break;
      case 'werewolf':
        abilities = WEREWOLF_ABILITIES;
        break;
      case 'mage':
        abilities = MAGE_ABILITIES;
        break;
    }

    // we want to generate label:value pairs for the abilities
    abilityOptions = [...abilityOptions, ...abilities.talents.map((a) => ({ label: a.replace('_', ' '), value: 'talent_' + a }))];
    abilityOptions = [...abilityOptions, ...abilities.skills.map((a) => ({ label: a.replace('_', ' '), value: 'skill_' + a }))];
    abilityOptions = [...abilityOptions, ...abilities.knowledges.map((a) => ({ label: a.replace('_', ' '), value: 'knowledge_' + a }))];

    abilityOptions.forEach((opt) => {
      if (opt.value === 'skill_drive') {
        opt.label = 'Ride';
      } else if (opt.value === 'skill_firearms') {
        opt.label = 'Ranged Weaponry';
      } else if (opt.value === 'knowledge_computer') {
        opt.label = 'Culture';
      }
    });

    abilityOptions.sort((a, b) => a.label.localeCompare(b.label));
  };

  const getRollHistory = async () => {
    if (!sheet || !sheet.character_sheet_id) return;
    try {
      // uses get "/sheet/:sheetId/roll-history",
      const res = await apiGet(`/api/character/sheet/${sheet.character_sheet_id}/roll-history`);
      const data = await res.json();
      if (data.success) {
        rollHistory = data.history;
      }
    } catch {
      // ignore
    }
  };

  async function rollDice() {
    loading = true;
    error = '';
    result = null;
    try {
      const payload = {
        selectedAttribute,
        selectedAbility,
        bonusDice: Number(bonusDice) || 0,
        difficulty: Number(difficulty) || 6,
        specialty,
        spendWillpower,
        autoSuccesses: Number(autoSuccesses) || 0,
        sheetId: sheet.character_sheet_id,
        note: note.trim(),
      };
      const res = await apiPost('/api/character/roll', payload);
      const data = await res.json();
      if (!data.success) {
        error = 'Dice roll failed.';
      } else {
        rollHistory = [data.result, ...rollHistory];
      }
    } catch {
      error = 'Network error.';
    } finally {
      loading = false;
    }
  }

  const formatAbilityName = (ability) => {
    if (!ability) return '';
    return ability.replace('_', ' ').replace('talent ', '').replace('skill ', '').replace('knowledge ', '');
  };
</script>

<div class="flex flex-col gap-2 h-full overflow-hidden">
  <h2 class="text-lg font-bold text-tprimary mb-2">Dice Roller</h2>
  <div class="flex items-center gap-2">
    <label for="dice-attribute" class="text-sm text-tsecondary">Attribute</label>
    <select id="dice-attribute" bind:value={selectedAttribute} class="grow text-sm py-1 border-b border-tprimary-0 px-1 focus:outline-none">
      {#each attributes as attr (attr)}
        <option class="text-sm bg-background-900 text-tprimary-0" value={attr.value}>{attr.label}</option>
      {/each}
    </select>
  </div>

  <div class="flex items-center gap-2">
    <label for="dice-ability" class="text-sm text-tsecondary">Ability</label>
    <select id="dice-ability" bind:value={selectedAbility} class="grow text-sm py-1 border-b border-tprimary-0 px-1 focus:outline-none">
      {#each abilityOptions as ab (ab)}
        <option class="text-sm bg-background-900 text-tprimary-0" value={ab.value}>{ab.label}</option>
      {/each}
    </select>
  </div>

  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <label for="dice-difficulty" class="grow text-sm text-tsecondary">Difficulty</label>
      <input id="dice-difficulty" type="number" min="3" bind:value={difficulty} class="!w-fit max-w-16 px-2" />
    </div>
    <div class="flex items-center gap-2">
      <label for="dice-bonus" class="grow text-sm text-tsecondary whitespace-nowrap">Bonus Dice</label>
      <input id="dice-bonus" type="number" min="0" bind:value={bonusDice} class="!w-fit max-w-16 px-2" />
    </div>
    <div class="flex items-center gap-2">
      <label for="dice-autosuccess" class="grow text-sm text-tsecondary whitespace-nowrap">Auto Successes</label>
      <input id="dice-autosuccess" type="number" min="0" bind:value={autoSuccesses} class="!w-fit max-w-16 px-2" />
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <label for="dice-specialty" class="flex items-center text-sm gap-1 text-tsecondary">
      <input id="dice-specialty" type="checkbox" bind:checked={specialty} />
      Specialty
    </label>
    <label for="dice-willpower" class="flex items-center text-sm gap-1 text-tsecondary">
      <input id="dice-willpower" type="checkbox" bind:checked={spendWillpower} />
      Spend Willpower
    </label>
    <div class="flex flex-col gap-1">
      <label for="dice-note" class="text-sm text-tsecondary">Reason (mandatory)</label>
      <textarea
        id="dice-note"
        class="w-full px-2 py-1 border rounded bg-background-900 text-tprimary-0 resize-none"
        rows="2"
        bind:value={note}
        placeholder="Add a note to this roll (mandatory)"
      ></textarea>
    </div>
  </div>

  <button
    class="py-1 rounded !bg-primary hover:!text-tprimary-50 hover:!bg-primary-50"
    on:click={rollDice}
    disabled={loading || !selectedAttribute || !selectedAbility || !note.trim()}
  >
    {loading ? 'Rolling...' : 'Roll'}
  </button>

  {#if error}
    <div class="text-red-700 font-semibold">{error}</div>
  {/if}

  {#if rollHistory.length > 0}
    <div class="flex flex-col overflow-y-auto pr-2 gap-2">
      {#each rollHistory as roll (roll.id)}
        <div class="flex flex-col px-3 py-2 gap-1 rounded bg-primary">
          <div class="flex justify-between items-center">
            <div class="flex flex-col">
              <div class="text-sm text-tprimary">{roll.selected_attribute} + {formatAbilityName(roll.selected_ability)}</div>
              <div class="text-tsecondary text-xs italic">{moment(roll.created_at).format('YYYY-MM-DD hh:mm A')}</div>
            </div>
          </div>

          <div class="flex items-center justify-between gap-2">
            <div class="text-sm text-tsecondary">Difficulty: {roll.difficulty}</div>
            {#if roll.botch}
              <div class="text-sm text-white/80 bg-red-900 rounded px-2">BOTCH</div>
            {/if}
          </div>

          <div class="flex flex-wrap gap-2">
            {#each roll.dice_results as die, index (index)}
              <div
                class="flex items-center justify-center h-6 w-6 rounded text-sm"
                class:bg-success-0={die >= roll.difficulty && die !== 10}
                class:bg-error={die < roll.difficulty && die !== 1 && die !== 10}
                class:bg-red-900={die === 1}
                class:bg-info={die === 10}
                class:text-white={die >= roll.difficulty || die === 1 || die === 10}
                class:text-tsecondary={die < roll.difficulty && die !== 1 && die !== 10}>{die}</div
              >
            {/each}

            {#if roll.willpower}
              <div class="flex items-center justify-center h-6 w-6 rounded text-sm bg-success-0 text-white">W</div>
            {/if}

            {#if roll.auto_successes > 0}
              {#each Array(roll.auto_successes) as _, i (i)}
                <div class="flex items-center justify-center h-6 w-6 rounded text-sm bg-success-0 text-white">A</div>
              {/each}
            {/if}
          </div>

          {#if roll.note}
            <div class="text-sm text-tsecondary italic">{roll.note}</div>
          {/if}

          <!-- <div class="flex flex-col gap-1 text-tsecondary text-sm">
            <div>Botch: <span class="font-bold">{roll.botch ? 'Yes' : 'No'}</span></div>
            <div class="italic text-xs">{roll.details}</div>
          </div> -->
        </div>
      {/each}
    </div>
  {/if}
</div>
