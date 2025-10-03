<script>
  import DynamicListSection from './DynamicListSection.svelte';
  import HeaderIntegerField from './HeaderIntegerField.svelte';
  export let sheetData;
</script>

<div class="flex flex-col items-center w-full">
  <h2 class="text-2xl font-bold mb-4">Advantages</h2>
  <div class="grid grid-cols-3 gap-4 w-full">
    <div>
      <DynamicListSection header="Other Traits" bind:entries={sheetData.other_traits} />
    </div>

    <div>
      <DynamicListSection header="Backgrounds" bind:entries={sheetData.backgrounds} />
    </div>

    <div>
      <HeaderIntegerField header="Experience" bind:value={sheetData.experience} />
    </div>
  </div>
</div>
