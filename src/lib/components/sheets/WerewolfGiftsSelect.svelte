<script>
  import HoverPopup from '$lib/components/HoverPopup.svelte';
  import { sheetStore } from '$lib/sheetStore';
  import { derived } from 'svelte/store';
  import { eventBus, events } from '$lib/eventBus';

  export let gifts; // array of 10 gift IDs
  export let sheet;
  export let field;
  export let startingIndex = 0; // 0 or 5

  let selects = [0, 1, 2, 3, 4];
  let expandedPanels = [false, false, false, false, false];
  const optionsStore = derived(sheetStore, ($store) => {
    const arr = $store.werewolfGifts ?? [];
    return arr.slice().sort((a, b) => a.name.localeCompare(b.name));
  });

  // Prevent duplicate selection
  function getFilteredOptions(idx) {
    const selected = gifts.filter((g, i) => i !== startingIndex + idx);
    return $optionsStore.map((opt) => ({
      ...opt,
      disabled: selected.includes(opt.id),
    }));
  }
  function handleSelectChange(idx, e) {
    const val = e.target.value === '' ? null : parseInt(e.target.value);
    gifts[startingIndex + idx] = val;
    if (sheet && field) {
      sheet[field] = gifts;
      eventBus.emit(events.SHEET_DATA_CHANGED, sheet);
    }
  }

  function handleExpandToggle(idx) {
    expandedPanels[idx] = !expandedPanels[idx];
  }

  function handleClear(idx) {
    gifts[startingIndex + idx] = '';
    if (sheet && field) {
      sheet[field] = gifts;
      eventBus.emit(events.SHEET_DATA_CHANGED, sheet);
    }
  }
</script>

<div class="flex flex-col items-center gap-1 relative border rounded-xl border-black pb-3 pt-4 px-3">
  <div class="absolute left-0 right-0 -top-3 flex justify-center">
    <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider rounded text-tprimary px-2">Gifts</div>
  </div>

  {#if $optionsStore && $optionsStore.length > 0}
    {#each selects as idx (startingIndex + idx)}
      <div class="flex flex-col w-full">
        <div class="flex w-full items-center gap-2">
          <select
            class="grow py-1 border-b border-tprimary-0 px-1 focus:outline-none text-sm"
            bind:value={gifts[startingIndex + idx]}
            on:change={(e) => handleSelectChange(idx, e)}
          >
            <option class="text-sm bg-background-900 text-tprimary-0" value="" disabled selected>Select a gift</option>
            {#each getFilteredOptions(idx) as opt (opt.id)}
              <option value={opt.id} disabled={opt.disabled} class="text-sm bg-background-900 text-tprimary-0">{opt.name}</option>
            {/each}
          </select>

          <HoverPopup text="Clear selection." disabled={!gifts[startingIndex + idx]}>
            <button
              class="ml-1 text-tprimary-0 transition flex items-center"
              type="button"
              aria-label="Clear selection"
              on:click={() => handleClear(idx)}
              disabled={!gifts[startingIndex + idx]}
            >
              <i class="mdi mdi-close-circle-outline text-lg" aria-hidden="true"></i>
            </button>
          </HoverPopup>

          {#if !gifts[startingIndex + idx]}
            <HoverPopup text="No gift selected.">
              <button class="ml-2 text-tprimary-0 transition flex items-center" disabled aria-label="No gift selected" tabindex="-1">
                <i class="mdi mdi-arrow-left-bold-box-outline text-lg" aria-hidden="true"></i>
              </button>
            </HoverPopup>
          {:else}
            <HoverPopup text="{expandedPanels[idx] ? 'Hide' : 'Show'} description.">
              <button
                class="ml-2 text-tprimary-0 transition flex items-center"
                on:click={() => handleExpandToggle(idx)}
                aria-expanded={expandedPanels[idx]}
                aria-controls={'gift-desc-' + idx}
                aria-label="Toggle gift description"
              >
                <i class={`mdi ${expandedPanels[idx] ? 'mdi-minus-box-outline' : 'mdi-plus-box-outline'} text-lg`} aria-hidden="true"></i>
              </button>
            </HoverPopup>
          {/if}
        </div>

        {#if expandedPanels[idx] && gifts[startingIndex + idx]}
          <div id={'gift-desc-' + idx} class="mt-1 p-2 bg-background-800 text-tprimary-0 rounded border border-background-700 text-sm">
            <div class="text-tprimary mb-1 font-semibold">
              {$optionsStore.find((opt) => opt.id === gifts[startingIndex + idx])?.name ?? ''}
            </div>
            <div class="whitespace-pre-line text-tsecondary">
              {$optionsStore.find((opt) => opt.id === gifts[startingIndex + idx])?.description ?? ''}
            </div>
          </div>
        {/if}
      </div>
    {/each}
  {:else}
    {#each selects as idx (idx)}
      <div class="flex items-center gap-2 animate-pulse">
        <div class="grow h-6 bg-background-700 rounded"></div>
        <div class="w-6 h-6 bg-background-700 rounded"></div>
      </div>
    {/each}
  {/if}
</div>
