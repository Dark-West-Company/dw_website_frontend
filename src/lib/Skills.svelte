<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Skills, CharacterType } from '../constants';
  import { SKILL_CATEGORIES, SKILL_LABELS } from '../constants';
  import DotControl from './DotControl.svelte';

  export let skills: Skills;
  export let characterType: CharacterType;

  const dispatch = createEventDispatcher();

  function updateSkill(skillName: keyof Skills, value: number) {
    skills[skillName] = value;
    dispatch('update');
  }
</script>

<div class="space-y-8">
  <div class="text-center">
    <h2 class="text-3xl font-bold text-wod-red mb-2">Abilities</h2>
    <p class="text-wod-light-gray">Learned skills and natural talents</p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- Talents -->
    <div class="bg-wod-gray rounded-lg p-6">
      <h3 class="text-xl font-semibold text-center mb-6 text-yellow-400">Talents</h3>
      <div class="space-y-4">
        {#each SKILL_CATEGORIES.talents as skill}
          <div class="flex items-center justify-between">
            <label for={`talent-${skill}`} class="text-white font-medium min-w-0 flex-1">
              {SKILL_LABELS[skill]}
            </label>
            <div class="ml-4">
              <DotControl
                value={skills[skill]}
                maxValue={5}
                minValue={0}
                ariaLabel={`Talent: ${SKILL_LABELS[skill]}`}
                id={`talent-${skill}`}
                on:change={(event) => updateSkill(skill, event.detail)}
              />
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Skills -->
    <div class="bg-wod-gray rounded-lg p-6">
      <h3 class="text-xl font-semibold text-center mb-6 text-green-400">Skills</h3>
      <div class="space-y-4">
        {#each SKILL_CATEGORIES.skills as skill}
          <div class="flex items-center justify-between">
            <label for={`skill-${skill}`} class="text-white font-medium min-w-0 flex-1">
              {SKILL_LABELS[skill]}
            </label>
            <div class="ml-4">
              <DotControl
                value={skills[skill]}
                maxValue={5}
                minValue={0}
                ariaLabel={`Skill: ${SKILL_LABELS[skill]}`}
                id={`skill-${skill}`}
                on:change={(event) => updateSkill(skill, event.detail)}
              />
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Knowledges -->
    <div class="bg-wod-gray rounded-lg p-6">
      <h3 class="text-xl font-semibold text-center mb-6 text-blue-400">Knowledges</h3>
      <div class="space-y-4">
        {#each SKILL_CATEGORIES.knowledges as skill}
          <div class="flex items-center justify-between">
            <label for={`knowledge-${skill}`} class="text-white font-medium min-w-0 flex-1">
              {SKILL_LABELS[skill]}
            </label>
            <div class="ml-4">
              <DotControl
                value={skills[skill]}
                maxValue={5}
                minValue={0}
                ariaLabel={`Knowledge: ${SKILL_LABELS[skill]}`}
                id={`knowledge-${skill}`}
                on:change={(event) => updateSkill(skill, event.detail)}
              />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Ability descriptions -->
  <div class="bg-wod-light-gray rounded-lg p-4">
    <h4 class="font-semibold mb-2 text-wod-red">Ability Categories</h4>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-wod-light-gray">
      <div>
        <span class="font-medium text-yellow-400">Talents:</span> Intuitive abilities, untrained skills
      </div>
      <div>
        <span class="font-medium text-green-400">Skills:</span> Learned abilities requiring training
      </div>
      <div>
        <span class="font-medium text-blue-400">Knowledges:</span> Academic and research-based learning
      </div>
    </div>
  </div>

  <!-- Difficulty reference -->
  <div class="bg-wod-light-gray rounded-lg p-4">
    <h4 class="font-semibold mb-2 text-wod-red">Difficulty Guide</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-wod-light-gray">
      <div>
        <span class="font-medium">Difficulty 6:</span> Standard task
      </div>
      <div>
        <span class="font-medium">Difficulty 7:</span> Challenging task
      </div>
      <div>
        <span class="font-medium">Difficulty 8:</span> Difficult task
      </div>
      <div>
        <span class="font-medium">Difficulty 9:</span> Extremely difficult
      </div>
    </div>
  </div>
</div>