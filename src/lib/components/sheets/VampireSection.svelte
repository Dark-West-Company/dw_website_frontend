<script>
  import DotDisplay from './DotDisplay.svelte';
  import DotTextField from './DotTextField.svelte';
  import DropdownSelect from './DropdownSelect.svelte';
  import DynamicListSection from './DynamicListSection.svelte';
  import HeaderIntegerField from './HeaderIntegerField.svelte';
  export let sheetData;

  const pathOptions = [
    { label: 'Humanity', value: 'humanity' },
    { label: 'Path of Blood', value: 'blood' },
    { label: 'Path of the Bones', value: 'bones' },
    { label: 'Path of Caine', value: 'caine' },
  ];
</script>

<div class="flex flex-col items-center w-full">
  <h2 class="text-2xl font-bold mb-4">Advantages</h2>
  <div class="grid grid-cols-3 gap-4 w-full">
    <div>
      <DynamicListSection header="Disciplines" bind:entries={sheetData.disciplines} />
    </div>

    <div>
      <DynamicListSection header="Backgrounds" bind:entries={sheetData.backgrounds} />
    </div>

    <div class="flex flex-col gap-2">
      <DotTextField disableSpecialty label="Conscience/Conviction" sheet={sheetData} field="virtue_conscience" bind:level={sheetData.virtue_conscience} />
      <DotTextField disableSpecialty label="Self-Control/Instinct" sheet={sheetData} field="virtue_self_control" bind:level={sheetData.virtue_self_control} />
      <DotTextField disableSpecialty label="Courage" sheet={sheetData} field="virtue_courage" bind:level={sheetData.virtue_courage} />
    </div>
  </div>
  <div class="border-t border-gray-300 my-4"></div>
  <div class="grid grid-cols-3 gap-4 w-full">
    <div class="flex flex-col items-center gap-2">
      <div class="font-bold">Humanity/Path</div>
      <DropdownSelect options={pathOptions} sheet={sheetData} field="humanity_path_name" bind:value={sheetData.humanity_path_name} />
      <DotDisplay sheet={sheetData} field="humanity_path_rating" bind:value={sheetData.humanity_path_rating} />
    </div>

    <div class="flex flex-col items-center gap-4">
      <div class="flex flex-col items-center gap-2">
        <div class="font-bold">Willpower</div>
        <DotDisplay readonly={true} sheet={sheetData} field="willpower_permanent" bind:value={sheetData.willpower_permanent} />
        <DotDisplay shape="box" sheet={sheetData} field="willpower_current" bind:value={sheetData.willpower_current} />
      </div>
      <div class="flex flex-col items-center gap-2 max-w-52">
        <div class="font-bold mb-2">Blood Pool</div>
        <DotDisplay count="20" shape="box" sheet={sheetData} field="blood_pool_current" bind:value={sheetData.blood_pool_current} />
      </div>
    </div>

    <div>
      <HeaderIntegerField header="Experience" bind:value={sheetData.experience} />
    </div>
  </div>
</div>
