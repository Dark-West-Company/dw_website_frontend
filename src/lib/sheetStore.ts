import { writable } from 'svelte/store';

export const sheetStore = writable({
  sheet: null,
  isLoading: true,
  werewolfGifts: [],
});
