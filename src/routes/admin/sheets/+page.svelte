<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { apiGet } from '$lib/api';
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
          </div>
          <button class="px-2 py-1 hover:!text-info" on:click={() => viewSheet(sheet.id)}>View</button>
        </div>
      {/each}
    </div>
  {/if}
</div>