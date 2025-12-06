<script>
  import { createEventDispatcher } from 'svelte';
  import { eventBus, events } from '$lib/eventBus';
  import HoverPopup from '../HoverPopup.svelte';
  import { getUpgradeXpCost } from '$lib/xpCostHelpers';

  export let value = 1; // int 1-10
  export let min = 0; // Minimum value, always filled and cannot be unfilled
  export let disabled = false;
  export let readonly = false;
  export let field;
  export let sheet;
  export let shape = 'circle'; // 'circle' or 'box'
  export let type = 'none';

  const dispatch = createEventDispatcher();
  export let count = 10;
  export let max = count;
  $: dots = Array.from({ length: count }, (_, i) => i + 1);

  // Handles dot click logic with min enforcement and removal behavior
  function setValue(i) {
    if (i < min || disabled || readonly || i > max) {
      // Dots below min cannot be unfilled or set
      return;
    }
    if (i === value) {
      // If clicking the last filled dot (no dots filled after), remove it but not below min
      value = Math.max(min, i - 1);
    } else {
      // Fill up to clicked dot, but not below min
      value = Math.max(min, i);
    }
    dispatch('change', { value });
    if (sheet && field) {
      sheet[field] = value;
      eventBus.emit(events.SHEET_DATA_CHANGED, sheet);
    }
  }
</script>

<div class="flex flex-wrap justify-center gap-1">
  {#each dots as i (i)}
    {#if i <= min}
      <!-- Dots below min are always filled, same color as filled-in dots, and clickable to set to min -->
      <button
        type="button"
        class="w-4 h-4 border flex items-center justify-center transition {readonly ? 'cursor-default' : 'cursor-pointer'} {shape === 'circle'
          ? 'rounded-full'
          : 'rounded'} !bg-tprimary-0"
        aria-label={`Set value to ${i}`}
        title={`Set value to ${i}`}
        on:click={() => setValue(i)}
        disabled={disabled || readonly || i > max}
        tabindex={readonly ? -1 : 0}
      >
      </button>
    {:else if type === 'none' || i <= value}
      <HoverPopup text={`${getUpgradeXpCost(type, value, i)}xp to upgrade to level ${i}`}>
        <button
          type="button"
          class="w-4 h-4 border flex items-center justify-center transition {readonly ? 'cursor-default' : 'cursor-pointer'} {shape === 'circle' ? 'rounded-full' : 'rounded'} {i <=
          value
            ? '!bg-tprimary-0'
            : '!bg-background-500'}"
          aria-label={`Set value to ${i}`}
          title={`Set value to ${i}`}
          on:click={() => setValue(i)}
          disabled={disabled || readonly || i > max}
          tabindex={readonly ? -1 : 0}
        >
        </button>
      </HoverPopup>
    {:else}
      <button
        type="button"
        class="w-4 h-4 border flex items-center justify-center transition {readonly ? 'cursor-default' : 'cursor-pointer'} {shape === 'circle' ? 'rounded-full' : 'rounded'} {i <=
        value
          ? '!bg-tprimary-0'
          : '!bg-background-500'}"
        aria-label={`Set value to ${i}`}
        title={`Set value to ${i}`}
        on:click={() => setValue(i)}
        disabled={disabled || readonly || i > max}
        tabindex={readonly ? -1 : 0}
      >
      </button>
    {/if}
  {/each}
</div>
