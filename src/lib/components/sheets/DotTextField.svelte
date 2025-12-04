<script>
  import { eventBus, events } from '$lib/eventBus';
  import HoverPopup from '../HoverPopup.svelte';
  import { getUpgradeXpCost } from '$lib/xpCostHelpers';

  export let label;
  export let specialty = '';
  export let level = 0;
  export let min = 0; // Minimum value, always filled and cannot be unfilled
  export let sheet;
  export let field;
  export let disableSpecialty = false;
  export let type = 'none';

  let dots = [1, 2, 3, 4, 5];

  // Sync specialty from sheet when field or level changes
  $: if (level >= 4 && sheet && field) {
    specialty = sheet[field + '_specialty'] ?? '';
  }

  $: level = sheet && field ? (sheet[field] ?? 0) : level;

  function handleInput(e) {
    specialty = e.target.value ?? '';
    if (sheet && field) {
      sheet[field + '_specialty'] = specialty;
      eventBus.emit(events.SHEET_DATA_CHANGED, sheet);
    }
  }

  // Handles dot click logic with min enforcement and removal behavior
  function setLevel(i) {
    if (i < min) {
      // Dots below min cannot be unfilled
      return;
    }
    if (i === level) {
      // If clicking the last filled dot (no dots filled after), remove it but not below min
      level = Math.max(min, i - 1);
    } else {
      // Fill up to clicked dot, but not below min
      level = Math.max(min, i);
    }
    sheet[field] = level;
    eventBus.emit(events.SHEET_DATA_CHANGED, sheet);
  }
</script>

<div class="flex flex-col gap-1 w-full">
  <div class="flex items-center justify-between">
    <div class="text-md text-tsecondary-50">{@html label}</div>
    <div class="flex flex-grow border-b mx-3 border-cream-0/10"></div>
    <div class="flex gap-1 mb-1">
      {#each dots as i (i)}
        {#if i <= min}
          <HoverPopup text={`Minimum level is ${min}`}>
            <button
              type="button"
              class="w-3 h-3 rounded-full flex items-center justify-center !bg-tprimary-0 cursor-pointer"
              on:click={() => setLevel(i)}
              aria-label={`Set level to ${i}`}
            >
            </button>
          </HoverPopup>
        {:else if type === 'none' || i <= level}
          <button
            type="button"
            class="w-3 h-3 rounded-full flex items-center justify-center cursor-pointer hover:!bg-tprimary-0 {i <= level ? '!bg-tprimary-0' : '!bg-background-500'}"
            on:click={() => setLevel(i)}
            aria-label={`Set level to ${i}`}
          >
          </button>
        {:else}
          <HoverPopup text={`${getUpgradeXpCost(type, level, i)}xp to upgrade to level ${i}`}>
            <button
              type="button"
              class="w-3 h-3 rounded-full flex items-center justify-center cursor-pointer hover:!bg-tprimary-0 {i <= level ? '!bg-tprimary-0' : '!bg-background-500'}"
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
      <label class="mb-1 ml-5 text-xs font-speedwriter text-tprimary-400" for="dot-text-field">Specialty:</label>
      <input id="dot-text-field" type="text" class="border-b border-tprimary-0 px-1 w-full" bind:value={specialty} on:input={handleInput} placeholder="Enter text" />
    </div>
  {/if}
</div>
