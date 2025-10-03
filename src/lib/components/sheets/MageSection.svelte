<script>
  import DotDisplay from './DotDisplay.svelte';
  import DotTextField from './DotTextField.svelte';
  import DynamicListSection from './DynamicListSection.svelte';
  import HeaderIntegerField from './HeaderIntegerField.svelte';
  export let sheetData;
</script>

<div class="flex flex-col items-center w-full">
  <h2 class="text-2xl font-bold mb-4">Spheres</h2>
  <div class="grid grid-cols-3 gap-x-6 w-full">
    <div>
      <DotTextField label="Correspondence" value="" level={sheetData.sphere_correspondence ?? 0} sheet={sheetData} field="talent_correspondence" />
      <DotTextField label="Entropy" value="" level={sheetData.sphere_entropy ?? 0} sheet={sheetData} field="talent_entropy" />
      <DotTextField label="Forces" value="" level={sheetData.sphere_forces ?? 0} sheet={sheetData} field="talent_forces" />
    </div>

    <div>
      <DotTextField label="Life" value="" level={sheetData.sphere_life ?? 0} sheet={sheetData} field="talent_life" />
      <DotTextField label="Matter" value="" level={sheetData.sphere_matter ?? 0} sheet={sheetData} field="talent_matter" />
      <DotTextField label="Mind" value="" level={sheetData.sphere_mind ?? 0} sheet={sheetData} field="talent_mind" />
    </div>

    <div>
      <DotTextField label="Prime" value="" level={sheetData.sphere_prime ?? 0} sheet={sheetData} field="talent_prime" />
      <DotTextField label="Spirit" value="" level={sheetData.sphere_spirit ?? 0} sheet={sheetData} field="talent_spirit" />
      <DotTextField label="Time" value="" level={sheetData.sphere_time ?? 0} sheet={sheetData} field="talent_time" />
    </div>
  </div>

  <h2 class="text-2xl font-bold mb-4">Advantages</h2>
  <div class="grid grid-cols-3 gap-4 w-full">
    <div class="flex flex-col items-center gap-10">
      <DynamicListSection header="Backgrounds" bind:entries={sheetData.disciplines} />

      <DynamicListSection header="Other Traits" bind:entries={sheetData.other_traits} />
    </div>

    <div class="flex flex-col items-center gap-10">
      <div class="flex flex-col items-center gap-2">
        <div class="font-bold">Arete</div>
        <DotDisplay sheet={sheetData} max={5} field="arete" bind:value={sheetData.arete} />
      </div>

      <div class="flex flex-col items-center gap-2">
        <div class="font-bold">Willpower</div>
        <DotDisplay readonly={true} sheet={sheetData} field="willpower_permanent" bind:value={sheetData.willpower_permanent} />
        <DotDisplay shape="box" sheet={sheetData} field="willpower_current" bind:value={sheetData.willpower_current} />
      </div>

      <div> Quintessence TODO </div>
    </div>

    <div>
      <HeaderIntegerField header="Experience" bind:value={sheetData.experience} />
    </div>
  </div>
</div>
