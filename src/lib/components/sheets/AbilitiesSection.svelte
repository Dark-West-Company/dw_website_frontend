<script>
  import DotTextField from './DotTextField.svelte';
  export let sheet;
  const subtype = sheet.character_type ?? 'vampire';
</script>

<div class="w-full">
  <h2 class="text-2xl font-semibold mb-2 text-center">Abilities</h2>
  <div class="grid grid-cols-3 gap-x-6 w-full">
    <div>
      <h3 class="text-lg font-bold mb-2 text-center">Talents</h3>
      <DotTextField label="Alertness" value="" level={sheet.talent_alertness ?? 0} {sheet} field="talent_alertness" />
      {#if subtype === 'mage'}
        <DotTextField label="Art" value="" level={sheet.talent_art ?? 0} {sheet} field="talent_art" />
      {/if}
      <DotTextField label="Athletics" value="" level={sheet.talent_athletics ?? 0} {sheet} field="talent_athletics" />
      {#if subtype === 'human' || subtype === 'vampire' || subtype === 'mage'}
        <DotTextField label="Awareness" value="" level={sheet.talent_awareness ?? 0} {sheet} field="talent_awareness" />
      {/if}
      <DotTextField label="Brawl" value="" level={sheet.talent_brawl ?? 0} {sheet} field="talent_brawl" />
      <DotTextField label="Empathy" value="" level={sheet.talent_empathy ?? 0} {sheet} field="talent_empathy" />
      <DotTextField label="Expression" value="" level={sheet.talent_expression ?? 0} {sheet} field="talent_expression" />
      <DotTextField label="Intimidation" value="" level={sheet.talent_intimidation ?? 0} {sheet} field="talent_intimidation" />
      <DotTextField label="Leadership" value="" level={sheet.talent_leadership ?? 0} {sheet} field="talent_leadership" />
      {#if subtype === 'werewolf'}
        <DotTextField label="Primal-Urge" value="" level={sheet.talent_primal_urge ?? 0} {sheet} field="talent_primal_urge" />
      {/if}
      <DotTextField label="Streetwise" value="" level={sheet.talent_streetwise ?? 0} {sheet} field="talent_streetwise" />
      <DotTextField label="Subterfuge" value="" level={sheet.talent_subterfuge ?? 0} {sheet} field="talent_subterfuge" />
    </div>
    <div>
      <h3 class="text-lg font-bold mb-2 text-center">Skills</h3>
      {#if subtype === 'human' || subtype === 'vampire' || subtype === 'werewolf'}
        <DotTextField label="Animal Ken" value="" level={sheet.skill_animal_ken ?? 0} {sheet} field="skill_animal_ken" />
      {/if}
      <DotTextField label="Crafts" value="" level={sheet.skill_crafts ?? 0} {sheet} field="skill_crafts" />
      <DotTextField label="Drive" value="" level={sheet.skill_drive ?? 0} {sheet} field="skill_drive" />
      <DotTextField label="Etiquette" value="" level={sheet.skill_etiquette ?? 0} {sheet} field="skill_etiquette" />
      <DotTextField label="Firearms" value="" level={sheet.skill_firearms ?? 0} {sheet} field="skill_firearms" />
      {#if subtype === 'human' || subtype === 'vampire' || subtype === 'werewolf'}
        <DotTextField label="Larceny" value="" level={sheet.skill_larceny ?? 0} {sheet} field="skill_larceny" />
      {/if}
      {#if subtype === 'mage'}
        <DotTextField label="Martial Arts" value="" level={sheet.skill_martial_arts ?? 0} {sheet} field="skill_martial_arts" />
        <DotTextField label="Meditation" value="" level={sheet.skill_meditation ?? 0} {sheet} field="skill_meditation" />
      {/if}
      <DotTextField label="Melee" value="" level={sheet.skill_melee ?? 0} {sheet} field="skill_melee" />
      {#if subtype === 'human' || subtype === 'vampire' || subtype === 'werewolf'}
        <DotTextField label="Performance" value="" level={sheet.skill_performance ?? 0} {sheet} field="skill_performance" />
      {/if}
      {#if subtype === 'mage'}
        <DotTextField label="Research" value="" level={sheet.skill_research ?? 0} {sheet} field="skill_research" />
      {/if}
      <DotTextField label="Stealth" value="" level={sheet.skill_stealth ?? 0} {sheet} field="skill_stealth" />
      <DotTextField label="Survival" value="" level={sheet.skill_survival ?? 0} {sheet} field="skill_survival" />
      {#if subtype === 'mage'}
        <DotTextField label="Technology" value="" level={sheet.skill_technology ?? 0} {sheet} field="skill_technology" />
      {/if}
    </div>
    <div>
      <h3 class="text-lg font-bold mb-2 text-center">Knowledges</h3>
      <DotTextField label="Academics" value="" level={sheet.knowledge_academics ?? 0} {sheet} field="knowledge_academics" />
      <DotTextField label="Computer" value="" level={sheet.knowledge_computer ?? 0} {sheet} field="knowledge_computer" />
      {#if subtype === 'mage'}
        <DotTextField label="Cosmology" value="" level={sheet.knowledge_cosmology ?? 0} {sheet} field="knowledge_cosmology" />
        <DotTextField label="Esoterica" value="" level={sheet.knowledge_esoterica ?? 0} {sheet} field="knowledge_esoterica" />
      {/if}
      {#if subtype === 'werewolf' || subtype === 'mage'}
        <DotTextField label="Enigmas" value="" level={sheet.knowledge_enigmas ?? 0} {sheet} field="knowledge_enigmas" />
      {/if}
      {#if subtype === 'human' || subtype === 'vampire'}
        <DotTextField label="Finance" value="" level={sheet.knowledge_finance ?? 0} {sheet} field="knowledge_finance" />
      {/if}
      <DotTextField label="Investigation" value="" level={sheet.knowledge_investigation ?? 0} {sheet} field="knowledge_investigation" />
      <DotTextField label="Law" value="" level={sheet.knowledge_law ?? 0} {sheet} field="knowledge_law" />
      <DotTextField label="Medicine" value="" level={sheet.knowledge_medicine ?? 0} {sheet} field="knowledge_medicine" />
      <DotTextField label="Occult" value="" level={sheet.knowledge_occult ?? 0} {sheet} field="knowledge_occult" />
      {#if subtype === 'werewolf'}
        <DotTextField label="Rituals" value="" level={sheet.knowledge_rituals ?? 0} {sheet} field="knowledge_rituals" />
      {/if}
      {#if subtype === 'human' || subtype === 'vampire' || subtype === 'mage'}
        <DotTextField label="Politics" value="" level={sheet.knowledge_politics ?? 0} {sheet} field="knowledge_politics" />
      {/if}
      <DotTextField label="Science" value="" level={sheet.knowledge_science ?? 0} {sheet} field="knowledge_science" />
      {#if subtype === 'human' || subtype === 'vampire' || subtype === 'werewolf'}
        <DotTextField label="Technology" value="" level={sheet.knowledge_technology ?? 0} {sheet} field="knowledge_technology" />
      {/if}
    </div>
  </div>
</div>
