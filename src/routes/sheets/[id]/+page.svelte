<script>
  import { onMount, onDestroy } from 'svelte';
  import SharedSection from '$lib/components/sheets/SharedSection.svelte';
  import HumanSection from '$lib/HumanSection.svelte';
  import { eventBus, events } from '$lib/eventBus';
  import { apiPatch, apiGet } from '$lib/api';

  let sheetId = '';
  let sheet = null;

  async function handleSheetDataChanged() {
    if (!sheet || !sheet.data) return;
    try {
      console.log('Updating sheet data on backend:', sheet);
      const res = await apiPatch(`/api/character/sheet/${sheetId}`, sheet.data);
      const result = await res.json();
      if (!result.success) {
        console.error('Failed to update character sheet:', result.error);
      }
    } catch (err) {
      console.error('Error updating character sheet:', err);
    }
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
          console.log('Loaded sheet:', sheet);
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

  onDestroy(() => {
    eventBus.off(events.SHEET_DATA_CHANGED, handleSheetDataChanged);
  });
</script>

<div class="grid grid-cols-[auto_300px] w-full h-full">
  {#if sheet}
    <div class="flex flex-col w-full h-full overflow-y-auto pb-5 px-5">
      <SharedSection sheet={sheet.data} />
      <!-- Other sections will be rendered here based on character type -->
      {#if sheet.data.character_type === 'human'}
        <HumanSection sheetData={sheet.data} />
      {/if}
    </div>
  {:else}
    <div class="flex items-center justify-center w-full h-full">
      <p>Character sheet not found.</p>
    </div>
  {/if}
  <div class="bg-gray-100 p-4 border-l"> Rolls sidebar </div>
</div>
