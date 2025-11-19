<script>
  import DotDisplay from './DotDisplay.svelte';
  import WerewolfGiftsSelect from './WerewolfGiftsSelect.svelte';
  import DropdownSelect from './DropdownSelect.svelte';
  import DynamicListSection from './DynamicListSection.svelte';
  import IntegerField from './IntegerField.svelte';
  import flowerDividerLeft from '$lib/assets/flower_divider_left.png';
  import flowerDividerRight from '$lib/assets/flower_divider_right.png';
  import { XP_TYPE_BACKGROUND, XP_TYPE_WEREWOLF_RAGE, XP_TYPE_WEREWOLF_GNOSIS, XP_TYPE_WILLPOWER } from '../../../constants';

  export let sheetData;
  export let mode = 'active';

  const rankOptions = [
    { label: '1 - Cliath', value: 1 },
    { label: '2 - Fostern', value: 2 },
    { label: '3 - Adren', value: 3 },
    { label: '4 - Athro', value: 4 },
    { label: '5 - Elder', value: 5 },
  ];
</script>

<div class="flex flex-col items-center w-full px-5">
  <div class="flex justify-center items-center w-full relative mb-1 gap-3">
    <img src={flowerDividerLeft} alt="Flower Divider Left" class="h-6 black-to-text-primary" />
    <h2 class="text-2xl text-tprimary font-rampart-spurs-stamp tracking-wider mt-1">Advantages</h2>
    <img src={flowerDividerRight} alt="Flower Divider Right" class="h-6 black-to-text-primary" />
  </div>

  <div class="grid grid-cols-3 gap-4 w-full mt-4">
    <div>
      <DynamicListSection header="Backgrounds" bind:entries={sheetData.disciplines} type={XP_TYPE_BACKGROUND} />
    </div>

    <div>
      <!-- Werewolf Gifts Group 1 -->
      <WerewolfGiftsSelect gifts={sheetData.gifts} sheet={sheetData} field="gifts" startingIndex={0} />
    </div>

    <div class="flex flex-col gap-2">
      <!-- Werewolf Gifts Group 2 -->
      <WerewolfGiftsSelect gifts={sheetData.gifts} sheet={sheetData} field="gifts" startingIndex={5} />
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4 w-full mt-8">
    <div class="flex flex-col items-center gap-6">
      <div class="flex flex-col items-center relative gap-4 border rounded-xl border-black px-3 pb-3 pt-4">
        <div class="absolute left-0 right-0 -top-3 flex justify-center">
          <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider text-xl rounded text-tprimary px-2">Renown</div>
        </div>

        <div class="flex flex-col items-center gap-2 mt-2">
          <div class="font-rampart-spurs tracking-wider">Glory</div>
          {#if sheetData.glory_permanent !== undefined}
            <DotDisplay readonly={true} sheet={sheetData} field="glory_permanent" bind:value={sheetData.glory_permanent} />
          {/if}
          {#if sheetData.glory_current !== undefined}
            <DotDisplay shape="box" sheet={sheetData} field="glory_current" bind:value={sheetData.glory_current} />
          {/if}
        </div>

        <div class="flex flex-col items-center gap-2">
          <div class="font-rampart-spurs tracking-wider">Honor</div>
          {#if sheetData.honor_permanent !== undefined}
            <DotDisplay readonly={true} sheet={sheetData} field="honor_permanent" bind:value={sheetData.honor_permanent} />
          {/if}
          {#if sheetData.honor_current !== undefined}
            <DotDisplay shape="box" sheet={sheetData} field="honor_current" bind:value={sheetData.honor_current} />
          {/if}
        </div>

        <div class="flex flex-col items-center gap-2">
          <div class="font-rampart-spurs tracking-wider">Wisdom</div>
          {#if sheetData.wisdom_permanent !== undefined}
            <DotDisplay readonly={true} sheet={sheetData} field="wisdom_permanent" bind:value={sheetData.wisdom_permanent} />
          {/if}
          {#if sheetData.wisdom_current !== undefined}
            <DotDisplay shape="box" sheet={sheetData} field="wisdom_current" bind:value={sheetData.wisdom_current} />
          {/if}
        </div>
      </div>

      <div class="flex flex-col items-center gap-2 relative border rounded-xl border-black px-3 pb-3 pt-2">
        <div class="absolute left-0 right-0 -top-3 flex justify-center">
          <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider rounded text-tprimary px-2">Rank</div>
        </div>
        <DropdownSelect options={rankOptions} sheet={sheetData} field="rank" bind:value={sheetData.rank} />
      </div>
    </div>

    <div class="flex flex-col items-center gap-8">
      <div class="flex flex-col items-center gap-2 relative border rounded-xl border-black pb-3 pt-4 px-3">
        <div class="absolute left-0 right-0 -top-3 flex justify-center">
          <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider rounded text-tprimary px-2">Rage</div>
        </div>

        {#if sheetData.rage_permanent !== undefined}
          <DotDisplay readonly={true} type={XP_TYPE_WEREWOLF_RAGE} sheet={sheetData} field="rage_permanent" bind:value={sheetData.rage_permanent} />
        {/if}
        {#if sheetData.rage_current !== undefined}
          <DotDisplay shape="box" type={XP_TYPE_WEREWOLF_RAGE} sheet={sheetData} field="rage_current" bind:value={sheetData.rage_current} />
        {/if}
      </div>

      <div class="flex flex-col items-center gap-2 relative border rounded-xl border-black pb-3 pt-4 px-3">
        <div class="absolute left-0 right-0 -top-3 flex justify-center">
          <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider rounded text-tprimary px-2">Gnosis</div>
        </div>

        {#if sheetData.gnosis_permanent !== undefined}
          <DotDisplay readonly={true} type={XP_TYPE_WEREWOLF_GNOSIS} sheet={sheetData} field="gnosis_permanent" bind:value={sheetData.gnosis_permanent} />
        {/if}
        {#if sheetData.gnosis_current !== undefined}
          <DotDisplay shape="box" type={XP_TYPE_WEREWOLF_GNOSIS} sheet={sheetData} field="gnosis_current" bind:value={sheetData.gnosis_current} />
        {/if}
      </div>

      <div class="flex flex-col items-center gap-2 relative border rounded-xl border-black pb-3 pt-4 px-3">
        <div class="absolute left-0 right-0 -top-3 flex justify-center">
          <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider rounded text-tprimary px-2">Willpower</div>
        </div>

        {#if sheetData.willpower_permanent !== undefined}
          <DotDisplay readonly={true} sheet={sheetData} field="willpower_permanent" bind:value={sheetData.willpower_permanent} />
        {/if}
        {#if sheetData.willpower_current !== undefined}
          <DotDisplay type={XP_TYPE_WILLPOWER} shape="box" sheet={sheetData} field="willpower_current" bind:value={sheetData.willpower_current} />
        {/if}
      </div>
    </div>

    <div class="h-fit flex flex-col items-center gap-2 relative border rounded-xl border-black pb-3 pt-4 px-3">
      <div class="absolute left-0 right-0 -top-3 flex justify-center">
        <div class="w-fit text-center bg-background-0 font-rampart-spurs tracking-wider rounded text-tprimary px-2">Experience</div>
      </div>

      <IntegerField header="Experience" bind:value={sheetData.experience} disabled={mode === 'active'} />
    </div>
  </div>
</div>
