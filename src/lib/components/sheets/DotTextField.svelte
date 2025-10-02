<script>
  import { eventBus, events } from '$lib/eventBus';
  import HoverPopup from '../HoverPopup.svelte';
  import { getUpgradeXpCost } from '$lib/xpCostHelpers';

  export let label;
  export let specialty = '';
  export let level = 0;
  export let sheet;
  export let field;
  export let disableSpecialty = false;
  export let type = 'none';

  let dots = [1, 2, 3, 4, 5];

  function handleInput(e) {
    specialty = e.target.value ?? '';
    // Optionally emit event if you want to handle text changes
    // eventBus.emit(events.SHEET_DATA_CHANGED, sheet);
  }

  function setLevel(l) {
    level = l;
    sheet[field] = l;
    eventBus.emit(events.SHEET_DATA_CHANGED, sheet);
  }
</script>

<div class="flex flex-col gap-1 w-full">
  <div class="flex items-center justify-between">
    <div class="font-medium mb-1">{label}</div>
    {type}
    <div class="flex gap-1 mb-1">
      {#each dots as i (i)}
        {#if type === 'none' || i <= level}
          <button
            type="button"
            class="w-4 h-4 rounded-full border flex items-center justify-center cursor-pointer"
            style="background: {i <= level ? '#444' : '#eee'}"
            on:click={() => setLevel(i)}
            aria-label={`Set level to ${i}`}
          >
          </button>
        {:else}
          <HoverPopup text={`${getUpgradeXpCost(type, level, i)}xp to upgrade to level ${i}`}>
            <button
              type="button"
              class="w-4 h-4 rounded-full border flex items-center justify-center cursor-pointer"
              style="background: {i <= level ? '#444' : '#eee'}"
              on:click={() => setLevel(i)}
              aria-label={`Set level to ${i}`}
            >
            </button>
          </HoverPopup>
        {/if}
      {/each}
    </div>
  </div>
  {#if level >= 4 && !disableSpecialty}
    <div class="flex items-center relative gap-2 text-xs">
      <svg
        class="absolute mr-2 ml-1"
        width="12"
        height="16"
        viewBox="0 0 12 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style="vertical-align: middle; transform: scaleX(-1); top: -5px;"
      >
        <path d="M11 1 V13 H2" stroke="#888" stroke-width="2" fill="none" />
      </svg>
      <label class="font-medium mb-1 ml-5" for="dot-text-field">Specialty:</label>
      <input id="dot-text-field" type="text" class="border-b px-2 w-full" bind:value={specialty} on:input={handleInput} placeholder="Enter text" />
    </div>
  {/if}
</div>
