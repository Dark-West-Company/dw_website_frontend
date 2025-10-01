<script>
  import DotTextField from './DotTextField.svelte';
  export let sheet;
</script>

<div class="w-full">
  <h2 class="text-2xl font-semibold mb-2 text-center">Attributes</h2>
  <div class="grid grid-cols-3 gap-x-6 w-full">
    <div>
      <DotTextField label="Strength" value="" level={sheet.strength ?? 0} {sheet} field="strength" />
      <DotTextField label="Charisma" value="" level={sheet.charisma ?? 0} {sheet} field="charisma" />
      <DotTextField label="Perception" value="" level={sheet.perception ?? 0} {sheet} field="perception" />
    </div>

    <div>
      <DotTextField label="Dexterity" value="" level={sheet.dexterity ?? 0} {sheet} field="dexterity" />
      <DotTextField label="Manipulation" value="" level={sheet.manipulation ?? 0} {sheet} field="manipulation" />
      <DotTextField label="Intelligence" value="" level={sheet.intelligence ?? 0} {sheet} field="intelligence" />
    </div>
    <div>
      <DotTextField label="Stamina" value="" level={sheet.stamina ?? 0} {sheet} field="stamina" />
      <DotTextField label="Appearance" value="" level={sheet.appearance ?? 0} {sheet} field="appearance" />
      <DotTextField label="Wits" value="" level={sheet.wits ?? 0} {sheet} field="wits" />
    </div>
  </div>
</div>
