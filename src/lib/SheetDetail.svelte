<script>
  import { onMount } from 'svelte';

  let sheetId = '';
  let sheet = null;

  onMount(() => {
    // Extract ID from hash (e.g. #/sheets/char-1)
    const match = window.location.hash.match(/\/sheets\/([^/]+)/);
    sheetId = match ? match[1] : '';
    // Placeholder: Replace with real fetch logic
    if (sheetId === 'char-1') {
      sheet = { id: 'char-1', name: 'John Marston', type: 'vampire', details: 'Sample details for John.' };
    } else if (sheetId === 'char-2') {
      sheet = { id: 'char-2', name: 'Arthur Morgan', type: 'werewolf', details: 'Sample details for Arthur.' };
    }
  });
</script>

<div class="min-h-screen bg-wod-dark text-white flex flex-col items-center pt-12">
  {#if sheet}
    <h2 class="text-3xl font-bold mb-4 text-wod-red">{sheet.name} <span class="text-wod-light-gray">({sheet.type})</span></h2>
    <div class="bg-wod-gray rounded p-6 shadow w-full max-w-xl">
      <p>{sheet.details}</p>
    </div>
  {:else}
    <p class="text-wod-light-gray">Character sheet not found.</p>
  {/if}
</div>