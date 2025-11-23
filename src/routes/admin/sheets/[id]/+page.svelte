<script>
  import SharedSection from '$lib/components/sheets/SharedSection.svelte';
  import HumanSection from '$lib/components/sheets/HumanSection.svelte';
  import VampireSection from '$lib/components/sheets/VampireSection.svelte';
  import WerewolfSection from '$lib/components/sheets/WerewolfSection.svelte';
  import MageSection from '$lib/components/sheets/MageSection.svelte';
  import Changelog from '$lib/components/sheets/Changelog.svelte';
  import AdminSheetControls from '$lib/components/sheets/AdminSheetControls.svelte';

  import { eventBus, events } from '$lib/eventBus';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { apiGet, apiPatch } from '$lib/api';
  import { userData } from '$lib/userStore';
  import toast from 'svelte-french-toast';
  import { requestConfirmation } from '$lib/confirmationDialogStore';

  let sheetId = '';
  let sheet = null;
  let originalSheetData = null;
  let isLoading = true;
  let isDirty = false;
  let saveLoading = false;

  // Tab state for sidebar
  let activeTab = 'admin';
  const tabs = [
    { key: 'admin', label: 'Admin' },
    { key: 'changelog', label: 'Changelog' },
    { key: 'rolling', label: 'Rolling' },
  ];

  async function handleSheetDataChanged() {
    if (!sheet || !sheet.data) return;
    isDirty = JSON.stringify(sheet.data) !== JSON.stringify(originalSheetData);
  }

  onMount(async () => {
    // Only load sheet data, admin guard handled by layout
    const pathParts = window.location.pathname.split('/');
    sheetId = pathParts[pathParts.length - 1];
    try {
      const res = await apiGet(`/api/admin/sheets/${sheetId}`);
      if (res.ok) {
        sheet = await res.json();
        originalSheetData = JSON.parse(JSON.stringify(sheet.data));
        isLoading = false;
        if (!sheet || sheet.error || sheet.success === false) {
          window.location.href = '/sheets';
        }
      } else {
        toast.error('Failed to load sheet.');
        goto(resolve('/admin/sheets'));
      }
    } catch (err) {
      console.error('Failed to load sheet:', sheetId, err);
      toast.error('Error loading sheet.');
      goto(resolve('/admin/sheets'));
    }
    eventBus.on(events.SHEET_DATA_CHANGED, handleSheetDataChanged);
  });

  const onSaveSheet = async () => {
    requestConfirmation(
      'Are you sure you want to save changes to this character sheet?',
      async () => {
        // confirmed
        await saveSheetData();
      },
      () => {
        // cancelled
      }
    );
  };

  const saveSheetData = async () => {
    if (!sheet || !sheet.data) return;
    try {
      saveLoading = true;
      const res = await apiPatch(`/api/admin/sheets/${sheet.data.character_sheet_id}`, sheet.data);
      const result = await res.json();
      isDirty = false;
      if (!result.success) {
        console.error('Failed to update character sheet:', result.error);
        toast.error('Failed to save character sheet.', { icon: '❌' });

        if (originalSheetData) {
          sheet.data = JSON.parse(JSON.stringify(originalSheetData));
          isDirty = false;
        }
      } else {
        toast.success('Character sheet saved successfully.', { icon: '✅' });
        originalSheetData = JSON.parse(JSON.stringify(sheet.data));
      }
    } catch (err) {
      console.error('Error updating character sheet:', err);
    } finally {
      saveLoading = false;
    }
  };

  const onDiscardChanges = () => {
    requestConfirmation(
      'Are you sure you want to discard all unsaved changes?',
      () => {
        // confirmed
        if (originalSheetData) {
          sheet.data = JSON.parse(JSON.stringify(originalSheetData));
          isDirty = false;
        }
      },
      () => {
        // cancelled
      }
    );
  };

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

<div class="grid grid-cols-[auto_300px] w-full h-full border-t-2 border-black">
  {#if isLoading}
    <div class="flex items-center justify-center w-full h-full">
      <p>Loading character sheet...</p>
    </div>
  {:else if sheet}
    <div class="flex flex-col w-full h-full overflow-y-auto pb-5 bg-primary-0/80">
      <div class="max-w-[1300px] mx-auto w-full">
        <div class="grid grid-cols-[1fr_auto_1fr] items-center w-full px-5">
          <button class="flex items-center w-fit h-fit gap-1 !bg-transparent hover:!text-info" on:click={() => goto(resolve('/admin/sheets'))}>
            <i class="mdi mdi-arrow-left" aria-hidden="true"></i>
            <span>Back</span>
          </button>

          <div class="flex flex-col items-center mt-4 mb-4">
            <div class="text-2xl text-center font-rampart-spurs-stamp whitespace-nowrap tracking-wider text-tprimary">{sheet.data.character_type} Character Sheet</div>
          </div>

          <div class="flex items-center gap-2 ml-auto">
            <div class="text-center capitalize">{sheet.data.mode} Mode</div>

            <button class="px-2 py-1 rounded !bg-success-0 hover:!bg-success-50" disabled={!isDirty || saveLoading} on:click={onSaveSheet}>
              {saveLoading ? 'Saving...' : 'Save'}
            </button>
            <button class="px-2 py-1 rounded !bg-red-900 hover:!bg-red-700" disabled={!isDirty || saveLoading} on:click={onDiscardChanges}> Discard </button>
          </div>
        </div>

        <SharedSection sheet={sheet.data} mode="admin" />
        <!-- Other sections will be rendered here based on character type -->
        <div class="px-5 mt-2">
          {#if sheet.data.character_type === 'human'}
            <HumanSection sheetData={sheet.data} mode="admin" />
          {/if}

          {#if sheet.data.character_type === 'vampire'}
            <VampireSection sheetData={sheet.data} mode="admin" />
          {/if}

          {#if sheet.data.character_type === 'werewolf'}
            <WerewolfSection sheetData={sheet.data} mode="admin" />
          {/if}

          {#if sheet.data.character_type === 'mage'}
            <MageSection sheetData={sheet.data} mode="admin" />
          {/if}
        </div>
      </div>
    </div>
  {:else}
    <div class="flex items-center justify-center w-full h-full">
      <p>Character sheet not found.</p>
    </div>
  {/if}
  <div class="bg-background-0/80 p-0 flex flex-col h-full">
    <!-- Tabs -->
    <div class="flex bg-primary">
      {#each tabs as tab}
        <button
          class="flex-1 py-2 text-center font-semibold transition-colors
            hover:bg-primary-100
            {activeTab === tab.key ? '!bg-primary-500 !text-tprimary' : 'bg-transparent text-tsecondary'}"
          on:click={() => (activeTab = tab.key)}
          type="button"
        >
          {tab.label}
        </button>
      {/each}
    </div>
    <!-- Tab Content -->
    <div class="flex-1 overflow-y-auto p-4">
      {#if activeTab === 'admin'}
        {#if sheet && sheet.data}
          <AdminSheetControls sheet={sheet.data} />
        {/if}
      {:else if activeTab === 'changelog'}
        {#if sheet && sheet.data}
          <Changelog {sheetId} />
        {/if}
      {:else if activeTab === 'rolling'}
        <div class="text-tprimary space-y-2">
          <div class="font-bold text-lg">Rolling</div>
          <ul class="list-disc pl-5 space-y-1">
            <li>TODO: Add dice rolling tools or logs here</li>
          </ul>
        </div>
      {/if}
    </div>
  </div>
</div>
