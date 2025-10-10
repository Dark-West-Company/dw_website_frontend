<script>
  import DynamicListSection from './DynamicListSection.svelte';
  import IntegerField from './IntegerField.svelte';
  import sunSpurLeftBlack from '$lib/assets/sun_spur_left_black.png';
  import sunSpurRightBlack from '$lib/assets/sun_spur_right_black.png';

  import { XP_TYPE_BACKGROUND } from '../../../constants';
  export let sheetData;
</script>

<div class="flex flex-col items-center w-full">
  <div class="flex justify-center items-center w-full relative mb-1 gap-3">
    <img src={sunSpurLeftBlack} alt="Sun Spur Left" class="h-12 spurs-drop-shadow" />
    <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider">Advantages</h2>
    <img src={sunSpurRightBlack} alt="Sun Spur Right" class="h-12 spurs-drop-shadow" />
  </div>

  <div class="grid grid-cols-3 gap-4 w-full mt-4">
    <div>
      <DynamicListSection header="Other Traits" bind:entries={sheetData.other_traits} />
    </div>

    <div>
      <DynamicListSection header="Backgrounds" bind:entries={sheetData.backgrounds} type={XP_TYPE_BACKGROUND} />
    </div>

    <div class="h-fit flex flex-col items-center gap-2 relative border rounded-xl border-black pb-3 pt-4 px-3">
      <div class="absolute left-0 right-0 -top-3 flex justify-center">
        <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider rounded text-tprimary px-2">Experience</div>
      </div>

      <IntegerField header="Experience" bind:value={sheetData.experience} disabled={sheetData.mode !== 'creative'} />
    </div>
  </div>
</div>
