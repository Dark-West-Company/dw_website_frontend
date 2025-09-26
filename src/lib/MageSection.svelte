<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { MageData } from '../constants';
  import { TRADITIONS, ESSENCES } from '../constants';
  import DotControl from './DotControl.svelte';

  export let mageData: MageData;

  const dispatch = createEventDispatcher();

  function updateData() {
    dispatch('update');
  }

  function addFocus() {
    const focusItem = prompt('Enter focus item:');
    if (focusItem && focusItem.trim()) {
      mageData.focus.push(focusItem.trim());
      updateData();
    }
  }

  function removeFocus(index: number) {
    mageData.focus.splice(index, 1);
    updateData();
  }

  function addSeeking() {
    const seeking = prompt('Enter seeking description:');
    if (seeking && seeking.trim()) {
      mageData.seekings.push(seeking.trim());
      updateData();
    }
  }

  function removeSeeking(index: number) {
    mageData.seekings.splice(index, 1);
    updateData();
  }

  const sphereNames = [
    'correspondence', 'entropy', 'forces', 'life', 'matter',
    'mind', 'prime', 'spirit', 'time'
  ] as const;

  const sphereLabels: Record<string, string> = {
    correspondence: 'Correspondence',
    entropy: 'Entropy',
    forces: 'Forces',
    life: 'Life',
    matter: 'Matter',
    mind: 'Mind',
    prime: 'Prime',
    spirit: 'Spirit',
    time: 'Time'
  };
</script>

<div class="space-y-8">
  <div class="text-center">
    <h2 class="text-3xl font-bold text-wod-red mb-2">Mage</h2>
    <p class="text-wod-light-gray">Awakened wielders of reality's fabric</p>
  </div>

  <!-- Basic Info -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div class="bg-wod-gray rounded-lg p-6 space-y-4">
      <h3 class="text-xl font-semibold text-wod-red">Basic Information</h3>
      
      <div>
        <label for="tradition" class="block text-sm font-medium mb-1">Tradition</label>
        <select
          id="tradition"
          bind:value={mageData.tradition}
          on:change={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        >
          {#each TRADITIONS as tradition}
            <option value={tradition}>{tradition}</option>
          {/each}
        </select>
      </div>

      <div>
        <label for="essence" class="block text-sm font-medium mb-1">Essence</label>
        <select
          id="essence"
          bind:value={mageData.essence}
          on:change={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        >
          {#each ESSENCES as essence}
            <option value={essence}>{essence}</option>
          {/each}
        </select>
      </div>

      <div>
        <label for="nature" class="block text-sm font-medium mb-1">Nature</label>
        <input
          id="nature"
          type="text"
          bind:value={mageData.nature}
          on:input={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>

      <div>
        <label for="demeanor" class="block text-sm font-medium mb-1">Demeanor</label>
        <input
          id="demeanor"
          type="text"
          bind:value={mageData.demeanor}
          on:input={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>

      <div>
        <label for="concept" class="block text-sm font-medium mb-1">Concept</label>
        <input
          id="concept"
          type="text"
          bind:value={mageData.concept}
          on:input={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>

      <div>
        <label for="avatar" class="block text-sm font-medium mb-1">Avatar</label>
        <textarea
          id="avatar"
          bind:value={mageData.avatar}
          on:input={updateData}
          rows="3"
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white resize-vertical"
        ></textarea>
      </div>
    </div>

    <!-- Stats -->
    <div class="bg-wod-gray rounded-lg p-6 space-y-6">
      <h3 class="text-xl font-semibold text-wod-red">Vital Statistics</h3>
      
      <!-- Arete -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <label for="arete" class="text-sm font-medium">Arete</label>
          <span class="text-wod-light-gray">{mageData.arete}</span>
        </div>
        <DotControl
          value={mageData.arete}
          maxValue={10}
          minValue={1}
          ariaLabel="Arete"
          id="arete"
          on:change={(event) => { mageData.arete = event.detail; updateData(); }}
        />
      </div>

      <!-- Willpower -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <label for="willpower" class="text-sm font-medium">Willpower</label>
          <span class="text-wod-light-gray">{mageData.willpower} / {mageData.maxWillpower}</span>
        </div>
        <div class="space-y-2">
          <div class="flex items-center space-x-2">
            <label for="willpower-current" class="text-xs">Current:</label>
            <DotControl
              value={mageData.willpower}
              maxValue={mageData.maxWillpower}
              minValue={0}
              size="small"
              ariaLabel="Current Willpower"
              id="willpower-current"
              on:change={(event) => { mageData.willpower = event.detail; updateData(); }}
            />
          </div>
          <div class="flex items-center space-x-2">
            <label for="willpower-max" class="text-xs">Max:</label>
            <DotControl
              value={mageData.maxWillpower}
              maxValue={10}
              minValue={1}
              size="small"
              ariaLabel="Max Willpower"
              id="willpower-max"
              on:change={(event) => { mageData.maxWillpower = event.detail; updateData(); }}
            />
          </div>
        </div>
      </div>

      <!-- Quintessence -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <label for="quintessence" class="text-sm font-medium">Quintessence</label>
          <span class="text-wod-light-gray">{mageData.quintessence} / {mageData.maxQuintessence}</span>
        </div>
        <div class="flex items-center space-x-4">
          <div class="flex-1">
            <input 
              type="range" 
              bind:value={mageData.quintessence} 
              on:input={updateData}
              min="0" 
              max={mageData.maxQuintessence}
              class="w-full"
            />
          </div>
          <div class="flex items-center space-x-2">
            <label for="maxQuintessence" class="text-xs">Max:</label>
            <input 
              type="number" 
              bind:value={mageData.maxQuintessence} 
              on:input={updateData}
              min="1" max="50"
              class="w-16 bg-wod-dark border border-wod-light-gray rounded px-2 py-1 text-white text-sm"
            />
          </div>
        </div>
      </div>

      <!-- Paradox -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <label for="paradox" class="text-sm font-medium">Paradox</label>
          <span class="text-wod-light-gray">{mageData.paradox}</span>
        </div>
        <input
          id="paradox"
          type="range"
          bind:value={mageData.paradox}
          on:input={updateData}
          min="0"
          max="20"
          class="w-full"
        />
      </div>

      <!-- Experience -->
      <div>
        <label for="experience" class="block text-sm font-medium mb-1">Experience Points</label>
        <input
          id="experience"
          type="number"
          bind:value={mageData.experience}
          on:input={updateData}
          min="0"
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>
    </div>
  </div>

  <!-- Spheres -->
  <div class="bg-wod-gray rounded-lg p-6">
    <h3 class="text-xl font-semibold text-wod-red mb-6">Spheres of Magic</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each sphereNames as sphere}
        <div class="bg-wod-dark rounded p-4">
          <h4 class="font-medium mb-2 text-center">{sphereLabels[sphere]}</h4>
          <div class="flex justify-center">
            <DotControl
              value={mageData.spheres[sphere]}
              maxValue={5}
              minValue={0}
              ariaLabel={`Sphere level for ${sphereLabels[sphere]}`}
              id={`sphere-${sphere}`}
              on:change={(event) => { mageData.spheres[sphere] = event.detail; updateData(); }}
            />
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Focus Items -->
  <div class="bg-wod-gray rounded-lg p-6">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-xl font-semibold text-wod-red">Focus Items</h3>
      <button 
        on:click={addFocus}
        class="bg-wod-red hover:bg-red-700 px-3 py-1 rounded text-sm transition-colors"
      >
        Add Focus
      </button>
    </div>

    {#if mageData.focus.length === 0}
      <p class="text-wod-light-gray text-center py-4">No focus items defined.</p>
    {:else}
      <div class="space-y-2">
        {#each mageData.focus as focusItem, index}
          <div class="flex items-center space-x-2 bg-wod-dark rounded p-3">
            <input 
              type="text" 
              bind:value={mageData.focus[index]} 
              on:input={updateData}
              class="flex-1 bg-transparent border-none text-white focus:outline-none"
            />
            <button 
              on:click={() => removeFocus(index)}
              class="text-red-400 hover:text-red-300"
              title="Remove focus item"
            >
              ✕
            </button>
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Seekings -->
  <div class="bg-wod-gray rounded-lg p-6">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-xl font-semibold text-wod-red">Seekings</h3>
      <button 
        on:click={addSeeking}
        class="bg-wod-red hover:bg-red-700 px-3 py-1 rounded text-sm transition-colors"
      >
        Add Seeking
      </button>
    </div>

    {#if mageData.seekings.length === 0}
      <p class="text-wod-light-gray text-center py-4">No seekings recorded.</p>
    {:else}
      <div class="space-y-3">
        {#each mageData.seekings as seeking, index}
          <div class="bg-wod-dark rounded p-4">
            <div class="flex items-start justify-between">
              <textarea 
                bind:value={mageData.seekings[index]} 
                on:input={updateData}
                rows="2"
                class="flex-1 bg-transparent border-none text-white resize-vertical focus:outline-none"
              ></textarea>
              <button 
                on:click={() => removeSeeking(index)}
                class="text-red-400 hover:text-red-300 ml-2"
                title="Remove seeking"
              >
                ✕
              </button>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>