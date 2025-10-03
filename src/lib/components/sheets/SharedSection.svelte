<script>
  import TextField from './TextField.svelte';
  import IntegerField from './IntegerField.svelte';
  import AttributesSection from './AttributesSection.svelte';
  import AbilitiesSection from './AbilitiesSection.svelte';
  export let sheet;
</script>

<div class="flex flex-col items-center w-full">
  <div class="grid grid-cols-3 items-center w-full">
    <button class="flex items-center w-fit h-fit gap-1 !bg-transparent hover:!text-primary-200" on:click={() => history.back()}>
      <i class="mdi mdi-arrow-left" aria-hidden="true"></i>
      <span>Back</span>
    </button>

    <div class="text-2xl font-bold mt-4 mb-4 text-center capitalize">{sheet.character_type} Character Sheet</div>
  </div>

  <div class="grid grid-cols-3 gap-2 w-full">
    <div class="flex flex-col gap-1">
      <TextField id="name" label="Name" bind:value={sheet.name} />
      <TextField id="player" label="Player" bind:value={sheet.player} />
      <TextField id="chronicle" label="Chronicle" bind:value={sheet.chronicle} />
    </div>

    <div class="flex flex-col gap-1">
      {#if sheet.character_type === 'vampire' || sheet.character_type === 'mage'}
        <TextField id="nature" label="Nature" bind:value={sheet.nature} />
      {/if}
      {#if sheet.character_type === 'vampire' || sheet.character_type === 'mage'}
        <TextField id="demeanor" label="Demeanor" bind:value={sheet.demeanor} />
      {/if}
      {#if sheet.character_type !== 'werewolf'}
        <TextField id="concept" label="Concept" bind:value={sheet.concept} />
      {/if}

      {#if sheet.character_type === 'werewolf'}
        <TextField id="breed" label="Breed" bind:value={sheet.breed} />
        <TextField id="auspice" label="Auspice" bind:value={sheet.auspice} />
        <TextField id="tribe" label="Tribe" bind:value={sheet.tribe} />
      {/if}
    </div>

    <div class="flex flex-col gap-1">
      {#if sheet.character_type === 'human'}
        <IntegerField id="age" label="Age" bind:value={sheet.age} />
        <TextField id="gender" label="Gender" bind:value={sheet.gender} />
      {/if}

      {#if sheet.character_type === 'vampire'}
        <TextField id="clan" label="Clan" bind:value={sheet.clan} />
        <IntegerField id="generation" label="Generation" bind:value={sheet.generation} />
        <TextField id="sire" label="Sire" bind:value={sheet.sire} />
      {/if}
      <!-- <TextField id="residence" label="Residence" bind:value={sheet.residence} /> -->

      {#if sheet.character_type === 'werewolf'}
        <TextField id="pack_name" label="Pack Name" bind:value={sheet.pack_name} />
        <TextField id="pack_totem" label="Pack Totem" bind:value={sheet.pack_totem} />
        <TextField id="concept" label="Concept" bind:value={sheet.concept} />
      {/if}
    </div>
  </div>

  <div class="w-full border-t pt-3 mt-3">
    <AttributesSection {sheet} />
  </div>

  <div class="w-full border-t pt-3 mt-3">
    <AbilitiesSection {sheet} />
  </div>
</div>
