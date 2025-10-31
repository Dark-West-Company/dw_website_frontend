<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { apiGet, apiDelete } from '$lib/api';
  import { userData } from '$lib/userStore';

  let sheets = [];
  let isLoading = true;
  let isAdmin = false;

  onMount(async () => {
    isAdmin = $userData.isAdmin ?? false;
    if (!isAdmin) {
      goto(resolve('/'));
      return;
    }
    const res = await apiGet('/api/admin/sheets');
    if (res.ok) {
      let data = await res.json();
      sheets = data.sheets;
    }
    isLoading = false;
  });

  function viewSheet(sheetId) {
    goto(resolve(`/admin/sheets/${sheetId}`));
  }
  async function deleteSheet(sheetId) {
    if (confirm('Permanently delete this character sheet? This cannot be undone.')) {
      try {
        const res = await apiDelete(`/api/admin/sheets/${sheetId}`);
        if (res.ok) {
          sheets = sheets.filter((s) => s.id !== sheetId);
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
  <div class="text-2xl font-rampart-spurs text-center capitalize my-4">All Character Sheets (Admin)</div>
  {#if isLoading}
    <div>Loading...</div>
  {:else}
    <div class="w-full grid grid-cols-[1fr_1fr_1fr_120px] items-center px-2 py-1 bg-primary/50 font-speedwriter">
      <div class="flex justify-start">Name</div>
      <div class="flex justify-start">Type</div>
      <div class="flex justify-start">Status</div>
      <div class="flex justify-start">Actions</div>
    </div>
    <div class="flex flex-col gap-1 pb-1 w-full overflow-y-auto">
      {#each sheets as sheet (sheet.id)}
        <div class="grid grid-cols-[1fr_1fr_1fr_120px] items-center px-2 py-1 bg-primary">
          <div class="font-rampart-spurs text-sm">{sheet.name || `Unnamed ${sheet.character_type} Sheet`}</div>

          <div class="text-xs text-background-300 font-speedwriter">{sheet.character_type}</div>

          {#if sheet.archived}
            <div class="px-2 py-1 rounded !bg-error/30 font-bold tracking-wider">Archived</div>
          {:else}
            <div class="px-2 py-1 rounded font-bold tracking-wider capitalize {sheet.mode == 'creative' ? '!bg-info/50' : '!bg-success/50'}">{sheet.mode}</div>
          {/if}

          <div class="flex gap-2">
            <button class="px-2 py-1 hover:!text-info" on:click={() => viewSheet(sheet.id)}>View</button>
            <button class="px-2 py-1 hover:!text-error" on:click={() => deleteSheet(sheet.id)}> Delete </button>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
