<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { CharacterSheet, RollResult, FormattedRollResult, Attributes, Skills } from '../constants';
  import { rollDice, ATTRIBUTE_LABELS, SKILL_LABELS } from '../constants';

  export let character: CharacterSheet;
  export let rollHistory: FormattedRollResult[];

  const dispatch = createEventDispatcher<{
    roll: RollResult;
    clearHistory: void;
  }>();

  // Dice roller state
  let selectedAttribute: keyof Attributes | '' = '';
  let selectedSkill: keyof Skills | '' = '';
  let additionalDice = 0;
  let difficulty = 6;
  let rollNote = '';

  function calculateDicePool(): number {
    let pool = 0;
    
    if (selectedAttribute) {
      pool += character.attributes[selectedAttribute];
    }
    
    if (selectedSkill) {
      pool += character.skills[selectedSkill];
    }
    
    pool += additionalDice;
    
    return Math.max(0, pool);
  }

  function performRoll() {
    const pool = calculateDicePool();
    
    if (pool === 0) {
      alert('Dice pool cannot be zero. Please select attributes/skills or add additional dice.');
      return;
    }
    
    const result = rollDice(pool, difficulty);
    
    if (rollNote.trim()) {
      result.note = rollNote.trim();
    }
    
    dispatch('roll', result);
    
    // Clear the note after rolling
    rollNote = '';
  }

  function clearHistory() {
    dispatch('clearHistory');
  }

  function getRollDescription(result: FormattedRollResult): string {
    let desc = `${result.pool} dice`;
    if (result.note) {
      desc += ` (${result.note})`;
    }
    return desc;
  }

  function getRollClass(result: FormattedRollResult): string {
    if (result.botch) return 'text-red-400';
    if (result.successes === 0) return 'text-yellow-400';
    if (result.successes >= 3) return 'text-green-400';
    return 'text-white';
  }

  // Get attribute and skill options
  const attributeOptions = Object.keys(character.attributes) as (keyof Attributes)[];
  const skillOptions = Object.keys(character.skills) as (keyof Skills)[];
</script>

<div class="w-full min-h-screen flex flex-col">
  <!-- Header -->
  <div class="p-4 border-b border-wod-light-gray">
    <h2 class="text-xl font-bold text-wod-red">Dice Roller</h2>
  </div>

  <!-- Dice Roller Controls -->
  <div class="p-4 space-y-4 border-b border-wod-light-gray">
    <!-- Attribute Selection -->
    <div>
      <label for="attribute-select" class="block text-sm font-medium mb-1">Attribute</label>
      <select
        id="attribute-select"
        bind:value={selectedAttribute}
        class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white text-sm"
      >
        <option value="">None</option>
        {#each attributeOptions as attr}
          <option value={attr}>
            {ATTRIBUTE_LABELS[attr]} ({character.attributes[attr]})
          </option>
        {/each}
      </select>
    </div>

    <!-- Skill Selection -->
    <div>
      <label for="skill-select" class="block text-sm font-medium mb-1">Skill/Ability</label>
      <select
        id="skill-select"
        bind:value={selectedSkill}
        class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white text-sm"
      >
        <option value="">None</option>
        {#each skillOptions as skill}
          <option value={skill}>
            {SKILL_LABELS[skill]} ({character.skills[skill]})
          </option>
        {/each}
      </select>
    </div>

    <!-- Additional Dice -->
    <div>
      <label for="additional-dice" class="block text-sm font-medium mb-1">Additional Dice</label>
      <input
        id="additional-dice"
        type="number"
        bind:value={additionalDice}
        min="-10" max="20"
        class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white text-sm"
      />
    </div>

    <!-- Difficulty -->
    <div>
      <label for="difficulty" class="block text-sm font-medium mb-1">Difficulty</label>
      <input
        id="difficulty"
        type="number"
        bind:value={difficulty}
        min="2" max="10"
        class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white text-sm"
      />
    </div>

    <!-- Roll Note -->
    <div>
      <label for="roll-note" class="block text-sm font-medium mb-1">Note (optional)</label>
      <input
        id="roll-note"
        type="text"
        bind:value={rollNote}
        placeholder="Describe the roll..."
        class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white text-sm"
      />
    </div>

    <!-- Dice Pool Display -->
    <div class="bg-wod-dark rounded p-3 text-center">
      <div class="text-lg font-bold text-wod-red">
        {calculateDicePool()} dice
      </div>
      <div class="text-xs text-wod-light-gray">
        Difficulty {difficulty}
      </div>
    </div>

    <!-- Roll Button -->
    <button 
      on:click={performRoll}
      class="w-full bg-wod-red hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition-colors"
    >
      Roll Dice
    </button>
  </div>

  <!-- Roll History -->
  <div class="flex-1 flex flex-col min-h-0">
    <div class="p-4 border-b border-wod-light-gray flex items-center justify-between">
      <h3 class="font-semibold">Roll History</h3>
      {#if rollHistory.length > 0}
        <button 
          on:click={clearHistory}
          class="text-xs text-wod-light-gray hover:text-white transition-colors"
        >
          Clear
        </button>
      {/if}
    </div>

    <div class="flex-1 overflow-y-auto p-4">
      {#if rollHistory.length === 0}
        <p class="text-wod-light-gray text-center text-sm">No rolls yet.</p>
      {:else}
        <div class="space-y-3">
          {#each rollHistory as roll}
            <div class="bg-wod-dark rounded p-3 text-sm">
              <!-- Roll result header -->
              <div class="flex items-center justify-between mb-2">
                <div class={`font-bold ${getRollClass(roll)}`}>
                  {roll.result}
                </div>
                <div class="text-xs text-wod-light-gray">
                  {roll.formattedTime}
                </div>
              </div>

              <!-- Roll details -->
              <div class="text-xs text-wod-light-gray mb-2">
                {getRollDescription(roll)} • Difficulty {roll.difficulty}
              </div>

              <!-- Individual dice -->
              <div class="flex flex-wrap gap-1">
                {#each roll.rolls as die}
                  <span 
                    class="inline-block w-6 h-6 text-center text-xs leading-6 rounded border {
                      die >= roll.difficulty 
                        ? 'bg-green-600 border-green-400 text-white' 
                        : die === 1 
                          ? 'bg-red-600 border-red-400 text-white'
                          : 'bg-gray-600 border-gray-400 text-white'
                    }"
                  >
                    {die}
                  </span>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>

  <!-- Quick Reference -->
  <div class="p-4 border-t border-wod-light-gray">
    <div class="text-xs text-wod-light-gray space-y-1">
      <div><strong>Success:</strong> Roll ≥ Difficulty</div>
      <div><strong>Botch:</strong> No successes + 1s rolled</div>
      <div><strong>Net Successes:</strong> Successes - 1s</div>
    </div>
  </div>
</div>

<style>
  /* Custom scrollbar for roll history */
  .overflow-y-auto::-webkit-scrollbar {
    width: 6px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-track {
    background: #2D2D2D;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb {
    background: #4A4A4A;
    border-radius: 3px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #6B7280;
  }
</style>