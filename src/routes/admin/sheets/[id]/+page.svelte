<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { apiGet } from '$lib/api';
  import { userData } from '$lib/userStore';
  import SharedSection from '$lib/components/sheets/SharedSection.svelte';
  import HumanSection from '$lib/components/sheets/HumanSection.svelte';
  import VampireSection from '$lib/components/sheets/VampireSection.svelte';
  import WerewolfSection from '$lib/components/sheets/WerewolfSection.svelte';
  import MageSection from '$lib/components/sheets/MageSection.svelte';
  import Changelog from '$lib/components/sheets/Changelog.svelte';

  let sheetId = '';
  let sheet = null;
  let isLoading = true;
  let isAdmin = false;

  onMount(async () => {
    isAdmin = $userData.isAdmin ?? false;
    if (!isAdmin) {
      goto(resolve('/'));
      return;
    }
    const pathParts = window.location.pathname.split('/');
    sheetId = pathParts[pathParts.length - 1];
    const res = await apiGet(`/api/admin/character-sheet/${sheetId}`);
    if (res.ok) {
      sheet = await res.json();
    }
    isLoading = false;
  });
</script>

<div class="grid grid-cols-[auto_300px] w-full h-full border-t-2 border-black">
  {#if isLoading}
    <div class="flex items-center justify-center w-full h-full">
      <p>Loading character sheet...</p>
    </div>
  {:else if sheet}
    <div class="flex flex-col w-full h-full overflow-y-auto pb-5 bg-primary-0/80">
      <div class="max-w-[1300px] mx-auto w-full">
        <div class="grid grid-cols-[1fr_auto_1fr] items-center w-full px-5">
          <button class="flex items-center w-fit h-fit gap-1 !bg-transparent hover:!text-info" on:click={() => goto(resolve('/admin/sheets'))}>
            <i class="mdi mdi-arrow-left" aria-hidden="true"></i>
            <span>Back</span>
          </button>
          <div class="text-2xl mt-4 mb-4 text-center font-rampart-spurs-stamp whitespace-nowrap tracking-wider text-tprimary">{sheet.data.character_type} Character Sheet</div>
        </div>
        <SharedSection sheet={sheet.data} />
        <div class="px-5 mt-2">
          {#if sheet.data.character_type === 'human'}
            <HumanSection sheetData={sheet.data} />
          {/if}
          {#if sheet.data.character_type === 'vampire'}
            <VampireSection sheetData={sheet.data} />
          {/if}
          {#if sheet.data.character_type === 'werewolf'}
            <WerewolfSection sheetData={sheet.data} />
          {/if}
          {#if sheet.data.character_type === 'mage'}
            <MageSection sheetData={sheet.data} />
          {/if}
        </div>
      </div>
    </div>
  {:else}
    <div class="flex items-center justify-center w-full h-full">
      <p>Character sheet not found.</p>
    </div>
  {/if}
  <div class="bg-background-0/80 border-l-2 border-black p-4 overflow-hidden">
    {#if sheet && sheet.data}
      <Changelog sheetId={sheetId} />
    {/if}
  </div>
</div>