<script lang="ts">
  import { confirmationDialogStore } from '$lib/confirmationDialogStore';
  export let message: string = 'Are you sure?';
  export let confirmText: string = 'Yes';
  export let cancelText: string = 'No';
  export let onConfirm: () => void;
  export let onCancel: () => void;

  function handleConfirm() {
    confirmationDialogStore.update((d) => ({ ...d, visible: false }));
    onConfirm && onConfirm();
  }

  function handleCancel() {
    confirmationDialogStore.update((d) => ({ ...d, visible: false }));
    onCancel && onCancel();
  }
</script>

<div class="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
  <div class="bg-primary rounded px-5 py-3 max-w-sm w-full text-center">
    <div class="mb-4 text-lg font-semibold">{message}</div>
    <div class="flex justify-center gap-4">
      <button class="px-6 py-1 !bg-success-0 rounded hover:!bg-success-50" on:click={handleConfirm}>{confirmText}</button>
      <button class="px-6 py-1 !bg-error-0 rounded hover:!bg-error-50" on:click={handleCancel}>{cancelText}</button>
    </div>
  </div>
</div>
