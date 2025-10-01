<script>
  import { eventBus, events } from '$lib/eventBus';

  export let header = 'Dynamic List';
  export let entries = [];
  if (entries === null || entries === undefined || !Array.isArray(entries)) {
    entries = [];
  }

  function addEntry() {
    entries.push({ text: '', level: 0 });
    entries = entries; // Svelte reactivity for bind
    eventBus.emit(events.SHEET_DATA_CHANGED, entries);
  }

  function removeEntry(idx) {
    entries.splice(idx, 1);
    entries = entries; // Svelte reactivity for bind
    eventBus.emit(events.SHEET_DATA_CHANGED, entries);
  }

  function updateText(idx, value) {
    entries[idx].text = value;
    eventBus.emit(events.SHEET_DATA_CHANGED, entries);
  }

  function updateLevel(idx, value) {
    entries[idx].level = value;
    eventBus.emit(events.SHEET_DATA_CHANGED, entries);
  }
</script>

<div class="flex items-center flex-col">
  <div class="flex items-center relative justify-center mb-2 w-full">
    <h3 class="font-bold">{header}</h3>
    <button class="absolute right-0 ml-2 px-2 py-1 bg-blue-500 text-white rounded" on:click={addEntry}>+ Add</button>
  </div>

  <div class="w-full space-y-2">
    {#each entries as entry, idx (idx)}
      <div class="flex items-center gap-2 w-full">
        <input type="text" class="border-b px-2 py-1 flex-1" bind:value={entry.text} on:input={(e) => updateText(idx, e.target.value)} placeholder="Entry text" />
        <div class="flex gap-1">
          {#each [1, 2, 3, 4, 5] as i (i)}
            <button
              type="button"
              class="w-4 h-4 rounded-full border flex items-center justify-center cursor-pointer"
              style="background: {i < entry.level ? '#444' : '#eee'}"
              on:click={() => updateLevel(idx, i + 1)}
              title={`Set level to ${i + 1}`}
              aria-label={`Set level to ${i + 1}`}
            >
            </button>
          {/each}
        </div>
        <button class="px-2 py-1 bg-red-500 text-white rounded" on:click={() => removeEntry(idx)} disabled={entries.length <= 1} title="Remove entry">−</button>
      </div>
    {/each}
  </div>
</div>
