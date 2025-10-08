<script>
  import DotTextField from './DotTextField.svelte';
  import { XP_TYPE_ABILITY } from '../../../constants';
  import sunSpurLeftWhite from '$lib/assets/sun_spur_left_white.png';
  import sunSpurRightWhite from '$lib/assets/sun_spur_right_white.png';

  export let sheet;
  const subtype = sheet.character_type ?? 'vampire';
</script>

<div class="w-full">
  <div class="flex justify-center items-center w-full relative mb-1 gap-3">
    <img src={sunSpurLeftWhite} alt="Sun Spur Left" class="h-12" />
    <h2 class="text-2xl text-cream-0 font-rampart-spurs-stamp tracking-wider">Abilities</h2>
    <img src={sunSpurRightWhite} alt="Sun Spur Right" class="h-12" />
  </div>

  <div class="grid grid-cols-3 gap-x-6 w-full">
    <div>
      <h3 class="text-lg mb-2 text-center font-rampart-spurs tracking-wider">Talents</h3>
      <DotTextField label="Alertness" type={XP_TYPE_ABILITY} value="" level={sheet.talent_alertness ?? 0} {sheet} field="talent_alertness" />
      {#if subtype === 'mage'}
        <DotTextField label="Art" type={XP_TYPE_ABILITY} value="" level={sheet.talent_art ?? 0} {sheet} field="talent_art" />
      {/if}
      <DotTextField label="Athletics" type={XP_TYPE_ABILITY} value="" level={sheet.talent_athletics ?? 0} {sheet} field="talent_athletics" />
      {#if subtype === 'human' || subtype === 'vampire' || subtype === 'mage'}
        <DotTextField label="Awareness" type={XP_TYPE_ABILITY} value="" level={sheet.talent_awareness ?? 0} {sheet} field="talent_awareness" />
      {/if}
      <DotTextField label="Brawl" type={XP_TYPE_ABILITY} value="" level={sheet.talent_brawl ?? 0} {sheet} field="talent_brawl" />
      <DotTextField label="Empathy" type={XP_TYPE_ABILITY} value="" level={sheet.talent_empathy ?? 0} {sheet} field="talent_empathy" />
      <DotTextField label="Expression" type={XP_TYPE_ABILITY} value="" level={sheet.talent_expression ?? 0} {sheet} field="talent_expression" />
      <DotTextField label="Intimidation" type={XP_TYPE_ABILITY} value="" level={sheet.talent_intimidation ?? 0} {sheet} field="talent_intimidation" />
      <DotTextField label="Leadership" type={XP_TYPE_ABILITY} value="" level={sheet.talent_leadership ?? 0} {sheet} field="talent_leadership" />
      {#if subtype === 'werewolf'}
        <DotTextField label="Primal-Urge" type={XP_TYPE_ABILITY} value="" level={sheet.talent_primal_urge ?? 0} {sheet} field="talent_primal_urge" />
      {/if}
      <DotTextField label="Streetwise" type={XP_TYPE_ABILITY} value="" level={sheet.talent_streetwise ?? 0} {sheet} field="talent_streetwise" />
      <DotTextField label="Subterfuge" type={XP_TYPE_ABILITY} value="" level={sheet.talent_subterfuge ?? 0} {sheet} field="talent_subterfuge" />
    </div>
    <div>
      <h3 class="text-lg mb-2 text-center font-rampart-spurs tracking-wider">Skills</h3>
      {#if subtype === 'human' || subtype === 'vampire' || subtype === 'werewolf'}
        <DotTextField label="Animal Ken" type={XP_TYPE_ABILITY} value="" level={sheet.skill_animal_ken ?? 0} {sheet} field="skill_animal_ken" />
      {/if}
      <DotTextField label="Crafts" type={XP_TYPE_ABILITY} value="" level={sheet.skill_crafts ?? 0} {sheet} field="skill_crafts" />
      <DotTextField label="Drive" type={XP_TYPE_ABILITY} value="" level={sheet.skill_drive ?? 0} {sheet} field="skill_drive" />
      <DotTextField label="Etiquette" type={XP_TYPE_ABILITY} value="" level={sheet.skill_etiquette ?? 0} {sheet} field="skill_etiquette" />
      <DotTextField label="Firearms" type={XP_TYPE_ABILITY} value="" level={sheet.skill_firearms ?? 0} {sheet} field="skill_firearms" />
      {#if subtype === 'human' || subtype === 'vampire' || subtype === 'werewolf'}
        <DotTextField label="Larceny" type={XP_TYPE_ABILITY} value="" level={sheet.skill_larceny ?? 0} {sheet} field="skill_larceny" />
      {/if}
      {#if subtype === 'mage'}
        <DotTextField label="Martial Arts" type={XP_TYPE_ABILITY} value="" level={sheet.skill_martial_arts ?? 0} {sheet} field="skill_martial_arts" />
        <DotTextField label="Meditation" type={XP_TYPE_ABILITY} value="" level={sheet.skill_meditation ?? 0} {sheet} field="skill_meditation" />
      {/if}
      <DotTextField label="Melee" type={XP_TYPE_ABILITY} value="" level={sheet.skill_melee ?? 0} {sheet} field="skill_melee" />
      {#if subtype === 'human' || subtype === 'vampire' || subtype === 'werewolf'}
        <DotTextField label="Performance" type={XP_TYPE_ABILITY} value="" level={sheet.skill_performance ?? 0} {sheet} field="skill_performance" />
      {/if}
      {#if subtype === 'mage'}
        <DotTextField label="Research" type={XP_TYPE_ABILITY} value="" level={sheet.skill_research ?? 0} {sheet} field="skill_research" />
      {/if}
      <DotTextField label="Stealth" type={XP_TYPE_ABILITY} value="" level={sheet.skill_stealth ?? 0} {sheet} field="skill_stealth" />
      <DotTextField label="Survival" type={XP_TYPE_ABILITY} value="" level={sheet.skill_survival ?? 0} {sheet} field="skill_survival" />
      {#if subtype === 'mage'}
        <DotTextField label="Technology" type={XP_TYPE_ABILITY} value="" level={sheet.skill_technology ?? 0} {sheet} field="skill_technology" />
      {/if}
    </div>
    <div>
      <h3 class="text-lg mb-2 text-center font-rampart-spurs tracking-wider">Knowledges</h3>
      <DotTextField label="Academics" type={XP_TYPE_ABILITY} value="" level={sheet.knowledge_academics ?? 0} {sheet} field="knowledge_academics" />
      <DotTextField label="Computer" type={XP_TYPE_ABILITY} value="" level={sheet.knowledge_computer ?? 0} {sheet} field="knowledge_computer" />
      {#if subtype === 'mage'}
        <DotTextField label="Cosmology" type={XP_TYPE_ABILITY} value="" level={sheet.knowledge_cosmology ?? 0} {sheet} field="knowledge_cosmology" />
        <DotTextField label="Esoterica" type={XP_TYPE_ABILITY} value="" level={sheet.knowledge_esoterica ?? 0} {sheet} field="knowledge_esoterica" />
      {/if}
      {#if subtype === 'werewolf' || subtype === 'mage'}
        <DotTextField label="Enigmas" type={XP_TYPE_ABILITY} value="" level={sheet.knowledge_enigmas ?? 0} {sheet} field="knowledge_enigmas" />
      {/if}
      {#if subtype === 'human' || subtype === 'vampire'}
        <DotTextField label="Finance" type={XP_TYPE_ABILITY} value="" level={sheet.knowledge_finance ?? 0} {sheet} field="knowledge_finance" />
      {/if}
      <DotTextField label="Investigation" type={XP_TYPE_ABILITY} value="" level={sheet.knowledge_investigation ?? 0} {sheet} field="knowledge_investigation" />
      <DotTextField label="Law" type={XP_TYPE_ABILITY} value="" level={sheet.knowledge_law ?? 0} {sheet} field="knowledge_law" />
      <DotTextField label="Medicine" type={XP_TYPE_ABILITY} value="" level={sheet.knowledge_medicine ?? 0} {sheet} field="knowledge_medicine" />
      <DotTextField label="Occult" type={XP_TYPE_ABILITY} value="" level={sheet.knowledge_occult ?? 0} {sheet} field="knowledge_occult" />
      {#if subtype === 'werewolf'}
        <DotTextField label="Rituals" type={XP_TYPE_ABILITY} value="" level={sheet.knowledge_rituals ?? 0} {sheet} field="knowledge_rituals" />
      {/if}
      {#if subtype === 'human' || subtype === 'vampire' || subtype === 'mage'}
        <DotTextField label="Politics" type={XP_TYPE_ABILITY} value="" level={sheet.knowledge_politics ?? 0} {sheet} field="knowledge_politics" />
      {/if}
      <DotTextField label="Science" type={XP_TYPE_ABILITY} value="" level={sheet.knowledge_science ?? 0} {sheet} field="knowledge_science" />
      {#if subtype === 'human' || subtype === 'vampire' || subtype === 'werewolf'}
        <DotTextField label="Technology" type={XP_TYPE_ABILITY} value="" level={sheet.knowledge_technology ?? 0} {sheet} field="knowledge_technology" />
      {/if}
    </div>
  </div>
</div>
