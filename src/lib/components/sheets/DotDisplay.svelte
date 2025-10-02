<script>
  import { createEventDispatcher } from 'svelte';
  import { eventBus, events } from '$lib/eventBus';
  export let value = 1; // int 1-10
  export let disabled = false;
  export let readonly = false;
  export let field;
  export let sheet;
  export let shape = 'circle'; // 'circle' or 'box'

  const dispatch = createEventDispatcher();
  export let count = 10;
  export let max = count;
  $: dots = Array.from({ length: count }, (_, i) => i + 1);

  function setValue(v) {
    if (!disabled && !readonly && v <= max) {
      value = v;
      dispatch('change', { value });
      if (sheet && field) {
        sheet[field] = value;
        eventBus.emit(events.SHEET_DATA_CHANGED, sheet);
      }
    }
  }
</script>

<div class="flex flex-wrap justify-center gap-1">
  {#each dots as i (i)}
    <button
      type="button"
      class="w-4 h-4 border flex items-center justify-center transition {readonly ? 'cursor-default' : 'cursor-pointer'} {shape === 'circle' ? 'rounded-full' : 'rounded'}"
      style="background: {i <= value ? '#444' : '#eee'}"
      aria-label={`Set value to ${i}`}
      title={`Set value to ${i}`}
      on:click={() => setValue(i)}
      disabled={disabled || readonly || i > max}
      tabindex={readonly ? -1 : 0}
    >
    </button>
  {/each}
</div>
