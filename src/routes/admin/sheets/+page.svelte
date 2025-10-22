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
    const res = await apiGet('/api/admin/character-sheets');
    if (res.ok) {
      sheets = await res.json();
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
          sheets = sheets.filter(s => s.id !== sheetId);
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
    <div class="flex flex-col gap-2 w-full max-w-2xl">
      {#each sheets as sheet (sheet.id)}
        <div class="flex items-center justify-between p-2 border-b border-black bg-primary/40">
          <div>
            <span class="font-rampart-spurs text-sm">{sheet.name || `Unnamed ${sheet.character_type} Sheet`}</span>
            <span class="ml-2 text-xs text-background-300 font-speedwriter">{sheet.character_type} sheet</span>
            {#if sheet.archived}
              <span class="ml-2 px-2 py-1 rounded bg-warning text-xs text-black">Archived</span>
            {/if}
          </div>
          <div class="flex gap-2">
            <button class="px-2 py-1 hover:!text-info" on:click={() => viewSheet(sheet.id)}>View</button>
            <button
              class="px-2 py-1 hover:!text-error"
              on:click={() => deleteSheet(sheet.id)}
            >
              Delete
            </button>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>