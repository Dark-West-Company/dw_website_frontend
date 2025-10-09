<script>
  import '../app.css';

  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import favicon from '$lib/assets/favicon.svg';
  import { userData } from '$lib/userStore';
  import { apiGet } from '$lib/api';
  import { eventBus, events } from '@/eventBus';
  import { resolve } from '$app/paths';
  import logo from '$lib/assets/dw_logo_green.png';
  import dwLogoSimple from '$lib/assets/dw_logo_simple.png';
  import winterBackground from '$lib/assets/Winter.png';

  let loggedIn = false;
  let isAdmin = false;

  // Check for JWT in localStorage and fetch character info
  async function fetchUserInfo() {
    userData.update((u) => ({ ...u, isLoading: true }));
    const token = localStorage.getItem('jwt');

    try {
      const res = await apiGet('/api/user/info');
      if (res.ok) {
        const data = await res.json();
        isAdmin = !!data.isAdmin;
        userData.set({
          isAdmin: !!data.isAdmin,
          sheets: data.sheets ?? [],
          user: data.user ?? null,
          characters: data.characters ?? [],
          isLoading: false,
        });

        loggedIn = !!token;
        console.log('[DEBUG] userData updated:', data);
      } else if (res.status === 401) {
        loggedIn = false;
        userData.update((u) => ({ ...u, isLoading: false }));
        console.log('[DEBUG] fetchUserInfo: Unauthorized');
      }
    } catch (e) {
      loggedIn = false;
      userData.update((u) => ({ ...u, isLoading: false }));
      console.error('[DEBUG] fetchUserInfo error:', e);
    }
  }

  onMount(fetchUserInfo);

  // Discord OAuth parameters
  const clientId = import.meta.env.VITE_DISCORD_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_DISCORD_REDIRECT_URI;
  const discordOAuthBase = 'https://discord.com/oauth2/authorize';
  const scope = 'identify';
  const responseType = 'code';

  function loginWithDiscord() {
    // Assemble Discord OAuth URL programmatically
    const discordOAuthUrl = `${discordOAuthBase}?client_id=${clientId}` + `&redirect_uri=${encodeURIComponent(redirectUri)}` + `&response_type=${responseType}` + `&scope=${scope}`;
    window.location.href = discordOAuthUrl;
  }

  eventBus.on(events.RELOAD_USER_DATA, fetchUserInfo);
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col w-full h-full bg-background-0">
  <div
    class="flex flex-col items-center relative w-full font-rampart-spurs z-50"
    style="background-image: url({winterBackground}); background-size: cover; background-position: center;"
  >
    <div class="absolute inset-0 backdrop-blur-[2px] bg-black/60"></div>
    <div class="grid grid-cols-3 items-center w-full gap-3 z-10">
      <div class="flex items-center justify-end gap-4">
        <!-- <img src={logo} alt="Logo" class="h-18 w-auto cursor-pointer" on:click={() => goto(resolve('/'))} /> -->

        <button class="w-fit text-xl px-3 button-hover-drop-shadow" on:click={() => (window.location.href = '/about')}> About </button>
        <button class="w-fit text-xl px-3 button-hover-drop-shadow" on:click={() => (window.location.href = '/lore')}> Lore </button>
      </div>

      <div class="flex items-center justify-center z-10">
        <button type="button" class="flex items-center w-fit !bg-transparent !border-none" on:click={() => goto(resolve('/'))}>
          <img src={dwLogoSimple} alt="DarkWest Logo" class="w-84 h-auto logo-drop-shadow pt-3 pb-2" />
        </button>
      </div>

      <div class="flex items-center justify-start gap-4">
        <button class="w-fit text-xl px-3 button-hover-drop-shadow" on:click={() => (window.location.href = 'https://discord.com')}> Discord </button>
        {#if $userData.isLoading}
          <div class="w-fit px-3 py-1">Loading...</div>
        {:else if !loggedIn}
          <button class="w-fit px-3 py-1 button-hover-drop-shadow" on:click={loginWithDiscord}> Login </button>
        {:else}
          <button class="w-fit text-xl px-3 py-1 button-hover-drop-shadow" on:click={() => (window.location.href = '/sheets')}> Sheets </button>
        {/if}
      </div>
    </div>

    <div class="h-6 w-full absolute left-0 right-0 -bottom-3 bg-gradient-to-b from-transparent via-background-0 to-transparent"></div>

    <!-- <div class="flex items-center gap-4">
      {#if isAdmin}
        <button class="ml-auto w-fit text-xl px-3 rounded border-2 border-black" on:click={() => (window.location.href = '/admin')}> Admin </button>
      {/if}
    </div> -->
  </div>

  <div class="flex grow flex-1 overflow-auto">
    <slot />
  </div>
</div>

<style>
  .logo-drop-shadow {
    filter: drop-shadow(0 0px 6px var(--color-light-blue-0)) drop-shadow(0 0px 6px var(--color-light-blue-0));
  }

  .button-hover-drop-shadow:hover {
    transition: filter 0.3s ease;
    filter: drop-shadow(0 0px 11px var(--color-dark-blue-0)) drop-shadow(0 0px 11px var(--color-medium-blue-0));
  }
</style>
