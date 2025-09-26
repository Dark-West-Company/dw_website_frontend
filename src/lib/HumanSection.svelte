<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { HumanData } from '../constants';
  import DotControl from './DotControl.svelte';

  export let humanData: HumanData;

  const dispatch = createEventDispatcher();

  function updateData() {
    dispatch('update');
  }

  function updateNumina(numinaName: string, value: number) {
    if (value === 0) {
      delete humanData.numina[numinaName];
    } else {
      humanData.numina[numinaName] = value;
    }
    updateData();
  }

  function addNumina() {
    const numinaName = prompt('Enter numina/supernatural ability name:');
    if (numinaName && numinaName.trim()) {
      humanData.numina[numinaName.trim()] = 1;
      updateData();
    }
  }

  function removeNumina(numinaName: string) {
    delete humanData.numina[numinaName];
    updateData();
  }
</script>

<div class="space-y-8">
  <div class="text-center">
    <h2 class="text-3xl font-bold text-wod-red mb-2">Human</h2>
    <p class="text-wod-light-gray">Mortals in the World of Darkness</p>
  </div>

  <!-- Basic Info -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div class="bg-wod-gray rounded-lg p-6 space-y-4">
      <h3 class="text-xl font-semibold text-wod-red">Basic Information</h3>
      
      <div>
        <label for="nature" class="block text-sm font-medium mb-1">Nature</label>
        <input
          id="nature"
          type="text"
          bind:value={humanData.nature}
          on:input={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>

      <div>
        <label for="demeanor" class="block text-sm font-medium mb-1">Demeanor</label>
        <input
          id="demeanor"
          type="text"
          bind:value={humanData.demeanor}
          on:input={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>

      <div>
        <label for="concept" class="block text-sm font-medium mb-1">Concept</label>
        <input
          id="concept"
          type="text"
          bind:value={humanData.concept}
          on:input={updateData}
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="age" class="block text-sm font-medium mb-1">Age</label>
          <input
            id="age"
            type="number"
            bind:value={humanData.age}
            on:input={updateData}
            min="1" max="150"
            class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
          />
        </div>
        <div>
          <label for="gender" class="block text-sm font-medium mb-1">Gender</label>
          <input
            id="gender"
            type="text"
            bind:value={humanData.gender}
            on:input={updateData}
            class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
          />
        </div>
      </div>
    </div>

    <!-- Stats -->
    <div class="bg-wod-gray rounded-lg p-6 space-y-6">
      <h3 class="text-xl font-semibold text-wod-red">Vital Statistics</h3>
      
      <!-- Willpower -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <label for="willpower" class="text-sm font-medium">Willpower</label>
          <span class="text-wod-light-gray">{humanData.willpower} / {humanData.maxWillpower}</span>
        </div>
        <div class="space-y-2">
          <div class="flex items-center space-x-2">
            <label for="willpower-current" class="text-xs">Current:</label>
            <DotControl
              value={humanData.willpower}
              maxValue={humanData.maxWillpower}
              minValue={0}
              size="small"
              ariaLabel="Current Willpower"
              id="willpower-current"
              on:change={(event) => { humanData.willpower = event.detail; updateData(); }}
            />
          </div>
          <div class="flex items-center space-x-2">
            <label for="willpower-max" class="text-xs">Max:</label>
            <DotControl
              value={humanData.maxWillpower}
              maxValue={10}
              minValue={1}
              size="small"
              ariaLabel="Max Willpower"
              id="willpower-max"
              on:change={(event) => { humanData.maxWillpower = event.detail; updateData(); }}
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
          bind:value={humanData.experience}
          on:input={updateData}
          min="0"
          class="w-full bg-wod-dark border border-wod-light-gray rounded px-3 py-2 text-white"
        />
      </div>
    </div>
  </div>

  <!-- Supernatural Abilities / Numina -->
  <div class="bg-wod-gray rounded-lg p-6">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h3 class="text-xl font-semibold text-wod-red">Supernatural Abilities</h3>
        <p class="text-sm text-wod-light-gray">Numina, psychic powers, and other unusual talents</p>
      </div>
      <button 
        on:click={addNumina}
        class="bg-wod-red hover:bg-red-700 px-3 py-1 rounded text-sm transition-colors"
      >
        Add Ability
      </button>
    </div>

    {#if Object.keys(humanData.numina).length === 0}
      <div class="text-center py-8">
        <p class="text-wod-light-gray mb-4">No supernatural abilities.</p>
        <p class="text-sm text-wod-light-gray">
          Most humans have no supernatural powers, but some may possess psychic abilities, 
          minor magic, or other unexplained talents.
        </p>
      </div>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each Object.entries(humanData.numina) as [numinaName, level]}
          <div class="bg-wod-dark rounded p-4">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-medium">{numinaName}</h4>
              <button 
                on:click={() => removeNumina(numinaName)}
                class="text-red-400 hover:text-red-300 text-sm"
                title="Remove ability"
              >
                ✕
              </button>
            </div>
            <DotControl
              value={level}
              maxValue={5}
              minValue={0}
              ariaLabel={`Numina level for ${numinaName}`}
              id={`numina-${numinaName}`}
              on:change={(event) => updateNumina(numinaName, event.detail)}
            />
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Human Advantages -->
  <div class="bg-wod-gray rounded-lg p-6">
    <h3 class="text-xl font-semibold text-wod-red mb-4">Human Advantages</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
      <div class="bg-wod-dark rounded p-4">
        <h4 class="font-medium text-green-400 mb-2">Strengths</h4>
        <ul class="space-y-1 text-wod-light-gray">
          <li>• Flexible character development</li>
          <li>• No inherent supernatural weaknesses</li>
          <li>• Can blend into mortal society easily</li>
          <li>• Higher starting Willpower potential</li>
          <li>• Access to human institutions and resources</li>
        </ul>
      </div>
      <div class="bg-wod-dark rounded p-4">
        <h4 class="font-medium text-red-400 mb-2">Vulnerabilities</h4>
        <ul class="space-y-1 text-wod-light-gray">
          <li>• No supernatural powers by default</li>
          <li>• Vulnerable to supernatural predators</li>
          <li>• Limited lifespan</li>
          <li>• Fragile compared to supernatural beings</li>
          <li>• Often unaware of hidden supernatural world</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Character Development Notes -->
  <div class="bg-wod-light-gray rounded-lg p-4">
    <h4 class="font-semibold mb-2 text-wod-red">Character Development</h4>
    <div class="text-sm text-wod-light-gray space-y-2">
      <p>
        <strong>Mortal Characters:</strong> Humans can serve as investigators, 
        scholars, hunters, or even future candidates for supernatural transformation.
      </p>
      <p>
        <strong>Psychics:</strong> Some humans possess limited supernatural abilities 
        such as telepathy, precognition, or psychometry.
      </p>
      <p>
        <strong>Hunters:</strong> Mortals who have discovered the supernatural world 
        and taken up arms against it, often with tragic consequences.
      </p>
    </div>
  </div>
</div>