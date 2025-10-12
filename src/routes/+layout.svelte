<script>
  import '../app.css';

  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  // import favicon from '$lib/assets/favicon.svg';
  // import dwIcon from '$lib/assets/dw_icon.png';
  import { userData } from '$lib/userStore';
  import { apiGet } from '$lib/api';
  import { eventBus, events } from '@/eventBus';
  import { resolve } from '$app/paths';
  // import logo from '$lib/assets/dw_logo_green.png';
  import dwLogoSimple from '$lib/assets/dw_logo_simple.png';
  // import winterBackground from '$lib/assets/Winter.png';
  import blackInkBackground from '$lib/assets/black_ink_background.png';
  import { page } from '$app/stores';
  import dwLogo from '$lib/assets/dw_logo.png';
  import dwLogoWhite from '$lib/assets/dw_logo_white.png';

  let loggedIn = false;
  // let isAdmin = false;

  // Overlay logic
  let entered = false;
  $: isRoot = $page.url.pathname === '/';

  function enterSite() {
    entered = true;
    setTimeout(() => {
      document.documentElement.classList.remove('no-scroll');
    }, 1000);
  }

  onMount(() => {
    if (isRoot) {
      document.documentElement.classList.add('no-scroll');
    }
  });

  // Check for JWT in localStorage and fetch character info
  async function fetchUserInfo() {
    userData.update((u) => ({ ...u, isLoading: true }));
    const token = localStorage.getItem('jwt');

    try {
      const res = await apiGet('/api/user/info');
      if (res.ok) {
        const data = await res.json();
        userData.set({
          isAdmin: !!data.isAdmin,
          sheets: data.sheets ?? [],
          user: data.user ?? null,
          characters: data.characters ?? [],
          isLoading: false,
        });

        loggedIn = !!token;
      } else if (res.status === 401) {
        loggedIn = false;
        userData.update((u) => ({ ...u, isLoading: false }));
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
  <link rel="icon" href={dwLogoWhite} />
</svelte:head>

<div class="flex flex-col w-full h-full relative">
  <img src={blackInkBackground} alt="Black Ink Background" class="pointer-events-none fixed top-0 left-0 w-full h-full object-cover -z-10" />

  {#if isRoot}
    <!-- Overlay -->
    <div
      class="fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-1000
        {entered ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}"
      aria-hidden={entered}
      style="background-image: url({blackInkBackground}); background-size: cover; background-position: center;"
    >
      <img src={dwLogo} alt="DarkWest Logo" class="w-3/4 h-auto mb-4 logo-drop-shadow" />

      <button
        class="z-10 mt-10 text-4xl !text-black button-drop-shadow button-hover-drop-shadow font-semibold font-rampart-spurs-stamp !border-none !bg-transparent tracking-widest"
        on:click={enterSite}
      >
        ENTER
      </button>
    </div>
  {/if}

  <div class="flex flex-col items-center relative w-full font-rampart-spurs z-10 border-b-0 border-black">
    <div class="grid grid-cols-3 items-center w-full gap-3 z-10">
      <div class="flex items-center justify-end gap-4">
        <!-- <img src={logo} alt="Logo" class="h-18 w-auto cursor-pointer" on:click={() => goto(resolve('/'))} /> -->

        <button class="w-fit text-xl px-3 button-hover-drop-shadow" on:click={() => goto(resolve('/rules'))}> Rules </button>
        <button class="w-fit text-xl px-3 button-hover-drop-shadow" on:click={() => goto(resolve('/lore'))}> Lore </button>
      </div>

      <div class="flex items-center justify-center z-10">
        <button type="button" class="flex items-center w-fit !bg-transparent !border-none" on:click={() => goto(resolve('/'))}>
          <img src={dwLogoSimple} alt="DarkWest Logo" class="w-84 h-auto nav-logo-drop-shadow button-hover-drop-shadow pt-3 pb-2" />
        </button>
      </div>

      <div class="flex items-center justify-start gap-4">
        <a class="w-fit text-xl px-3 button-hover-drop-shadow text-tprimary" href="https://discord.gg/mQ4KXpJH83" target="_blank"> Discord </a>
        {#if $userData.isLoading}
          <div class="w-fit text-xl px-3 py-1 text-tprimary">Loading...</div>
        {:else if !loggedIn}
          <button class="w-fit text-xl px-3 py-1 button-hover-drop-shadow" on:click={loginWithDiscord}> Login </button>
        {:else}
          <button class="w-fit text-xl px-3 py-1 button-hover-drop-shadow" on:click={() => goto(resolve('/sheets'))}> Sheets </button>
        {/if}
      </div>
    </div>
  </div>

  <div class="flex grow overflow-hidden">
    <slot />
  </div>
</div>

<style>
  .nav-logo-drop-shadow {
    filter: drop-shadow(0 0px 6px var(--color-tprimary-0)) drop-shadow(0 0px 6px var(--color-tprimary-0));
  }

  .logo-drop-shadow {
    filter: drop-shadow(0 0px 11px var(--color-tprimary-0)) drop-shadow(0 0px 11px var(--color-tprimary-0));
  }

  .button-drop-shadow {
    filter: drop-shadow(0 0px 11px var(--color-tprimary-0)) drop-shadow(0 0px 11px var(--color-tprimary-0));
    transition: filter 0.3s ease;
  }

  .button-hover-drop-shadow {
    transition: filter 0.3s ease;
  }

  .button-hover-drop-shadow:hover {
    filter: drop-shadow(0 0px 20px var(--color-tsecondary-0)) drop-shadow(0 0px 20px var(--color-tsecondary-0));
  }
</style>
