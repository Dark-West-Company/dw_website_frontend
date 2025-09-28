<script>
  import TextField from './TextField.svelte';
  import IntegerField from './IntegerField.svelte';
  import AttributesSection from './AttributesSection.svelte';
  import AbilitiesSection from './AbilitiesSection.svelte';
  export let sheet;
</script>

<div class="flex flex-col items-center w-full px-10">
  <h1 class="text-4xl font-bold mt-4 mb-8 text-center capitalize">{sheet.character_type}</h1>

  <div class="grid grid-cols-3 grid-rows-3 gap-2 w-full">
    <TextField id="name" label="Name" bind:value={sheet.name} />
    <TextField id="nature" label="Nature" bind:value={sheet.nature} />
    <IntegerField id="age" label="Age" bind:value={sheet.age} />

    <TextField id="player" label="Player" bind:value={sheet.player} />
    <TextField id="demeanor" label="Demeanor" bind:value={sheet.demeanor} />
    <TextField id="sex" label="Sex" bind:value={sheet.sex} />

    <TextField id="chronicle" label="Chronicle" bind:value={sheet.chronicle} />
    <TextField id="concept" label="Concept" bind:value={sheet.concept} />
    <TextField id="residence" label="Residence" bind:value={sheet.residence} />
  </div>

  <div class="w-full mt-8">
    <AttributesSection {sheet} />
  </div>

  <div class="w-full mt-8">
    <AbilitiesSection {sheet} />
  </div>
</div>
