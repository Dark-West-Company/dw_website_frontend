<script>
  import { onMount, onDestroy } from 'svelte';
  import SharedSection from '$lib/components/sheets/SharedSection.svelte';
  import HumanSection from '@/components/sheets/HumanSection.svelte';
  import VampireSection from '@/components/sheets/VampireSection.svelte';
  import WerewolfSection from '@/components/sheets/WerewolfSection.svelte';
  import MageSection from '@/components/sheets/MageSection.svelte';
  import DiceRoller from '@/components/sheets/DiceRoller.svelte';

  import { eventBus, events } from '$lib/eventBus';
  import { apiPatch, apiGet } from '$lib/api';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { sheetStore } from '$lib/sheetStore';

  let sheetId = '';
  let sheet = null;
  let originalSheetData = null;
  let isLoading = true;
  let isDirty = false;

  async function handleSheetDataChanged() {
    if (!sheet || !sheet.data) return;
    console.log('Sheet data changed:', sheet.data);
    isDirty = JSON.stringify(sheet.data) !== JSON.stringify(originalSheetData);
  }

  onMount(async () => {
    let id = '';
    if (window.location.pathname.startsWith('/sheets/')) {
      id = window.location.pathname.split('/').pop();
    }
    sheetId = id;
    if (sheetId) {
      try {
        const res = await apiGet(`/api/character/sheet/${sheetId}`);
        if (res.ok) {
          sheet = await res.json();
          originalSheetData = JSON.parse(JSON.stringify(sheet.data));
          console.log('Loaded sheet:', sheet);
          isLoading = false;
          if (!sheet || sheet.error || sheet.success === false) {
            window.location.href = '/sheets';
          }
        } else {
          window.location.href = '/sheets';
        }
      } catch {
        window.location.href = '/sheets';
      }
    }

    eventBus.on(events.SHEET_DATA_CHANGED, handleSheetDataChanged);
  });

  const onSaveSheet = async () => {
    if (!sheet || !sheet.data) return;
    try {
      console.log('Updating sheet data on backend:', sheet);
      const res = await apiPatch(`/api/character/sheet/${sheetId}`, sheet.data);
      const result = await res.json();
      originalSheetData = JSON.parse(JSON.stringify(sheet.data));
      isDirty = false;
      if (!result.success) {
        console.error('Failed to update character sheet:', result.error);
      }
    } catch (err) {
      console.error('Error updating character sheet:', err);
    }
  };

  const onDiscardChanges = () => {
    if (originalSheetData) {
      sheet.data = JSON.parse(JSON.stringify(originalSheetData));
      isDirty = false;
    }
  };

  onDestroy(() => {
    eventBus.off(events.SHEET_DATA_CHANGED, handleSheetDataChanged);
  });

  async function fetchWerewolfGifts() {
    try {
      const res = await apiGet('/api/character/werewolf-gifts');
      const result = await res.json();
      if (result.success) {
        sheetStore.update((store) => ({ ...store, werewolfGifts: result.gifts }));
      }
    } catch (err) {
      console.error('Failed to fetch werewolf gifts', err);
    }
  }

  $: if (sheet && sheet.data && sheet.data.character_type === 'werewolf') {
    fetchWerewolfGifts();
  }
</script>

<div class="flex flex-col relative w-full h-full">
  <div class="torn-edge-top"></div>

  <div class="grid grid-cols-[auto_300px] w-full grow overflow-hidden bg-primary">
    {#if isLoading}
      <div class="flex items-center justify-center w-full h-full">
        <p>Loading character sheet...</p>
      </div>
    {:else if sheet}
      <div class="flex flex-col w-full h-full overflow-y-auto pb-5 bg-primary">
        <div class="max-w-[1300px] mx-auto w-full">
          <div class="grid grid-cols-[1fr_auto_1fr] items-center w-full px-5">
            <button class="flex items-center w-fit h-fit gap-1 !bg-transparent hover:!text-info" on:click={() => goto(resolve('/sheets'))}>
              <i class="mdi mdi-arrow-left" aria-hidden="true"></i>
              <span>Back</span>
            </button>

            <div class="flex flex-col items-center mt-4 mb-4">
              <div class="text-3xl text-center font-rampart-spurs-stamp whitespace-nowrap tracking-wider text-tprimary">{sheet.data.character_type} Character Sheet</div>
            </div>

            <div class="flex items-center gap-2 ml-auto">
              <div class="text-center capitalize">{sheet.data.mode} Mode</div>

              <button class="px-2 py-1 rounded !bg-success-0 hover:!bg-success-50" disabled={!isDirty} on:click={onSaveSheet}> Save </button>
              <button class="px-2 py-1 rounded !bg-red-900 hover:!bg-red-700" disabled={!isDirty} on:click={onDiscardChanges}> Discard </button>
            </div>
          </div>

          <SharedSection sheet={sheet.data} mode={sheet.data.mode} />
          <!-- Other sections will be rendered here based on character type -->
          <div class="mt-2">
            {#if sheet.data.character_type === 'human'}
              <HumanSection sheetData={sheet.data} mode={sheet.data.mode} />
            {/if}

            {#if sheet.data.character_type === 'vampire'}
              <VampireSection sheetData={sheet.data} mode={sheet.data.mode} />
            {/if}

            {#if sheet.data.character_type === 'werewolf'}
              <WerewolfSection sheetData={sheet.data} mode={sheet.data.mode} />
            {/if}

            {#if sheet.data.character_type === 'mage'}
              <MageSection sheetData={sheet.data} mode={sheet.data.mode} />
            {/if}
          </div>
        </div>
      </div>
    {:else}
      <div class="flex items-center justify-center w-full h-full">
        <p>Character sheet not found.</p>
      </div>
    {/if}

    <div class="p-4 overflow-hidden bg-background-0 !rounded-tl-2xl">
      {#if sheet && sheet.data}
        <DiceRoller sheet={sheet.data} mode={sheet.data.mode} />
      {/if}
    </div>
  </div>
</div>

<style>
  .torn-edge-top {
    /* position: absolute;
    top: -100px;
    right: 0;
    left: 0; */

    height: 67px;
    min-height: 67px;
    background-image: url(/src/lib/assets/page_torn_edge_black.png);
    background-repeat: repeat-x;
    background-size: 2000px auto;
    background-position: top center;

    filter: invert(8%) sepia(6%) saturate(2495%) hue-rotate(349deg) brightness(92%) contrast(81%);
    z-index: 10;
  }
</style>
