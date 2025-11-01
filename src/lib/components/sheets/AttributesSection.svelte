<script>
  import DotTextField from './DotTextField.svelte';
  import { XP_TYPE_ATTRIBUTE } from '../../../constants';
  import flowerDividerLeft from '$lib/assets/flower_divider_left.png';
  import flowerDividerRight from '$lib/assets/flower_divider_right.png';

  export let sheet;
</script>

<div class="w-full">
  <div class="flex justify-center items-center w-full relative mb-4 gap-3">
    <img src={flowerDividerLeft} alt="Flower Divider Left" class="h-6 black-to-text-primary" />
    <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider mt-1">Attributes</h2>
    <img src={flowerDividerRight} alt="Flower Divider Right" class="h-6 black-to-text-primary" />
  </div>

  <div class="grid grid-cols-3 gap-x-6 w-full">
    <div>
      <DotTextField label="Strength" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.strength ?? 0} {sheet} field="strength" />
      <DotTextField label="Dexterity" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.dexterity ?? 0} {sheet} field="dexterity" />
      <DotTextField label="Stamina" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.stamina ?? 0} {sheet} field="stamina" />
    </div>

    <div>
      <DotTextField label="Charisma" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.charisma ?? 0} {sheet} field="charisma" />
      <DotTextField label="Manipulation" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.manipulation ?? 0} {sheet} field="manipulation" />
      <DotTextField label="Appearance" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.appearance ?? 0} {sheet} field="appearance" />
    </div>
    <div>
      <DotTextField label="Perception" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.perception ?? 0} {sheet} field="perception" />
      <DotTextField label="Intelligence" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.intelligence ?? 0} {sheet} field="intelligence" />
      <DotTextField label="Wits" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.wits ?? 0} {sheet} field="wits" />
    </div>
  </div>
</div>
