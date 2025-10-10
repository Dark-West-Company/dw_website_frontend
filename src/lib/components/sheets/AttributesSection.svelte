<script>
  import DotTextField from './DotTextField.svelte';
  import { XP_TYPE_ATTRIBUTE } from '../../../constants';
  import sunSpurLeftWhite from '$lib/assets/sun_spur_left_white.png';
  import sunSpurRightWhite from '$lib/assets/sun_spur_right_white.png';

  export let sheet;
</script>

<div class="w-full">
  <div class="flex justify-center items-center w-full relative mb-4 gap-3">
    <img src={sunSpurLeftWhite} alt="Sun Spur Left" class="h-12" />
    <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider">Attributes</h2>
    <img src={sunSpurRightWhite} alt="Sun Spur Right" class="h-12" />
  </div>

  <div class="grid grid-cols-3 gap-x-6 w-full">
    <div>
      <DotTextField label="Strength" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.strength ?? 0} {sheet} field="strength" />
      <DotTextField label="Charisma" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.charisma ?? 0} {sheet} field="charisma" />
      <DotTextField label="Perception" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.perception ?? 0} {sheet} field="perception" />
    </div>

    <div>
      <DotTextField label="Dexterity" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.dexterity ?? 0} {sheet} field="dexterity" />
      <DotTextField label="Manipulation" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.manipulation ?? 0} {sheet} field="manipulation" />
      <DotTextField label="Intelligence" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.intelligence ?? 0} {sheet} field="intelligence" />
    </div>
    <div>
      <DotTextField label="Stamina" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.stamina ?? 0} {sheet} field="stamina" />
      <DotTextField label="Appearance" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.appearance ?? 0} {sheet} field="appearance" />
      <DotTextField label="Wits" type={XP_TYPE_ATTRIBUTE} value="" level={sheet.wits ?? 0} {sheet} field="wits" />
    </div>
  </div>
</div>
