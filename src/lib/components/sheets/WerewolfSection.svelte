<script>
  import DotDisplay from './DotDisplay.svelte';
  // import DotTextField from './components/sheets/DotTextField.svelte';
  import DropdownSelect from './DropdownSelect.svelte';
  import DynamicListSection from './DynamicListSection.svelte';
  import IntegerField from './IntegerField.svelte';
  import sunSpurLeftWhite from '$lib/assets/sun_spur_left_white.png';
  import sunSpurRightWhite from '$lib/assets/sun_spur_right_white.png';
  import { XP_TYPE_BACKGROUND, XP_TYPE_WEREWOLF_RAGE, XP_TYPE_WEREWOLF_GNOSIS, XP_TYPE_WILLPOWER } from '../../../constants';

  export let sheetData;

  const rankOptions = [
    { label: '1 - Cliath', value: 1 },
    { label: '2 - Fostern', value: 2 },
    { label: '3 - Adren', value: 3 },
    { label: '4 - Athro', value: 4 },
    { label: '5 - Elder', value: 5 },
  ];
</script>

<div class="flex flex-col items-center w-full">
  <div class="flex justify-center items-center w-full relative mb-1 gap-3">
    <img src={sunSpurLeftWhite} alt="Sun Spur Left" class="h-12" />
    <h2 class="text-2xl text-cream-0 font-rampart-spurs-stamp tracking-wider">Advantages</h2>
    <img src={sunSpurRightWhite} alt="Sun Spur Right" class="h-12" />
  </div>

  <div class="grid grid-cols-3 gap-4 w-full mt-4">
    <div>
      <DynamicListSection header="Backgrounds" bind:entries={sheetData.disciplines} type={XP_TYPE_BACKGROUND} />
    </div>

    <div>
      <!-- If gifts are implemented as DynamicListSection or DotTextField, use type={XP_TYPE_WEREWOLF_GIFT} -->
      Gifts TODO
    </div>

    <div class="flex flex-col gap-2">
      <!-- If gifts are implemented as DynamicListSection or DotTextField, use type={XP_TYPE_WEREWOLF_GIFT} -->
      Gifts TODO
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4 w-full mt-8">
    <div class="flex flex-col items-center gap-6">
      <div class="flex flex-col items-center relative gap-4 border rounded-xl border-cream-0/20 px-3 pb-3 pt-4">
        <div class="absolute left-0 right-0 -top-3 flex justify-center">
          <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider text-xl px-1">Renown</div>
        </div>

        <div class="flex flex-col items-center gap-2">
          <div class="font-rampart-spurs tracking-wider">Glory</div>
          <DotDisplay readonly={true} sheet={sheetData} field="glory_permanent" bind:value={sheetData.glory_permanent} />
          <DotDisplay shape="box" sheet={sheetData} field="glory_current" bind:value={sheetData.glory_current} />
        </div>

        <div class="flex flex-col items-center gap-2">
          <div class="font-rampart-spurs tracking-wider">Honor</div>
          <DotDisplay readonly={true} sheet={sheetData} field="honor_permanent" bind:value={sheetData.honor_permanent} />
          <DotDisplay shape="box" sheet={sheetData} field="honor_current" bind:value={sheetData.honor_current} />
        </div>

        <div class="flex flex-col items-center gap-2">
          <div class="font-rampart-spurs tracking-wider">Wisdom</div>
          <DotDisplay readonly={true} sheet={sheetData} field="wisdom_permanent" bind:value={sheetData.wisdom_permanent} />
          <DotDisplay shape="box" sheet={sheetData} field="wisdom_current" bind:value={sheetData.wisdom_current} />
        </div>
      </div>

      <div class="flex flex-col items-center gap-2 relative border rounded-xl border-cream-0/20 px-3 pb-3 pt-2">
        <div class="absolute left-0 right-0 -top-3 flex justify-center">
          <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider px-1">Rank</div>
        </div>
        <DropdownSelect options={rankOptions} sheet={sheetData} field="rank" bind:value={sheetData.rank} />
      </div>
    </div>

    <div class="flex flex-col items-center gap-8">
      <div class="flex flex-col items-center gap-2 relative border rounded-xl border-cream-0/20 pb-3 pt-4 px-3">
        <div class="absolute left-0 right-0 -top-3 flex justify-center">
          <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider px-1">Rage</div>
        </div>

        <DotDisplay readonly={true} type={XP_TYPE_WEREWOLF_RAGE} sheet={sheetData} field="rage_permanent" bind:value={sheetData.rage_permanent} />
        <DotDisplay shape="box" type={XP_TYPE_WEREWOLF_RAGE} sheet={sheetData} field="rage_current" bind:value={sheetData.rage_current} />
      </div>

      <div class="flex flex-col items-center gap-2 relative border rounded-xl border-cream-0/20 pb-3 pt-4 px-3">
        <div class="absolute left-0 right-0 -top-3 flex justify-center">
          <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider px-1">Gnosis</div>
        </div>

        <DotDisplay readonly={true} type={XP_TYPE_WEREWOLF_GNOSIS} sheet={sheetData} field="gnosis_permanent" bind:value={sheetData.gnosis_permanent} />
        <DotDisplay shape="box" type={XP_TYPE_WEREWOLF_GNOSIS} sheet={sheetData} field="gnosis_current" bind:value={sheetData.gnosis_current} />
      </div>

      <div class="flex flex-col items-center gap-2 relative border rounded-xl border-cream-0/20 pb-3 pt-4 px-3">
        <div class="absolute left-0 right-0 -top-3 flex justify-center">
          <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider px-1">Willpower</div>
        </div>

        <DotDisplay readonly={true} sheet={sheetData} field="willpower_permanent" bind:value={sheetData.willpower_permanent} />
        <DotDisplay type={XP_TYPE_WILLPOWER} shape="box" sheet={sheetData} field="willpower_current" bind:value={sheetData.willpower_current} />
      </div>
    </div>

    <div class="h-fit flex flex-col items-center gap-2 relative border rounded-xl border-cream-0/20 pb-3 pt-4 px-3">
      <div class="absolute left-0 right-0 -top-3 flex justify-center">
        <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider px-1">Experience</div>
      </div>

      <IntegerField header="Experience" bind:value={sheetData.experience} />
    </div>
  </div>
</div>
