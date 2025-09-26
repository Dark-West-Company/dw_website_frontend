<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { VampireData } from '../constants';
  import { CLANS } from '../constants';
  import DotControl from './DotControl.svelte';

  export let vampireData: VampireData;

  const dispatch = createEventDispatcher();

  function updateData() {
    dispatch('update');
  }

  function updateDiscipline(disciplineName: string, value: number) {
    if (value === 0) {
      delete vampireData.disciplines[disciplineName];
    } else {
      vampireData.disciplines[disciplineName] = value;
    }
    updateData();
  }

  function addDiscipline() {
    const disciplineName = prompt('Enter discipline name:');
    if (disciplineName && disciplineName.trim()) {
      vampireData.disciplines[disciplineName.trim()] = 1;
      updateData();
    }
  }

  function removeDiscipline(disciplineName: string) {
    delete vampireData.disciplines[disciplineName];
    updateData();
  }
</script>

<div class="space-y-8">
  <div class="text-center">
    <h2 class="text-3xl font-bold text-wod-red mb-2">Vampire</h2>
    <p class="text-wod-light-gray">The Damned and their cursed existence</p>
  </div>

  <!-- Basic Info -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div class="bg-wod-gray rounded-lg p-6 space-y-4">
      <h3 class="text-xl font-semibold text-wod-red">Basic Information</h3>
      
      <div>
        <label for="clan" class="block text-sm font-medium mb-1">Clan</label>
        <select
          id="clan"
          bind:value={vampireData.clan}
          on:change={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        >
          {#each CLANS as clan}
            <option value={clan}>{clan}</option>
          {/each}
        </select>
      </div>

      <div>
        <label for="generation" class="block text-sm font-medium mb-1">Generation</label>
        <input
          id="generation"
          type="number"
          bind:value={vampireData.generation}
          on:input={updateData}
          min="3" max="15"
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>

      <div>
        <label for="sire" class="block text-sm font-medium mb-1">Sire</label>
        <input
          id="sire"
          type="text"
          bind:value={vampireData.sire}
          on:input={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>

      <div>
        <label for="nature" class="block text-sm font-medium mb-1">Nature</label>
        <input
          id="nature"
          type="text"
          bind:value={vampireData.nature}
          on:input={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>

      <div>
        <label for="demeanor" class="block text-sm font-medium mb-1">Demeanor</label>
        <input
          id="demeanor"
          type="text"
          bind:value={vampireData.demeanor}
          on:input={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>

      <div>
        <label for="concept" class="block text-sm font-medium mb-1">Concept</label>
        <input
          id="concept"
          type="text"
          bind:value={vampireData.concept}
          on:input={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>
    </div>

    <!-- Stats -->
    <div class="bg-wod-gray rounded-lg p-6 space-y-6">
      <h3 class="text-xl font-semibold text-wod-red">Vital Statistics</h3>
      
      <!-- Blood Pool -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <label for="blood-pool" class="text-sm font-medium">Blood Pool</label>
          <span class="text-wod-light-gray">{vampireData.bloodPool} / {vampireData.maxBloodPool}</span>
        </div>
        <div class="flex items-center space-x-4">
          <div class="flex-1">
            <input
              id="blood-pool"
              type="range"
              bind:value={vampireData.bloodPool}
              on:input={updateData}
              min="0"
              max={vampireData.maxBloodPool}
              class="w-full"
            />
          </div>
          <div class="flex items-center space-x-2">
            <label for="maxBloodPool" class="text-xs">Max:</label>
            <input
              id="maxBloodPool"
              type="number"
              bind:value={vampireData.maxBloodPool}
              on:input={updateData}
              min="1" max="50"
              class="w-16 bg-wod-dark border border-wod-light-gray rounded px-2 py-1 text-white text-sm"
            />
          </div>
        </div>
      </div>

      <!-- Humanity -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <label for="humanity" class="text-sm font-medium">Humanity</label>
          <span class="text-wod-light-gray">{vampireData.humanity}</span>
        </div>
        <DotControl
          value={vampireData.humanity}
          maxValue={10}
          minValue={0}
          ariaLabel="Humanity"
          id="humanity"
          on:change={(event) => { vampireData.humanity = event.detail; updateData(); }}
        />
      </div>

      <!-- Willpower -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <label for="willpower" class="text-sm font-medium">Willpower</label>
          <span class="text-wod-light-gray">{vampireData.willpower} / {vampireData.maxWillpower}</span>
        </div>
        <div class="space-y-2">
          <div class="flex items-center space-x-2">
            <label for="willpower-current" class="text-xs">Current:</label>
            <DotControl
              value={vampireData.willpower}
              maxValue={vampireData.maxWillpower}
              minValue={0}
              size="small"
              ariaLabel="Current Willpower"
              id="willpower-current"
              on:change={(event) => { vampireData.willpower = event.detail; updateData(); }}
            />
          </div>
          <div class="flex items-center space-x-2">
            <label for="willpower-max" class="text-xs">Max:</label>
            <DotControl
              value={vampireData.maxWillpower}
              maxValue={10}
              minValue={1}
              size="small"
              ariaLabel="Max Willpower"
              id="willpower-max"
              on:change={(event) => { vampireData.maxWillpower = event.detail; updateData(); }}
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
          bind:value={vampireData.experience}
          on:input={updateData}
          min="0"
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>
    </div>
  </div>

  <!-- Disciplines -->
  <div class="bg-wod-gray rounded-lg p-6">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-xl font-semibold text-wod-red">Disciplines</h3>
      <button 
        on:click={addDiscipline}
        class="bg-wod-red hover:bg-red-700 px-3 py-1 rounded text-sm transition-colors"
      >
        Add Discipline
      </button>
    </div>

    {#if Object.keys(vampireData.disciplines).length === 0}
      <p class="text-wod-light-gray text-center py-4">No disciplines learned yet.</p>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each Object.entries(vampireData.disciplines) as [disciplineName, level]}
          <div class="bg-wod-dark rounded p-4">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-medium">{disciplineName}</h4>
              <button 
                on:click={() => removeDiscipline(disciplineName)}
                class="text-red-400 hover:text-red-300 text-sm"
                title="Remove discipline"
              >
                ✕
              </button>
            </div>
            <DotControl
              value={level}
              maxValue={5}
              minValue={0}
              ariaLabel={`Discipline level for ${disciplineName}`}
              id={`discipline-${disciplineName}`}
              on:change={(event) => updateDiscipline(disciplineName, event.detail)}
            />
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Clan Information -->
  <div class="bg-wod-gray rounded-lg p-6">
    <h3 class="text-xl font-semibold text-wod-red mb-4">Clan Information</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <label for="clan-disciplines" class="block text-sm font-medium mb-2">Clan Disciplines</label>
        <div class="space-y-2">
          {#each vampireData.clanDisciplines as discipline, index}
            <div class="flex items-center space-x-2">
              <input
                id={`clan-discipline-${index}`}
                type="text"
                bind:value={vampireData.clanDisciplines[index]}
                on:input={updateData}
                class="flex-1 bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
              />
              <button 
                on:click={() => { vampireData.clanDisciplines.splice(index, 1); updateData(); }}
                class="text-red-400 hover:text-red-300"
              >
                ✕
              </button>
            </div>
          {/each}
          <button 
            on:click={() => { vampireData.clanDisciplines.push(''); updateData(); }}
            class="bg-wod-light-gray hover:bg-gray-500 px-3 py-1 rounded text-sm transition-colors"
          >
            Add Discipline
          </button>
        </div>
      </div>
      <div>
        <label for="clan-weakness" class="block text-sm font-medium mb-2">Clan Weakness</label>
        <textarea 
          bind:value={vampireData.clanWeakness} 
          on:input={updateData}
          rows="4"
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white resize-vertical"
        ></textarea>
      </div>
    </div>
  </div>
</div>