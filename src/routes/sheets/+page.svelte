<script>
  import { userData } from '$lib/userStore';
  import { eventBus, events } from '@/eventBus';
  import { apiPost, apiPatch, apiDelete } from '$lib/api';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { onMount } from 'svelte';
  import Separator from '@/components/Separator.svelte';
  import HoverPopup from '@/components/HoverPopup.svelte';

  $: sheets = $userData.sheets ?? [];
  $: characters = $userData.characters ?? [];

  let isAdmin = $userData.isAdmin ?? false;

  onMount(() => {
    isAdmin = $userData.isAdmin ?? false;
  });

  async function createSheet(sheetType) {
    try {
      const res = await apiPost('/api/character/sheet', { sheetType });
      if (res.ok) {
        eventBus.emit(events.RELOAD_USER_DATA);
      }
    } catch {
      console.error('Error creating new sheet');
    }
  }

  function viewSheet(sheetId) {
    goto(resolve(`/sheets/${sheetId}`));
  }

  function isAssociated(sheet) {
    if (!sheet.character_id) return false;
    return characters.some((char) => char.id === sheet.character_id);
  }

  async function associatedSheet(character, sheetId) {
    try {
      const res = await apiPatch(`/api/character/sheet/${sheetId}/associate`, { characterId: character });
      if (res.ok) eventBus.emit(events.RELOAD_USER_DATA);
    } catch {
      console.error('Error associating sheet to character');
    }
  }
  async function deleteSheet(sheetId) {
    if (confirm('Are you sure you want to delete this character sheet?')) {
      try {
        const res = await apiDelete(`/api/character/sheet/${sheetId}`);
        if (res.ok) {
          eventBus.emit(events.RELOAD_USER_DATA);
        } else {
          alert('Failed to delete sheet.');
        }
      } catch {
        alert('Error deleting sheet.');
      }
    }
  }
</script>

<div class="flex flex-col items-center w-full h-full bg-background-0/50 border-t-2 border-black">
  <div class="grid grid-cols-3 items-center w-full px-3 py-3">
    <button class="flex items-center w-fit h-fit gap-1 hover:!text-info" on:click={() => goto(resolve('/'))}>
      <i class="mdi mdi-arrow-left" aria-hidden="true"></i>
      <span>Back</span>
    </button>

    <div class="text-2xl font-rampart-spurs text-center capitalize">Your Character Sheets</div>

    <div class="text-right">
      {#if isAdmin}
        <button class="px-3 py-1 hover:!text-info" on:click={() => goto(resolve('/admin'))}> Admin Panel </button>
      {/if}
    </div>
  </div>

  <div class="grid grid-cols-[300px_auto] w-full grow">
    <div class="flex flex-col gap-3 border-r border-black bg-primary/40 px-3 pt-3 pb-1">
      <div class="w-full text-center font-rampart-spurs mr-3">All Sheets</div>

      <div class="mx-2">
        <Separator />
      </div>

      <div class="flex flex-col grow gap-2 overflow-y-auto">
        {#each sheets as sheet, index (sheet.id)}
          <div class="flex items-center">
            <div class="flex flex-col grow">
              <span class="font-rampart-spurs text-sm">
                {sheet.name || `Unnamed ${sheet.character_type} Sheet`}
              </span>
              <span class="text-xs text-background-300 font-speedwriter">{sheet.character_type} sheet</span>
            </div>

            {#if isAssociated(sheet)}
              <i class="mdi mdi-link ml-auto" aria-hidden="true"></i>
            {:else}
              <HoverPopup text="This sheet is not<br> linked a character." position={index == 0 ? 'bottom' : 'top'}>
                <i class="mdi mdi-link-off ml-auto" aria-hidden="true"></i>
              </HoverPopup>
            {/if}

            <button class="ml-2 px-1 py-1 hover:!text-info" on:click={() => viewSheet(sheet.id)}> View </button>
            <button
              class="ml-2 px-1 py-1 hover:!text-error"
              on:click={() => deleteSheet(sheet.id)}
            >
              Delete
            </button>
          </div>
        {/each}
      </div>

      <div class="mx-2">
        <Separator />
      </div>

      <div class="flex flex-col gap-2 mr-3">
        <div class="text-center font-rampart-spurs">Create New Sheet</div>

        <div class="flex justify-between">
          <button class="text-sm px-1 py-1 hover:!text-info" on:click={() => createSheet('vampire')}>Vampire</button>
          <button class="text-sm px-1 py-1 hover:!text-info" on:click={() => createSheet('werewolf')}>Werewolf</button>
          <button class="text-sm px-1 py-1 hover:!text-info" on:click={() => createSheet('mage')}>Mage</button>
          <button class="text-sm px-1 py-1 hover:!text-info" on:click={() => createSheet('human')}>Human</button>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-3 bg-primary/80 px-3 pt-3">
      <div class="font-rampart-spurs">Your In-Game Characters</div>

      <div class="mx-2">
        <Separator />
      </div>

      {#if characters.length === 0}
        <div>You have no in-game characters created yet.</div>
      {:else}
        <div class="flex flex-wrap grow">
          {#each characters as char (char.id)}
            <div class="flex flex-col justify-between items-center w-64 h-32 bg-secondary-700 rounded py-5">
              <div class="font-rampart-spurs text-lg">{char.firstname} {char.lastname}</div>

              {#if sheets.find((s) => s.character_id === char.id)}
                <span class="text-background-300">(Sheet linked TODO FLUSH THIS OUT)</span>
              {:else}
                <div> No sheet linked. </div>
                <select on:change={(e) => associatedSheet(char.id, e.target.value)}>
                  <option value="" disabled selected>Select Sheet</option>
                  {#each sheets.filter((s) => !s.character_id) as sheetOption (sheetOption.id)}
                    <option value={sheetOption.id}>{sheetOption.name || `Unnamed ${sheetOption.character_type} Sheet`}</option>
                  {/each}
                </select>
              {/if}
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
