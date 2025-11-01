<script>
  import DynamicListSection from './DynamicListSection.svelte';
  import IntegerField from './IntegerField.svelte';
  import flowerDividerLeft from '$lib/assets/flower_divider_left.png';
  import flowerDividerRight from '$lib/assets/flower_divider_right.png';

  import { XP_TYPE_BACKGROUND } from '../../../constants';
  export let sheetData;
</script>

<div class="flex flex-col items-center w-full px-5">
  <div class="flex justify-center items-center w-full relative mb-1 gap-3">
    <img src={flowerDividerLeft} alt="Flower Divider Left" class="h-6 black-to-text-primary" />
    <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider mt-1">Advantages</h2>
    <img src={flowerDividerRight} alt="Flower Divider Right" class="h-6 black-to-text-primary" />
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
