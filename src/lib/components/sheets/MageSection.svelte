<script>
  import DotDisplay from './DotDisplay.svelte';
  import DotTextField from './DotTextField.svelte';
  import DynamicListSection from './DynamicListSection.svelte';
  import IntegerField from './IntegerField.svelte';
  import flowerDividerLeft from '$lib/assets/flower_divider_left.png';
  import flowerDividerRight from '$lib/assets/flower_divider_right.png';

  import { XP_TYPE_MAGE_SPHERE, XP_TYPE_BACKGROUND, XP_TYPE_MAGE_ARETE, XP_TYPE_WILLPOWER } from '../../../constants';
  import MageQuintessenceRing from './MageQuintessenceRing.svelte';
  export let sheetData;
  export let mode = 'active';
</script>

<div class="flex flex-col items-center w-full">
  <div class="flex justify-center items-center w-full relative mb-1 gap-3 px-5">
    <img src={flowerDividerLeft} alt="Flower Divider Left" class="h-6 black-to-text-primary" />
    <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider mt-1">Spheres</h2>
    <img src={flowerDividerRight} alt="Flower Divider Right" class="h-6 black-to-text-primary" />
  </div>

  <div class="grid grid-cols-3 gap-x-6 w-full px-5">
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

  <div class="w-full flex flex-col gap-5 relative pt-4 pb-6 mt-6 bg-background-0/50 px-5">
    <div class="absolute left-0 right-0 h-2 -top-2 bg-gradient-to-b from-transparent to-background-0/50 z-10"></div>

    <div class="flex justify-center items-center w-full relative gap-3">
      <img src={flowerDividerLeft} alt="Flower Divider Left" class="h-6 black-to-text-primary" />
      <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider mt-1">Advantages</h2>
      <img src={flowerDividerRight} alt="Flower Divider Right" class="h-6 black-to-text-primary" />
    </div>

    <div class="grid grid-cols-3 gap-4 w-full">
      <div class="flex flex-col items-center gap-10">
        <DynamicListSection header="Backgrounds" bind:entries={sheetData.backgrounds} type={XP_TYPE_BACKGROUND} />

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

        <div>
          <MageQuintessenceRing sheet={sheetData} />
        </div>
      </div>

      <div class="h-fit flex flex-col items-center gap-2 relative border rounded-xl border-black pb-3 pt-4 px-3">
        <div class="absolute left-0 right-0 -top-3 flex justify-center">
          <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider rounded text-tprimary px-2">Experience</div>
        </div>

        <IntegerField header="Experience" bind:value={sheetData.experience} disabled={mode === 'active'} />
      </div>
    </div>
    <div class="absolute left-0 right-0 h-2 -bottom-2 bg-gradient-to-t from-transparent to-background-0/50 z-10"></div>
  </div>
</div>
