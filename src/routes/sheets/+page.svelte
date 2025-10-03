<script>
  import { userData } from '$lib/userStore';
  import { eventBus, events } from '@/eventBus';

  $: sheets = $userData.sheets ?? [];
  $: characters = $userData.characters ?? [];

  import { apiPost } from '$lib/api';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';

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
    window.location.href = `/sheets/${sheetId}`;
  }

  function isAssociated(sheet) {
    if (!sheet.character_id) return false;
    return characters.some((char) => char.id === sheet.character_id);
  }
</script>

<div class="flex flex-col items-center w-full h-full p-3">
  <div class="grid grid-cols-3 items-center w-full mb-3">
    <button class="flex items-center w-fit h-fit gap-1 !bg-transparent hover:!text-primary-200" on:click={() => goto(resolve('/'))}>
      <i class="mdi mdi-arrow-left" aria-hidden="true"></i>
      <span>Back</span>
    </button>

    <div class="text-2xl font-bold text-center capitalize">Your Character Sheets</div>
  </div>

  <div class="grid grid-cols-[300px_auto] gap-3 w-full grow">
    <div class="flex flex-col gap-3 border-r border-background-500">
      <div class="font-semibold border-b border-background-500 py-1 mr-3">Your Sheets</div>

      <div class="flex flex-col grow gap-2 overflow-y-auto pr-3">
        {#each sheets as sheet (sheet.id)}
          <div class="flex items-center">
            <div class="flex flex-col">
              <span class="font-semibold text-sm capitalize">
                {sheet.name || `Unnamed ${sheet.character_type} Sheet`}
              </span>
              <span class="text-xs text-background-300 italic">{sheet.character_type} sheet</span>
            </div>

            {#if isAssociated(sheet)}
              <i class="mdi mdi-link ml-auto" aria-hidden="true"></i>
            {:else}
              <i class="mdi mdi-link-off ml-auto" aria-hidden="true"></i>
            {/if}

            <button class="ml-2 px-2 py-1" on:click={() => viewSheet(sheet.id)}> View </button>
          </div>
        {/each}
      </div>

      <div class="flex flex-col gap-2 pt-2 border-t border-background-500 mr-3">
        <div>Create New Sheet</div>

        <div class="flex gap-1">
          <button class="px-2 py-1" on:click={() => createSheet('vampire')}>Vampire</button>
          <button class="px-2 py-1" on:click={() => createSheet('werewolf')}>Werewolf</button>
          <button class="px-2 py-1" on:click={() => createSheet('mage')}>Mage</button>
          <button class="px-2 py-1" on:click={() => createSheet('human')}>Human</button>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <div class="font-semibold border-b border-background-500 py-1">Your In-Game Characters</div>

      {#if characters.length === 0}
        <div>You have no in-game characters created yet.</div>
      {:else}
        <div class="flex flex-wrap grow">
          {#each characters as char (char.id)}
            <div class="flex items-center w-64 h-64 bg-background-700">
              {JSON.stringify(char)}
              <div class="flex flex-col">
                <span class="font-semibold text-lg">{char.name}</span>
                <span class="text-sm text-background-300 italic">{char.type} character</span>
              </div>
              {#if sheets.find((s) => s.character_id === char.id)}
                <span class="text-background-300">(Sheet linked)</span>
              {:else}
                <span class="text-background-300">(No sheet)</span>
              {/if}
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
