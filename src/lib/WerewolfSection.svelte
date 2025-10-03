<script>
  import DotDisplay from './components/sheets/DotDisplay.svelte';
  // import DotTextField from './components/sheets/DotTextField.svelte';
  import DropdownSelect from './components/sheets/DropdownSelect.svelte';
  import DynamicListSection from './components/sheets/DynamicListSection.svelte';
  import HeaderIntegerField from './components/sheets/HeaderIntegerField.svelte';
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
  <h2 class="text-2xl font-bold mb-4">Advantages</h2>
  <div class="grid grid-cols-3 gap-4 w-full">
    <div>
      <DynamicListSection header="Backgrounds" bind:entries={sheetData.disciplines} />
    </div>

    <div> Gifts </div>

    <div class="flex flex-col gap-2"> Gifts </div>
  </div>

  <div class="grid grid-cols-3 gap-4 w-full">
    <div class="flex flex-col items-center gap-4">
      <div class="font-bold text-xl">Renown</div>
      <div class="flex flex-col items-center gap-2">
        <div class="font-bold">Glory</div>
        <DotDisplay readonly={true} sheet={sheetData} field="glory_permanent" bind:value={sheetData.glory_permanent} />
        <DotDisplay shape="box" sheet={sheetData} field="glory_current" bind:value={sheetData.glory_current} />
      </div>

      <div class="flex flex-col items-center gap-2">
        <div class="font-bold">Honor</div>
        <DotDisplay readonly={true} sheet={sheetData} field="honor_permanent" bind:value={sheetData.honor_permanent} />
        <DotDisplay shape="box" sheet={sheetData} field="honor_current" bind:value={sheetData.honor_current} />
      </div>

      <div class="flex flex-col items-center gap-2">
        <div class="font-bold">Wisdom</div>
        <DotDisplay readonly={true} sheet={sheetData} field="wisdom_permanent" bind:value={sheetData.wisdom_permanent} />
        <DotDisplay shape="box" sheet={sheetData} field="wisdom_current" bind:value={sheetData.wisdom_current} />
      </div>

      <div class="flex flex-col items-center gap-2">
        <div class="font-bold">Rank</div>
        <DropdownSelect options={rankOptions} sheet={sheetData} field="rank" bind:value={sheetData.rank} />
      </div>
    </div>

    <div class="flex flex-col items-center gap-4">
      <div class="flex flex-col items-center gap-2">
        <div class="font-bold">Rage</div>
        <DotDisplay readonly={true} sheet={sheetData} field="rage_permanent" bind:value={sheetData.rage_permanent} />
        <DotDisplay shape="box" sheet={sheetData} field="rage_current" bind:value={sheetData.rage_current} />
      </div>

      <div class="flex flex-col items-center gap-2">
        <div class="font-bold">Gnosis</div>
        <DotDisplay readonly={true} sheet={sheetData} field="gnosis_permanent" bind:value={sheetData.gnosis_permanent} />
        <DotDisplay shape="box" sheet={sheetData} field="gnosis_current" bind:value={sheetData.gnosis_current} />
      </div>

      <div class="flex flex-col items-center gap-2">
        <div class="font-bold">Willpower</div>
        <DotDisplay readonly={true} sheet={sheetData} field="willpower_permanent" bind:value={sheetData.willpower_permanent} />
        <DotDisplay shape="box" sheet={sheetData} field="willpower_current" bind:value={sheetData.willpower_current} />
      </div>
    </div>

    <div>
      <HeaderIntegerField header="Experience" bind:value={sheetData.experience} />
    </div>
  </div>
</div>
