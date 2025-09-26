<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let value: number;
  export let maxValue: number = 5;
  export let minValue: number = 0;
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let ariaLabel: string | undefined;
  export let id: string | undefined;

  const dispatch = createEventDispatcher<{ change: number }>();

  function handleClick(dotValue: number) {
    const newValue = value === dotValue ? Math.max(minValue, dotValue - 1) : dotValue;
    dispatch('change', newValue);
  }

  function getDotClass(dotIndex: number): string {
    const baseClasses = 'cursor-pointer transition-all duration-200 border-2 rounded-full';
    const sizeClasses = {
      small: 'w-4 h-4',
      medium: 'w-6 h-6',
      large: 'w-8 h-8'
    };
    
    const filled = dotIndex <= value;
    const colorClasses = filled 
      ? 'bg-wod-red border-wod-red hover:bg-red-600 hover:border-red-600' 
      : 'bg-transparent border-wod-light-gray hover:border-wod-red';
    
    return `${baseClasses} ${sizeClasses[size]} ${colorClasses}`;
  }
</script>

<div class="flex items-center space-x-1">
  {#each Array(maxValue) as _, i}
    <button
      class={getDotClass(i + 1)}
      on:click={() => handleClick(i + 1)}
      aria-label={ariaLabel ? `${ariaLabel} ${i + 1}` : `Set rating to ${i + 1}`}
      id={id ? `${id}-${i + 1}` : undefined}
      type="button"
    >
    </button>
  {/each}
</div>