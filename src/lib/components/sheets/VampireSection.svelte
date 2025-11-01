<script>
  import DotDisplay from './DotDisplay.svelte';
  import DotTextField from './DotTextField.svelte';
  import DropdownSelect from './DropdownSelect.svelte';
  import DynamicListSection from './DynamicListSection.svelte';
  import IntegerField from './IntegerField.svelte';
  import flowerDividerLeft from '$lib/assets/flower_divider_left.png';
  import flowerDividerRight from '$lib/assets/flower_divider_right.png';
  import { XP_TYPE_VAMPIRE_DISCIPLINE, XP_TYPE_BACKGROUND, XP_TYPE_VAMPIRE_VIRTUE, XP_TYPE_VAMPIRE_PATH, XP_TYPE_WILLPOWER } from '../../../constants';

  export let sheetData;

  const pathOptions = [
    { label: 'Humanity', value: 'humanity' },
    { label: 'Path of Blood', value: 'blood' },
    { label: 'Path of the Bones', value: 'bones' },
    { label: 'Path of Caine', value: 'caine' },
  ];
</script>

<div class="flex flex-col items-center w-full px-5">
  <div class="flex justify-center items-center w-full relative mb-1 gap-3">
    <img src={flowerDividerLeft} alt="Flower Divider Left" class="h-6 black-to-text-primary" />
    <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider mt-1">Advantages</h2>
    <img src={flowerDividerRight} alt="Flower Divider Right" class="h-6 black-to-text-primary" />
  </div>

  <div class="grid grid-cols-3 gap-4 w-full mt-4">
    <div>
      <DynamicListSection header="Disciplines" bind:entries={sheetData.disciplines} type={XP_TYPE_VAMPIRE_DISCIPLINE} />
    </div>

    <div>
      <DynamicListSection header="Backgrounds" bind:entries={sheetData.backgrounds} type={XP_TYPE_BACKGROUND} />
    </div>

    <div class="flex flex-col gap-2 border rounded-xl border-black pb-3 pt-4 px-3">
      <DotTextField
        disableSpecialty
        label="Conscience /<br> Conviction"
        type={XP_TYPE_VAMPIRE_VIRTUE}
        sheet={sheetData}
        field="virtue_conscience"
        bind:level={sheetData.virtue_conscience}
      />
      <DotTextField
        disableSpecialty
        label="Self-Control /<br> Instinct"
        type={XP_TYPE_VAMPIRE_VIRTUE}
        sheet={sheetData}
        field="virtue_self_control"
        bind:level={sheetData.virtue_self_control}
      />
      <DotTextField disableSpecialty label="Courage" type={XP_TYPE_VAMPIRE_VIRTUE} sheet={sheetData} field="virtue_courage" bind:level={sheetData.virtue_courage} />
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4 w-full mt-8">
    <div class="h-fit flex flex-col items-center gap-2 relative border rounded-xl border-black pb-3 pt-4 px-3">
      <div class="absolute left-0 right-0 -top-3 flex justify-center">
        <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider rounded text-tprimary px-2">Humanity / Path</div>
      </div>

      <DropdownSelect options={pathOptions} sheet={sheetData} field="humanity_path_name" bind:value={sheetData.humanity_path_name} />
      <DotDisplay type={XP_TYPE_VAMPIRE_PATH} sheet={sheetData} field="humanity_path_rating" bind:value={sheetData.humanity_path_rating} />
    </div>

    <div class="flex flex-col items-center gap-4">
      <div class="flex flex-col items-center gap-2 relative border rounded-xl border-black pb-3 pt-4 px-3">
        <div class="absolute left-0 right-0 -top-3 flex justify-center">
          <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider rounded text-tprimary px-2">Willpower</div>
        </div>

        <DotDisplay readonly={true} sheet={sheetData} field="willpower_permanent" bind:value={sheetData.willpower_permanent} />
        <DotDisplay type={XP_TYPE_WILLPOWER} shape="box" sheet={sheetData} field="willpower_current" bind:value={sheetData.willpower_current} />
      </div>

      <div class="flex flex-col items-center gap-2 max-w-56 w-56 relative border rounded-xl border-black pb-3 pt-4 px-3">
        <div class="absolute left-0 right-0 -top-3 flex justify-center">
          <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider rounded text-tprimary px-2">Blood Pool</div>
        </div>
        <DotDisplay count="20" shape="box" sheet={sheetData} field="blood_pool_current" bind:value={sheetData.blood_pool_current} />
      </div>
    </div>

    <div class="h-fit flex flex-col items-center gap-2 relative border rounded-xl border-black pb-3 pt-4 px-3">
      <div class="absolute left-0 right-0 -top-3 flex justify-center">
        <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider rounded text-tprimary px-2">Experience</div>
      </div>

      <IntegerField header="Experience" bind:value={sheetData.experience} disabled={sheetData.mode !== 'creative'} />
    </div>
  </div>
</div>
