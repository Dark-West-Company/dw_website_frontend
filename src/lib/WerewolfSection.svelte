<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { WerewolfData } from '../constants';
  import { TRIBES, AUSPICES, BREEDS } from '../constants';
  import DotControl from './DotControl.svelte';

  export let werewolfData: WerewolfData;

  const dispatch = createEventDispatcher();

  function updateData() {
    dispatch('update');
  }

  function updateGift(giftName: string, value: number) {
    if (value === 0) {
      delete werewolfData.gifts[giftName];
    } else {
      werewolfData.gifts[giftName] = value;
    }
    updateData();
  }

  function addGift() {
    const giftName = prompt('Enter gift name:');
    if (giftName && giftName.trim()) {
      werewolfData.gifts[giftName.trim()] = 1;
      updateData();
    }
  }

  function removeGift(giftName: string) {
    delete werewolfData.gifts[giftName];
    updateData();
  }
</script>

<div class="space-y-8">
  <div class="text-center">
    <h2 class="text-3xl font-bold text-wod-red mb-2">Werewolf</h2>
    <p class="text-wod-light-gray">Children of Gaia, Warriors of the Wyld</p>
  </div>

  <!-- Basic Info -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div class="bg-wod-gray rounded-lg p-6 space-y-4">
      <h3 class="text-xl font-semibold text-wod-red">Basic Information</h3>
      
      <div>
        <label for="tribe" class="block text-sm font-medium mb-1">Tribe</label>
        <select
          id="tribe"
          bind:value={werewolfData.tribe}
          on:change={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        >
          {#each TRIBES as tribe}
            <option value={tribe}>{tribe}</option>
          {/each}
        </select>
      </div>

      <div>
        <label for="auspice" class="block text-sm font-medium mb-1">Auspice</label>
        <select
          id="auspice"
          bind:value={werewolfData.auspice}
          on:change={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        >
          {#each AUSPICES as auspice}
            <option value={auspice}>{auspice}</option>
          {/each}
        </select>
      </div>

      <div>
        <label for="breed" class="block text-sm font-medium mb-1">Breed</label>
        <select
          id="breed"
          bind:value={werewolfData.breed}
          on:change={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        >
          {#each BREEDS as breed}
            <option value={breed}>{breed}</option>
          {/each}
        </select>
      </div>

      <div>
        <label for="nature" class="block text-sm font-medium mb-1">Nature</label>
        <input
          id="nature"
          type="text"
          bind:value={werewolfData.nature}
          on:input={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>

      <div>
        <label for="demeanor" class="block text-sm font-medium mb-1">Demeanor</label>
        <input
          id="demeanor"
          type="text"
          bind:value={werewolfData.demeanor}
          on:input={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>

      <div>
        <label for="concept" class="block text-sm font-medium mb-1">Concept</label>
        <input
          id="concept"
          type="text"
          bind:value={werewolfData.concept}
          on:input={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>
    </div>

    <!-- Stats -->
    <div class="bg-wod-gray rounded-lg p-6 space-y-6">
      <h3 class="text-xl font-semibold text-wod-red">Vital Statistics</h3>
      
      <!-- Rage -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <label for="rage" class="text-sm font-medium">Rage</label>
          <span class="text-wod-light-gray">{werewolfData.rage} / {werewolfData.maxRage}</span>
        </div>
        <div class="space-y-2">
          <div class="flex items-center space-x-2">
            <label for="rage-current" class="text-xs">Current:</label>
            <DotControl
              value={werewolfData.rage}
              maxValue={werewolfData.maxRage}
              minValue={0}
              size="small"
              ariaLabel="Current Rage"
              id="rage-current"
              on:change={(event) => { werewolfData.rage = event.detail; updateData(); }}
            />
          </div>
          <div class="flex items-center space-x-2">
            <label for="rage-max" class="text-xs">Max:</label>
            <DotControl
              value={werewolfData.maxRage}
              maxValue={10}
              minValue={1}
              size="small"
              ariaLabel="Max Rage"
              id="rage-max"
              on:change={(event) => { werewolfData.maxRage = event.detail; updateData(); }}
            />
          </div>
        </div>
      </div>

      <!-- Gnosis -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <label for="gnosis" class="text-sm font-medium">Gnosis</label>
          <span class="text-wod-light-gray">{werewolfData.gnosis} / {werewolfData.maxGnosis}</span>
        </div>
        <div class="space-y-2">
          <div class="flex items-center space-x-2">
            <label for="gnosis-current" class="text-xs">Current:</label>
            <DotControl
              value={werewolfData.gnosis}
              maxValue={werewolfData.maxGnosis}
              minValue={0}
              size="small"
              ariaLabel="Current Gnosis"
              id="gnosis-current"
              on:change={(event) => { werewolfData.gnosis = event.detail; updateData(); }}
            />
          </div>
          <div class="flex items-center space-x-2">
            <label for="gnosis-max" class="text-xs">Max:</label>
            <DotControl
              value={werewolfData.maxGnosis}
              maxValue={10}
              minValue={1}
              size="small"
              ariaLabel="Max Gnosis"
              id="gnosis-max"
              on:change={(event) => { werewolfData.maxGnosis = event.detail; updateData(); }}
            />
          </div>
        </div>
      </div>

      <!-- Willpower -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <label for="willpower" class="text-sm font-medium">Willpower</label>
          <span class="text-wod-light-gray">{werewolfData.willpower} / {werewolfData.maxWillpower}</span>
        </div>
        <div class="space-y-2">
          <div class="flex items-center space-x-2">
            <label for="willpower-current" class="text-xs">Current:</label>
            <DotControl
              value={werewolfData.willpower}
              maxValue={werewolfData.maxWillpower}
              minValue={0}
              size="small"
              ariaLabel="Current Willpower"
              id="willpower-current"
              on:change={(event) => { werewolfData.willpower = event.detail; updateData(); }}
            />
          </div>
          <div class="flex items-center space-x-2">
            <label for="willpower-max" class="text-xs">Max:</label>
            <DotControl
              value={werewolfData.maxWillpower}
              maxValue={10}
              minValue={1}
              size="small"
              ariaLabel="Max Willpower"
              id="willpower-max"
              on:change={(event) => { werewolfData.maxWillpower = event.detail; updateData(); }}
            />
          </div>
        </div>
      </div>

      <!-- Experience -->
      <div>
        <label for="experience" class="block text-sm font-medium mb-1">Experience Points</label>
        <input
          id="experience"
          type="number"
          bind:value={werewolfData.experience}
          on:input={updateData}
          min="0"
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>
    </div>
  </div>

  <!-- Renown -->
  <div class="bg-wod-gray rounded-lg p-6">
    <h3 class="text-xl font-semibold text-wod-red mb-6">Renown</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="text-center">
        <h4 class="font-medium mb-2 text-yellow-400">Glory</h4>
        <DotControl
          value={werewolfData.glory}
          maxValue={10}
          minValue={0}
          ariaLabel="Glory"
          id="glory"
          on:change={(event) => { werewolfData.glory = event.detail; updateData(); }}
        />
        <p class="text-xs text-wod-light-gray mt-2">Deeds of valor and combat prowess</p>
      </div>
      <div class="text-center">
        <h4 class="font-medium mb-2 text-blue-400">Honor</h4>
        <DotControl
          value={werewolfData.honor}
          maxValue={10}
          minValue={0}
          ariaLabel="Honor"
          id="honor"
          on:change={(event) => { werewolfData.honor = event.detail; updateData(); }}
        />
        <p class="text-xs text-wod-light-gray mt-2">Acts of nobility and righteousness</p>
      </div>
      <div class="text-center">
        <h4 class="font-medium mb-2 text-purple-400">Wisdom</h4>
        <DotControl
          value={werewolfData.wisdom}
          maxValue={10}
          minValue={0}
          ariaLabel="Wisdom"
          id="wisdom"
          on:change={(event) => { werewolfData.wisdom = event.detail; updateData(); }}
        />
        <p class="text-xs text-wod-light-gray mt-2">Insight and spiritual growth</p>
      </div>
    </div>
  </div>

  <!-- Gifts -->
  <div class="bg-wod-gray rounded-lg p-6">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-xl font-semibold text-wod-red">Gifts</h3>
      <button 
        on:click={addGift}
        class="bg-wod-red hover:bg-red-700 px-3 py-1 rounded text-sm transition-colors"
      >
        Add Gift
      </button>
    </div>

    {#if Object.keys(werewolfData.gifts).length === 0}
      <p class="text-wod-light-gray text-center py-4">No gifts learned yet.</p>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each Object.entries(werewolfData.gifts) as [giftName, level]}
          <div class="bg-wod-dark rounded p-4">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-medium">{giftName}</h4>
              <button 
                on:click={() => removeGift(giftName)}
                class="text-red-400 hover:text-red-300 text-sm"
                title="Remove gift"
              >
                ✕
              </button>
            </div>
            <DotControl
              value={level}
              maxValue={5}
              minValue={0}
              ariaLabel={`Gift level for ${giftName}`}
              id={`gift-${giftName}`}
              on:change={(event) => updateGift(giftName, event.detail)}
            />
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Pack Information -->
  <div class="bg-wod-gray rounded-lg p-6">
    <h3 class="text-xl font-semibold text-wod-red mb-4">Pack Information</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <label for="pack-name" class="block text-sm font-medium mb-2">Pack Name</label>
        <input
          id="pack-name"
          type="text"
          bind:value={werewolfData.pack}
          on:input={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>
      <div>
        <label for="pack-totem" class="block text-sm font-medium mb-2">Pack Totem</label>
        <input
          id="pack-totem"
          type="text"
          bind:value={werewolfData.totem}
          on:input={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>
    </div>
  </div>
</div>