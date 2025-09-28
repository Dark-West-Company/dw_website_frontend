<script>
  import { eventBus, events } from '$lib/eventBus';
  export let label;
  export let value = '';
  export let level = 0;
  export let sheet;
  export let field;

  let dots = [1, 2, 3, 4, 5];

  function handleInput(e) {
    value = e.target.value ?? '';
    // Optionally emit event if you want to handle text changes
    // eventBus.emit(events.SHEET_DATA_CHANGED, sheet);
  }

  function setLevel(l) {
    level = l;
    sheet[field] = l;
    eventBus.emit(events.SHEET_DATA_CHANGED, sheet);
  }
</script>

<div class="flex gap-1 items-center w-full">
  <label class="font-medium mb-1" for="dot-text-field">{label}</label>
  <input id="dot-text-field" class="border-b px-2 py-1 mb-1 w-full" type="text" bind:value on:input={handleInput} />
  <div class="flex gap-1">
    {#each dots as i (i)}
      <button
        type="button"
        class="w-4 h-4 rounded-full border flex items-center justify-center cursor-pointer"
        style="background: {i < level ? '#444' : '#eee'}"
        on:click={() => setLevel(i + 1)}
        title={`Set level to ${i + 1}`}
        aria-label={`Set level to ${i + 1}`}
      >
      </button>
    {/each}
  </div>
</div>
