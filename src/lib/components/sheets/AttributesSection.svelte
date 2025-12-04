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
      <DotTextField label="Strength" type={XP_TYPE_ATTRIBUTE} value="" {sheet} field="strength" min="1" />
      <DotTextField label="Dexterity" type={XP_TYPE_ATTRIBUTE} value="" {sheet} field="dexterity" min="1" />
      <DotTextField label="Stamina" type={XP_TYPE_ATTRIBUTE} value="" {sheet} field="stamina" min="1" />
    </div>

    <div>
      <DotTextField label="Charisma" type={XP_TYPE_ATTRIBUTE} value="" {sheet} field="charisma" min="1" />
      <DotTextField label="Manipulation" type={XP_TYPE_ATTRIBUTE} value="" {sheet} field="manipulation" min="1" />
      <DotTextField label="Appearance" type={XP_TYPE_ATTRIBUTE} value="" {sheet} field="appearance" min="1" />
    </div>
    <div>
      <DotTextField label="Perception" type={XP_TYPE_ATTRIBUTE} value="" {sheet} field="perception" min="1" />
      <DotTextField label="Intelligence" type={XP_TYPE_ATTRIBUTE} value="" {sheet} field="intelligence" min="1" />
      <DotTextField label="Wits" type={XP_TYPE_ATTRIBUTE} value="" {sheet} field="wits" min="1" />
    </div>
  </div>
</div>
