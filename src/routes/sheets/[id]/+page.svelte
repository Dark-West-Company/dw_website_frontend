<script>
  import { onMount, onDestroy } from 'svelte';
  import SharedSection from '$lib/components/sheets/SharedSection.svelte';
  import HumanSection from '@/components/sheets/HumanSection.svelte';
  import VampireSection from '@/components/sheets/VampireSection.svelte';
  import WerewolfSection from '@/components/sheets/WerewolfSection.svelte';
  import MageSection from '@/components/sheets/MageSection.svelte';
  import { eventBus, events } from '$lib/eventBus';
  import { apiPatch, apiGet } from '$lib/api';

  let sheetId = '';
  let sheet = null;
  let originalSheetData = null;
  let isLoading = true;
  let isDirty = false;

  async function handleSheetDataChanged() {
    if (!sheet || !sheet.data) return;
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
</script>

<div class="grid grid-cols-[auto_300px] w-full h-full">
  {#if isLoading}
    <div class="flex items-center justify-center w-full h-full">
      <p>Loading character sheet...</p>
    </div>
  {:else if sheet}
    <div class="flex flex-col w-full h-full overflow-y-auto pb-5">
      <div class="grid grid-cols-3 items-center w-full px-5">
        <button class="flex items-center w-fit h-fit gap-1 !bg-transparent hover:!text-light-blue-0" on:click={() => history.back()}>
          <i class="mdi mdi-arrow-left" aria-hidden="true"></i>
          <span>Back</span>
        </button>

        <div class="text-2xl mt-4 mb-4 text-center font-rampart-spurs-stamp whitespace-nowrap tracking-wider">{sheet.data.character_type} Character Sheet</div>

        <div class="flex gap-2 ml-auto">
          <button class="px-2 py-1 rounded !bg-medium-green-0 hover:!bg-light-green-0" disabled={!isDirty} on:click={onSaveSheet}> Save </button>
          <button class="px-2 py-1 rounded !bg-red-900 hover:!bg-red-700" disabled={!isDirty} on:click={onDiscardChanges}> Discard </button>
        </div>
      </div>

      <SharedSection sheet={sheet.data} />
      <!-- Other sections will be rendered here based on character type -->
      <div class="px-5 mt-2">
        {#if sheet.data.character_type === 'human'}
          <HumanSection sheetData={sheet.data} />
        {/if}

        {#if sheet.data.character_type === 'vampire'}
          <VampireSection sheetData={sheet.data} />
        {/if}

        {#if sheet.data.character_type === 'werewolf'}
          <WerewolfSection sheetData={sheet.data} />
        {/if}

        {#if sheet.data.character_type === 'mage'}
          <MageSection sheetData={sheet.data} />
        {/if}
      </div>
    </div>
  {:else}
    <div class="flex items-center justify-center w-full h-full">
      <p>Character sheet not found.</p>
    </div>
  {/if}

  <div class="bg-gradient-to-br from-black/15 to-background-0 border-l border-cream-0/20 p-4"> Rolls sidebar </div>
</div>
