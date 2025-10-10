<script>
  import DotDisplay from './DotDisplay.svelte';
  import DotTextField from './DotTextField.svelte';
  import DynamicListSection from './DynamicListSection.svelte';
  import IntegerField from './IntegerField.svelte';
  import sunSpurLeftBlack from '$lib/assets/sun_spur_left_black.png';
  import sunSpurRightBlack from '$lib/assets/sun_spur_right_black.png';

  import { XP_TYPE_MAGE_SPHERE, XP_TYPE_BACKGROUND, XP_TYPE_MAGE_ARETE, XP_TYPE_WILLPOWER } from '../../../constants';
  export let sheetData;
</script>

<div class="flex flex-col items-center w-full">
  <div class="flex justify-center items-center w-full relative mb-1 gap-3">
    <img src={sunSpurLeftBlack} alt="Sun Spur Left" class="h-12 spurs-drop-shadow" />
    <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider">Spheres</h2>
    <img src={sunSpurRightBlack} alt="Sun Spur Right" class="h-12 spurs-drop-shadow" />
  </div>

  <div class="grid grid-cols-3 gap-x-6 w-full">
    <div>
      <DotTextField label="Correspondence" type={XP_TYPE_MAGE_SPHERE} value="" level={sheetData.sphere_correspondence ?? 0} sheet={sheetData} field="talent_correspondence" />
      <DotTextField label="Entropy" type={XP_TYPE_MAGE_SPHERE} value="" level={sheetData.sphere_entropy ?? 0} sheet={sheetData} field="talent_entropy" />
      <DotTextField label="Forces" type={XP_TYPE_MAGE_SPHERE} value="" level={sheetData.sphere_forces ?? 0} sheet={sheetData} field="talent_forces" />
    </div>

    <div>
      <DotTextField label="Life" type={XP_TYPE_MAGE_SPHERE} value="" level={sheetData.sphere_life ?? 0} sheet={sheetData} field="talent_life" />
      <DotTextField label="Matter" type={XP_TYPE_MAGE_SPHERE} value="" level={sheetData.sphere_matter ?? 0} sheet={sheetData} field="talent_matter" />
      <DotTextField label="Mind" type={XP_TYPE_MAGE_SPHERE} value="" level={sheetData.sphere_mind ?? 0} sheet={sheetData} field="talent_mind" />
    </div>

    <div>
      <DotTextField label="Prime" type={XP_TYPE_MAGE_SPHERE} value="" level={sheetData.sphere_prime ?? 0} sheet={sheetData} field="talent_prime" />
      <DotTextField label="Spirit" type={XP_TYPE_MAGE_SPHERE} value="" level={sheetData.sphere_spirit ?? 0} sheet={sheetData} field="talent_spirit" />
      <DotTextField label="Time" type={XP_TYPE_MAGE_SPHERE} value="" level={sheetData.sphere_time ?? 0} sheet={sheetData} field="talent_time" />
    </div>
  </div>

  <div class="flex justify-center items-center w-full relative mb-1 gap-3 mt-6">
    <img src={sunSpurLeftBlack} alt="Sun Spur Left" class="h-12 spurs-drop-shadow" />
    <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider">Advantages</h2>
    <img src={sunSpurRightBlack} alt="Sun Spur Right" class="h-12 spurs-drop-shadow" />
  </div>

  <div class="grid grid-cols-3 gap-4 w-full mt-4">
    <div class="flex flex-col items-center gap-10">
      <DynamicListSection header="Backgrounds" bind:entries={sheetData.disciplines} type={XP_TYPE_BACKGROUND} />

      <DynamicListSection header="Other Traits" bind:entries={sheetData.other_traits} />
    </div>

    <div class="flex flex-col items-center gap-10">
      <div class="flex flex-col items-center gap-2 relative border rounded-xl border-black pb-3 pt-4 px-3">
        <div class="absolute left-0 right-0 -top-3 flex justify-center">
          <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider rounded text-tprimary px-2">Arete</div>
        </div>

        <DotDisplay type={XP_TYPE_MAGE_ARETE} sheet={sheetData} max={5} field="arete" bind:value={sheetData.arete} />
      </div>

      <div class="flex flex-col items-center gap-2 relative border rounded-xl border-black pb-3 pt-4 px-3">
        <div class="absolute left-0 right-0 -top-3 flex justify-center">
          <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider rounded text-tprimary px-2">Willpower</div>
        </div>

        <DotDisplay readonly={true} sheet={sheetData} field="willpower_permanent" bind:value={sheetData.willpower_permanent} />
        <DotDisplay type={XP_TYPE_WILLPOWER} shape="box" sheet={sheetData} field="willpower_current" bind:value={sheetData.willpower_current} />
      </div>

      <div> Quintessence TODO </div>
    </div>

    <div class="h-fit flex flex-col items-center gap-2 relative border rounded-xl border-black pb-3 pt-4 px-3">
      <div class="absolute left-0 right-0 -top-3 flex justify-center">
        <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider rounded text-tprimary px-2">Experience</div>
      </div>

      <IntegerField header="Experience" bind:value={sheetData.experience} disabled={sheetData.mode !== 'creative'} />
    </div>
  </div>
</div>
