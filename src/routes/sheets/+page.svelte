<script>
  import { userData } from '$lib/userStore';
  let loading = false;

  $: sheets = $userData.sheets ?? [];
  $: characters = $userData.characters ?? [];
  $: unassociatedSheets = sheets.filter((sheet) => !sheet.character_id);

  import { apiPost } from '$lib/api';

  async function createSheet(sheetType) {
    try {
      const res = await apiPost('/api/character/sheet', { sheetType });
      if (res.ok) {
        location.reload();
      }
    } catch {}
  }

  function viewSheet(sheetId) {
    window.location.href = `/sheets/${sheetId}`;
  }
</script>

<div class="min-h-screen bg-wod-dark text-white flex flex-col items-center pt-12">
  <h2 class="text-3xl font-bold mb-6 text-wod-red">Your Character Sheets</h2>

  {#if unassociatedSheets.length > 0}
    <div class="mb-8 w-full max-w-xl">
      <h3 class="text-xl font-semibold mb-2">Unassociated Character Sheets</h3>
      <ul class="mb-4">
        {#each unassociatedSheets as sheet (sheet.id)}
          <li class="mb-2 flex items-center justify-between">
            <span class="font-semibold">
              {sheet.name || 'Unnamed Sheet'} ({sheet.character_type})
            </span>
            <button class="ml-4 bg-wod-red px-3 py-1 rounded hover:bg-red-700" on:click={() => viewSheet(sheet.id)}> View </button>
          </li>
        {/each}
      </ul>
    </div>
  {/if}

  {#if loading}
    <div class="text-lg text-wod-light-gray">Loading...</div>
  {:else if characters.length === 0}
    <div class="text-lg text-wod-light-gray">Hey, you haven't made any characters yet!</div>
  {:else}
    <ul class="w-full max-w-xl space-y-4">
      {#each characters as char (char.id)}
        <li class="bg-wod-gray rounded p-4 flex justify-between items-center shadow">
          <span class="font-semibold text-lg">{char.name}</span>
          {#if sheets.find((s) => s.character_id === char.id)}
            <span class="text-wod-light-gray">(Sheet: {sheets.find((s) => s.character_id === char.id).type})</span>
          {:else}
            <span class="text-wod-light-gray">(No sheet)</span>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}

  <div class="mt-12 flex gap-4">
    <button class="bg-wod-red px-4 py-2 rounded hover:bg-red-700" on:click={() => createSheet('vampire')}>Create Vampire Sheet</button>
    <button class="bg-wod-red px-4 py-2 rounded hover:bg-red-700" on:click={() => createSheet('werewolf')}>Create Werewolf Sheet</button>
    <button class="bg-wod-red px-4 py-2 rounded hover:bg-red-700" on:click={() => createSheet('mage')}>Create Mage Sheet</button>
    <button class="bg-wod-red px-4 py-2 rounded hover:bg-red-700" on:click={() => createSheet('human')}>Create Human Sheet</button>
  </div>
</div>
