<script>
  import TextField from './TextField.svelte';
  import IntegerField from './IntegerField.svelte';
  import AttributesSection from './AttributesSection.svelte';
  import AbilitiesSection from './AbilitiesSection.svelte';
  export let sheet;
</script>

<div class="flex flex-col items-center w-full">
  <h1 class="text-4xl font-bold mt-4 mb-8 text-center capitalize">{sheet.character_type}</h1>

  <div class="grid grid-cols-3 grid-rows-3 gap-2 w-full">
    <TextField id="name" label="Name" bind:value={sheet.name} />
    {#if sheet.character_type === 'vampire' || sheet.character_type === 'mage'}
      <TextField id="nature" label="Nature" bind:value={sheet.nature} />
    {/if}
    <IntegerField id="age" label="Age" bind:value={sheet.age} />

    <TextField id="player" label="Player" bind:value={sheet.player} />
    {#if sheet.character_type === 'vampire' || sheet.character_type === 'mage'}
      <TextField id="demeanor" label="Demeanor" bind:value={sheet.demeanor} />
    {/if}
    <TextField id="gender" label="Gender" bind:value={sheet.gender} />

    <TextField id="chronicle" label="Chronicle" bind:value={sheet.chronicle} />
    <TextField id="concept" label="Concept" bind:value={sheet.concept} />
    <!-- <TextField id="residence" label="Residence" bind:value={sheet.residence} /> -->
  </div>

  <div class="w-full border-t pt-3 mt-3">
    <AttributesSection {sheet} />
  </div>

  <div class="w-full border-t pt-3 mt-3">
    <AbilitiesSection {sheet} />
  </div>
</div>
