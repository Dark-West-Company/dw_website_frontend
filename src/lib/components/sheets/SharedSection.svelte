<script>
  import TextField from './TextField.svelte';
  import IntegerField from './IntegerField.svelte';
  import AttributesSection from './AttributesSection.svelte';
  import AbilitiesSection from './AbilitiesSection.svelte';
  export let sheet;
  export let mode = 'active';
</script>

<div class="flex flex-col relative items-center w-full">
  <div class="absolute left-0 right-0 h-2 -top-2 bg-gradient-to-b from-transparent to-background-0/50 z-10"></div>

  <div class="grid grid-cols-3 gap-6 w-full bg-background-0/50 py-3 px-5">
    <div class="flex flex-col gap-2">
      <TextField id="name" label="Name" bind:value={sheet.name} />
      <TextField id="player" label="Player" bind:value={sheet.player} />
      <TextField id="chronicle" label="Chronicle" bind:value={sheet.chronicle} />
    </div>

    <div class="flex flex-col gap-2">
      {#if sheet.character_type === 'vampire' || sheet.character_type === 'mage'}
        <TextField id="nature" label="Nature" bind:value={sheet.nature} />
      {/if}

      {#if sheet.character_type === 'vampire' || sheet.character_type === 'mage'}
        <TextField id="demeanor" label="Demeanor" bind:value={sheet.demeanor} />
      {/if}

      {#if sheet.character_type === 'human' || sheet.character_type === 'vampire'}
        <TextField id="concept" label="Concept" bind:value={sheet.concept} />
      {/if}

      {#if sheet.character_type === 'werewolf'}
        <TextField id="breed" label="Breed" bind:value={sheet.breed} />
        <TextField id="auspice" label="Auspice" bind:value={sheet.auspice} />
        <TextField id="tribe" label="Tribe" bind:value={sheet.tribe} />
      {/if}

      {#if sheet.character_type === 'mage'}
        <TextField id="Essence" label="Essence" bind:value={sheet.essence} />
      {/if}
    </div>

    <div class="flex flex-col gap-2">
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
      {/if}

      {#if sheet.character_type === 'mage'}
        <TextField id="affiliation" label="Affiliation" bind:value={sheet.affiliation} />
        <TextField id="sect" label="Sect" bind:value={sheet.sect} />
      {/if}

      {#if sheet.character_type === 'werewolf' || sheet.character_type === 'mage'}
        <TextField id="concept" label="Concept" bind:value={sheet.concept} />
      {/if}
    </div>
  </div>

  <div class="w-full relative py-4 px-5">
    <div class="absolute left-0 right-0 h-2 top-0 bg-gradient-to-t from-transparent to-background-0/50 z-10"></div>
    <AttributesSection {sheet} />
    <div class="absolute left-0 right-0 h-2 -bottom-0 bg-gradient-to-b from-transparent to-background-0/50 z-10"></div>
  </div>

  <div class="w-full relative pt-2 pb-2 mb-2 px-5 bg-background-0/50">
    <AbilitiesSection {sheet} />
    <div class="absolute left-0 right-0 h-2 -bottom-2 bg-gradient-to-t from-transparent to-background-0/50 z-10"></div>
  </div>
</div>
