<script lang="ts">
  /**
   * @typedef {Object} Gift
   * @property {number} id
   * @property {string} name
   * @property {string} description
   * @property {string} short_description
   * @property {number} rank
   * @property {string} created_at
   * @property {string} updated_at
   */
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { apiGet, apiPost, apiPatch } from '$lib/api';

  const TRIBES = [
    { label: 'Black Furies', value: 'black_furies' },
    { label: 'Bone Onawers', value: 'bone_onawers' },
    { label: 'Children of Gaia', value: 'children_of_gaia' },
    { label: 'Fianna', value: 'fianna' },
    { label: 'Iron Riders', value: 'iron_riders' },
    { label: 'Get of Fenris', value: 'get_of_fenris' },
    { label: 'Red Talons', value: 'red_talons' },
    { label: 'Shadow Lords', value: 'shadow_lords' },
    { label: 'Silent Striders', value: 'silent_striders' },
    { label: 'Silver Fangs', value: 'silver_fangs' },
    { label: 'Stargazers', value: 'stargazers' },
    { label: 'Ghost Council', value: 'ghost_council' },
    { label: 'Galestalkers', value: 'galestalkers' },
  ];
  const BREEDS = [
    { label: 'Homid', value: 'homid' },
    { label: 'Warborn', value: 'warborn' },
    { label: 'Lupus', value: 'lupus' },
  ];
  const AUSPICES = [
    { label: 'Ragabash', value: 'ragabash' },
    { label: 'Theurge', value: 'theurge' },
    { label: 'Philodox', value: 'philodox' },
    { label: 'Galliard', value: 'galliard' },
    { label: 'Ahroun', value: 'ahroun' },
  ];

  const gifts = writable([]);
  const loading = writable(true);
  const error = writable('');
  const editingGift = writable(null);
  const creating = writable(false);

  let newGift = {
    name: '',
    description: '',
    short_description: '',
    rank: 1,
    tribes: [],
    breeds: [],
    auspices: [],
    restricted: false,
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
        name: newGift.name,
        description: newGift.description,
        short_description: newGift.short_description,
        rank: newGift.rank,
        tribes: newGift.tribes,
        breeds: newGift.breeds,
        auspices: newGift.auspices,
        restricted: newGift.restricted,
      });
      const data = await res.json();
      if (data.success) {
        fetchGifts();
        creating.set(false);
        newGift = { name: '', description: '', short_description: '', rank: 1, tribes: [], breeds: [], auspices: [], restricted: false };
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
        name: gift.name,
        description: gift.description,
        short_description: gift.short_description,
        rank: gift.rank,
        tribes: gift.tribes,
        breeds: gift.breeds,
        auspices: gift.auspices,
        restricted: gift.restricted,
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

  let giftSearch = '';
  $: filteredGifts = $gifts.filter(
    (g) =>
      giftSearch.trim() === '' ||
      g.name?.toLowerCase().includes(giftSearch.toLowerCase()) ||
      g.short_description?.toLowerCase().includes(giftSearch.toLowerCase()) ||
      g.description?.toLowerCase().includes(giftSearch.toLowerCase())
  );
</script>

<div class="h-full w-full flex flex-col overflow-hidden">
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
    <div class="flex grow overflow-hidden">
      <!-- Left: Gifts List -->
      <div class="flex flex-col w-64 min-w-56 border-r border-t border-background-500">
        <input type="text" placeholder="Search gifts..." class="w-full px-2 py-1 mb-1 border-b border-background-500" bind:value={giftSearch} />
        <button
          class="mb-1 w-full px-3 py-2"
          on:click={() => {
            creating.set(true);
            editingGift.set(null);
          }}>New Gift</button
        >
        {#if $gifts.length === 0}
          <div class="text-gray-500 mb-4 px-3">No werewolf gifts have been created yet.</div>
        {:else}
          <ul class="flex flex-col grow gap-2 border-t border-background-500 overflow-y-auto">
            {#each filteredGifts as gift (gift.id)}
              <li class="flex items-center justify-between pl-2 pr-1 py-1 border-b border-background-500">
                <span class="font-medium">{gift.name}</span>
                <div>
                  {#if gift.restricted}
                    <i class="mdi mdi-lock w-4 h-4 text-gray-600 mr-1 inline"></i>
                  {/if}
                  <button
                    class="text-xs py-1 px-2"
                    on:click={() => {
                      editingGift.set({ ...gift });
                      creating.set(false);
                    }}>Edit</button
                  >
                </div>
              </li>
            {/each}
          </ul>
        {/if}
      </div>

      <!-- Right: Main Content Area -->
      <div class="flex-1 pl-4 rounded-lg border-l border-t border-background-500 overflow-y-auto">
        {#if $creating}
          <div class="flex flex-col p-4 bg-gray-50 mt-4">
            <h2 class="font-semibold mb-2">Create Gift</h2>

            <div class="flex gap-6 mb-2">
              <label>
                Name:
                <input class="border border-background-500 px-2" bind:value={newGift.name} />
              </label>

              <label>
                Rank:
                <input type="number" min="1" max="5" class="border border-background-500 px-3" bind:value={newGift.rank} />
              </label>

              <label class="flex items-center gap-2">
                <input type="checkbox" bind:checked={newGift.restricted} />
                Restricted
              </label>
            </div>

            <div class="flex gap-2 mb-2">
              <label>
                Tribes:
                <div class="flex flex-col">
                  {#each TRIBES as tribe (tribe.value)}
                    <label class="mr-2">
                      <input type="checkbox" value={tribe.value} bind:group={newGift.tribes} />
                      {tribe.label}
                    </label>
                  {/each}
                </div>
              </label>

              <label>
                Breeds:
                <div class="flex flex-col">
                  {#each BREEDS as breed (breed.value)}
                    <label class="mr-2">
                      <input type="checkbox" value={breed.value} bind:group={newGift.breeds} />
                      {breed.label}
                    </label>
                  {/each}
                </div>
              </label>

              <label>
                Auspices:
                <div class="flex flex-col">
                  {#each AUSPICES as auspice (auspice.value)}
                    <label class="mr-2">
                      <input type="checkbox" value={auspice.value} bind:group={newGift.auspices} />
                      {auspice.label}
                    </label>
                  {/each}
                </div>
              </label>
            </div>

            <label>
              Short Description:
              <textarea class="border border-background-500 px-2 mb-2 w-full" bind:value={newGift.short_description}></textarea>
            </label>

            <label>
              Full Description:
              <textarea class="border border-background-500 px-3 py-2 w-full mb-2 h-32" bind:value={newGift.description}></textarea>
            </label>

            <div class="flex gap-2">
              <button class="px-3 py-1 bg-blue-700 text-white rounded" on:click={createGift}>Save</button>
              <button class="ml-2 px-3 py-1 bg-gray-400 text-white rounded" on:click={() => creating.set(false)}>Cancel</button>
            </div>
          </div>
        {:else if $editingGift}
          <div class="flex flex-col p-4 bg-gray-50 mt-4">
            <h2 class="font-semibold mb-2">Edit Gift</h2>

            <div class="flex gap-6 mb-2">
              <label>
                Name:
                <input class="border border-background-500 px-2" bind:value={$editingGift.name} />
              </label>

              <label>
                Rank:
                <input type="number" min="1" max="5" class="border border-background-500 px-3" bind:value={$editingGift.rank} />
              </label>

              <label class="flex items-center gap-2">
                <input type="checkbox" bind:checked={$editingGift.restricted} />
                Restricted
              </label>
            </div>

            <div class="flex gap-2 mb-2">
              <label>
                Tribes:
                <div class="flex flex-col">
                  {#each TRIBES as tribe (tribe.value)}
                    <label class="mr-2">
                      <input type="checkbox" value={tribe.value} bind:group={$editingGift.tribes} />
                      {tribe.label}
                    </label>
                  {/each}
                </div>
              </label>

              <label>
                Breeds:
                <div class="flex flex-col">
                  {#each BREEDS as breed (breed.value)}
                    <label class="mr-2">
                      <input type="checkbox" value={breed.value} bind:group={$editingGift.breeds} />
                      {breed.label}
                    </label>
                  {/each}
                </div>
              </label>

              <label>
                Auspices:
                <div class="flex flex-col">
                  {#each AUSPICES as auspice (auspice.value)}
                    <label class="mr-2">
                      <input type="checkbox" value={auspice.value} bind:group={$editingGift.auspices} />
                      {auspice.label}
                    </label>
                  {/each}
                </div>
              </label>
            </div>

            <label>
              Short Description:
              <textarea class="border border-background-500 px-2 mb-2 w-full" bind:value={$editingGift.short_description}></textarea>
            </label>

            <label>
              Full Description:
              <textarea class="border border-background-500 px-3 py-2 w-full mb-2 h-32" bind:value={$editingGift.description}></textarea>
            </label>

            <div class="flex gap-2">
              <button class="px-3 py-1 bg-blue-700 text-white rounded" on:click={() => updateGift($editingGift)}>Save</button>
              <button class="ml-2 px-3 py-1 bg-gray-400 text-white rounded" on:click={() => editingGift.set(null)}>Cancel</button>
            </div>
          </div>
        {:else}
          <div class="text-gray-500 mt-4">Select a gift to edit or create a new one.</div>
        {/if}
      </div>
    </div>
  {/if}
</div>
