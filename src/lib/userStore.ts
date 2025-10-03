import { writable } from 'svelte/store';

export const userData = writable({
  isAdmin: false,
  sheets: [],
  characters: [],
  user: null,
  isLoading: true,
});
