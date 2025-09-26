<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Attributes } from '../constants';
  import { ATTRIBUTE_LABELS } from '../constants';
  import DotControl from './DotControl.svelte';

  export let attributes: Attributes;

  const dispatch = createEventDispatcher();

  function updateAttribute(attributeName: keyof Attributes, value: number) {
    attributes[attributeName] = value;
    dispatch('update');
  }

  const attributeCategories = {
    physical: ['strength', 'dexterity', 'stamina'] as (keyof Attributes)[],
    social: ['charisma', 'manipulation', 'appearance'] as (keyof Attributes)[],
    mental: ['perception', 'intelligence', 'wits'] as (keyof Attributes)[]
  };
</script>

<div class="space-y-8">
  <div class="text-center">
    <h2 class="text-3xl font-bold text-wod-red mb-2">Attributes</h2>
    <p class="text-wod-light-gray">Core physical, social, and mental characteristics</p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- Physical Attributes -->
    <div class="bg-wod-gray rounded-lg p-6">
      <h3 class="text-xl font-semibold text-center mb-6 text-green-400">Physical</h3>
      <div class="space-y-4">
        {#each attributeCategories.physical as attr}
          <div class="flex items-center justify-between">
            <label for={`dotcontrol-physical-${attr}`} class="text-white font-medium capitalize min-w-0 flex-1">
              {ATTRIBUTE_LABELS[attr]}
            </label>
            <div class="ml-4">
              <DotControl
                ariaLabel={ATTRIBUTE_LABELS[attr]}
                id={`dotcontrol-physical-${attr}`}
                value={attributes[attr]}
                maxValue={5}
                minValue={1}
                on:change={(event) => updateAttribute(attr, event.detail)}
              />
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Social Attributes -->
    <div class="bg-wod-gray rounded-lg p-6">
      <h3 class="text-xl font-semibold text-center mb-6 text-blue-400">Social</h3>
      <div class="space-y-4">
        {#each attributeCategories.social as attr}
          <div class="flex items-center justify-between">
            <label for={`dotcontrol-social-${attr}`} class="text-white font-medium capitalize min-w-0 flex-1">
              {ATTRIBUTE_LABELS[attr]}
            </label>
            <div class="ml-4">
              <DotControl
                ariaLabel={ATTRIBUTE_LABELS[attr]}
                id={`dotcontrol-social-${attr}`}
                value={attributes[attr]}
                maxValue={5}
                minValue={1}
                on:change={(event) => updateAttribute(attr, event.detail)}
              />
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Mental Attributes -->
    <div class="bg-wod-gray rounded-lg p-6">
      <h3 class="text-xl font-semibold text-center mb-6 text-purple-400">Mental</h3>
      <div class="space-y-4">
        {#each attributeCategories.mental as attr}
          <div class="flex items-center justify-between">
            <label for={`dotcontrol-mental-${attr}`} class="text-white font-medium capitalize min-w-0 flex-1">
              {ATTRIBUTE_LABELS[attr]}
            </label>
            <div class="ml-4">
              <DotControl
                ariaLabel={ATTRIBUTE_LABELS[attr]}
                id={`dotcontrol-mental-${attr}`}
                value={attributes[attr]}
                maxValue={5}
                minValue={1}
                on:change={(event) => updateAttribute(attr, event.detail)}
              />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Quick reference -->
  <div class="bg-wod-light-gray rounded-lg p-4">
    <h4 class="font-semibold mb-2 text-wod-red">Attribute Ratings</h4>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-wod-light-gray">
      <div>
        <span class="font-medium">● (1):</span> Poor
      </div>
      <div>
        <span class="font-medium">●● (2):</span> Average
      </div>
      <div>
        <span class="font-medium">●●● (3):</span> Good
      </div>
      <div>
        <span class="font-medium">●●●● (4):</span> Exceptional
      </div>
      <div>
        <span class="font-medium">●●●●● (5):</span> Outstanding
      </div>
    </div>
  </div>
</div>