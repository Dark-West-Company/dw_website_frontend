<script lang="ts">
  /**
   * @typedef {Object} Gift
   * @property {number} id
   * @property {string} gift_name
   * @property {string} gift_description
   * @property {number} gift_level
   * @property {string} created_at
   * @property {string} updated_at
   */
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { apiGet, apiPost, apiPatch } from '$lib/api';

  const gifts = writable([]);
  const loading = writable(true);
  const error = writable('');
  const editingGift = writable(null);
  const creating = writable(false);

  let newGift = {
    gift_name: '',
    gift_description: '',
    gift_level: 1,
  };

  async function fetchGifts() {
    loading.set(true);
    error.set('');
    try {
      const res = await apiGet('/api/admin/werewolf-gifts');
      const data = await res.json();
      if (data.success) {
        gifts.set(data.gifts);
      } else {
        error.set(data.error || 'Failed to load gifts');
      }
    } catch {
      error.set('Network error');
    }
    loading.set(false);
  }

  async function createGift() {
    error.set('');
    try {
      const res = await apiPost('/api/admin/werewolf-gifts', {
        gift_name: newGift.gift_name,
        gift_description: newGift.gift_description,
        gift_level: newGift.gift_level,
      });
      const data = await res.json();
      if (data.success) {
        fetchGifts();
        creating.set(false);
        newGift = { gift_name: '', gift_description: '', gift_level: 1 };
      } else {
        error.set(data.error || 'Failed to create gift');
      }
    } catch {
      error.set('Network error');
    }
  }

  async function updateGift(gift) {
    error.set('');
    try {
      const res = await apiPatch(`/api/admin/werewolf-gifts/${gift.id}`, {
        gift_name: gift.gift_name,
        gift_description: gift.gift_description,
        gift_level: gift.gift_level,
      });
      const data = await res.json();
      if (data.success) {
        fetchGifts();
        editingGift.set(null);
      } else {
        error.set(data.error || 'Failed to update gift');
      }
    } catch {
      error.set('Network error');
    }
  }

  onMount(fetchGifts);
</script>

<div class="h-full w-full flex flex-col">
  <div class="flex items-center gap-2">
    <a href="/admin" class="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 text-xl font-bold hover:bg-gray-300" title="Back to Admin">&larr;</a>
    <h1 class="text-2xl font-bold">Werewolf Gifts Admin</h1>
  </div>

  {#if $error}
    <div class="text-red-600 mb-2">{$error}</div>
  {/if}

  {#if $loading}
    <div>Loading gifts...</div>
  {:else}
    <div class="flex grow">
      <!-- Left: Gifts List -->
      <div class="w-64 min-w-56 border-r border-t border-background-500">
        <button
          class="mb-1 w-full px-3 py-2"
          on:click={() => {
            creating.set(true);
            editingGift.set(null);
          }}>New Gift</button
        >
        {#if $gifts.length === 0}
          <div class="text-gray-500 mb-4">No werewolf gifts have been created yet.</div>
        {:else}
          <ul class="flex flex-col gap-2 border-t border-background-500">
            {#each $gifts as gift (gift.id)}
              <li class="flex items-center justify-between px-2 py-1 border-b border-background-500">
                <span class="font-medium">{gift.gift_name}</span>
                <button
                  class="text-xs py-1 px-2"
                  on:click={() => {
                    editingGift.set({ ...gift });
                    creating.set(false);
                  }}>Edit</button
                >
              </li>
            {/each}
          </ul>
        {/if}
      </div>

      <!-- Right: Main Content Area -->
      <div class="flex-1 pl-4 rounded-lg border-l border-t border-background-500">
        {#if $creating}
          <div class="p-4 bg-gray-50 max-w-lg mt-4">
            <h2 class="font-semibold mb-2">Create Gift</h2>
            <div class="flex gap-6">
              <label>
                Name:
                <input class="border border-background-500 px-2 w-full mb-2" bind:value={newGift.gift_name} />
              </label>
              <label>
                Level:
                <input type="number" min="1" max="5" class="border border-background-500 px-3 py-2 w-16 mb-2" bind:value={newGift.gift_level} />
              </label>
            </div>

            <label>
              Description:
              <textarea class="border border-background-500 px-3 py-2 w-full mb-2" bind:value={newGift.gift_description}></textarea>
            </label>

            <button class="px-3 py-1 bg-blue-700 text-white rounded" on:click={createGift}>Save</button>
            <button class="ml-2 px-3 py-1 bg-gray-400 text-white rounded" on:click={() => creating.set(false)}>Cancel</button>
          </div>
        {:else if $editingGift}
          <div class="p-4 bg-gray-50 max-w-lg">
            <h2 class="font-semibold mb-2">Edit Gift</h2>

            <div class="flex gap-6 mb-4">
              <label>
                Name:
                <input class="border border-background-500 px-3 py-2" bind:value={$editingGift.gift_name} />
              </label>

              <label>
                Level:
                <input type="number" min="1" max="5" class="border border-background-500 px-3 py-2 w-16" bind:value={$editingGift.gift_level} />
              </label>
            </div>

            <label>
              Description:
              <textarea class="border border-background-500 px-3 py-2 w-full h-64 mb-2" bind:value={$editingGift.gift_description}></textarea>
            </label>

            <button class="px-3 py-1 bg-blue-700 text-white rounded" on:click={() => updateGift($editingGift)}>Save</button>
            <button class="ml-2 px-3 py-1 bg-gray-400 text-white rounded" on:click={() => editingGift.set(null)}>Cancel</button>
          </div>
        {:else}
          <div class="text-gray-500 mt-4">Select a gift to edit or create a new one.</div>
        {/if}
      </div>
    </div>
  {/if}
</div>
