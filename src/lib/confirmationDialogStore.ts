import { writable } from 'svelte/store';

type ConfirmationDialogState = {
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  visible: boolean;
};

export const confirmationDialogStore = writable<ConfirmationDialogState>({
  message: '',
  confirmText: 'Yes',
  cancelText: 'No',
  onConfirm: undefined,
  onCancel: undefined,
  visible: false
});

export function requestConfirmation(
  message: string,
  onConfirm: () => void,
  onCancel: () => void,
  confirmText = 'Yes',
  cancelText = 'No'
) {
  confirmationDialogStore.set({
    message,
    confirmText,
    cancelText,
    onConfirm,
    onCancel,
    visible: true
  });
}