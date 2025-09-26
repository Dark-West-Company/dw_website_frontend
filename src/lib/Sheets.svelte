<script>
  // Placeholder: Replace with real user/session logic
  let sheets = [
    { id: 'char-1', name: 'John Marston', type: 'vampire' },
    { id: 'char-2', name: 'Arthur Morgan', type: 'werewolf' }
  ];

  function viewSheet(id) {
    window.location.hash = `#/sheets/${id}`;
  }
</script>

<div class="min-h-screen bg-wod-dark text-white flex flex-col items-center pt-12">
  <h2 class="text-3xl font-bold mb-6 text-wod-red">Your Character Sheets</h2>
  <ul class="w-full max-w-xl space-y-4">
    {#each sheets as sheet}
      <li class="bg-wod-gray rounded p-4 flex justify-between items-center shadow">
        <span class="font-semibold text-lg">{sheet.name} <span class="text-wod-light-gray">({sheet.type})</span></span>
        <button class="bg-wod-red px-4 py-2 rounded hover:bg-red-700" on:click={() => viewSheet(sheet.id)}>
          View
        </button>
      </li>
    {/each}
  </ul>
</div>