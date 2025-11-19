<script lang="ts">
  import { apiPatch } from '$lib/api';
  export let sheet: any;

  let isSaving = false;
  let error = '';

  async function toggleMode() {
    if (!sheet) return;
    isSaving = true;
    error = '';
    const newMode = sheet.mode === 'active' ? 'creative' : 'active';
    try {
      const res = await apiPatch(`/api/admin/sheets/${sheet.id}`, {
        ...sheet,
        mode: newMode,
      });
      const result = await res.json();
      if (result.success) {
        sheet.mode = newMode;
        // TODO refresh sheet data event through eventbus
      } else {
        error = result.error || 'Failed to update mode.';
      }
    } catch (err) {
      error = 'Network error while updating mode.';
    }
    isSaving = false;
  }
</script>

<div class="flex flex-col gap-6">
  <!-- Meta Info Section -->
  <div class="space-y-1">
    <div class="text-base">
      Mode: <span class="font-semibold capitalize">{sheet?.mode ?? 'Unknown'}</span>
    </div>
    <div class="text-base"> TODO: Fetch and display in-game person name </div>
    <!-- Placeholder for more meta info -->
  </div>

  <!-- Actions Section -->
  <div class="flex flex-col gap-2">
    <button class="px-3 py-2 rounded !bg-primary hover:!bg-success-900 transition disabled:opacity-60" on:click={toggleMode} disabled={isSaving}>
      {sheet?.mode === 'active' ? 'Switch to Creative Mode' : 'Switch to Active Mode'}
    </button>
    {#if error}
      <div class="text-red-600 text-sm">{error}</div>
    {/if}
  </div>
</div>
