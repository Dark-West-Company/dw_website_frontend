<script>
  import { eventBus, events } from '$lib/eventBus';

  export let header = 'Dynamic List';
  export let entries = [];
  export let min = 0; // Minimum value for dots
  if (entries === null || entries === undefined || !Array.isArray(entries) || entries.length === 0) {
    entries = [
      { text: '', level: 0 },
      { text: '', level: 0 },
      { text: '', level: 0 },
    ];
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

  // Handles dot click logic with min enforcement and removal behavior
  function updateLevel(idx, i) {
    if (i < min) {
      // Dots below min cannot be unfilled or set
      return;
    }
    if (i === entries[idx].level) {
      // If clicking the last filled dot (no dots filled after), remove it but not below min
      entries[idx].level = Math.max(min, i - 1);
    } else {
      // Fill up to clicked dot, but not below min
      entries[idx].level = Math.max(min, i);
    }
    eventBus.emit(events.SHEET_DATA_CHANGED, entries);
  }
</script>

<div class="flex flex-col relative border rounded-xl border-black pb-2 pt-4 px-3">
  <div class="absolute left-0 right-0 -top-3 flex justify-center">
    <div class="w-fit text-center bg-background-0 text-tprimary rounded font-rampart-spurs tracking-wider px-2">{header}</div>
  </div>

  <div class="w-full space-y-2">
    {#each entries as entry, idx (idx)}
      <div class="flex items-center gap-2 w-full">
        <input type="text" bind:value={entry.text} on:input={(e) => updateText(idx, e.target.value)} placeholder="Entry text" />
        <div class="flex gap-1">
          {#each [1, 2, 3, 4, 5] as i (i)}
            {#if i <= min}
              <!-- Dots below min are always filled, same color as filled-in dots, and clickable to set to min -->
              <button
                type="button"
                class="w-3 h-3 rounded-full flex items-center justify-center !bg-tprimary-0 cursor-pointer"
                on:click={() => updateLevel(idx, i)}
                title={`Set level to ${i}`}
                aria-label={`Set level to ${i}`}
              >
              </button>
            {:else}
              <button
                type="button"
                class="w-3 h-3 rounded-full flex items-center justify-center cursor-pointer hover:!bg-tprimary-0 {i <= entry.level ? '!bg-tprimary-0' : '!bg-background-500'}"
                on:click={() => updateLevel(idx, i)}
                title={`Set level to ${i}`}
                aria-label={`Set level to ${i}`}
              >
              </button>
            {/if}
          {/each}
        </div>
        <button
          class="flex align-center justify-center w-6 h-4 !bg-red-900 hover:!bg-red-700 rounded-full text-xs"
          on:click={() => removeEntry(idx)}
          disabled={entries.length <= 1}
          title="Remove entry">-</button
        >
      </div>
    {/each}
  </div>
  <button class="mt-2 px-2 pt-1 rounded text-xs hover:!bg-background-0 hover:!text-info" on:click={addEntry}>+ Add Entry</button>
</div>
