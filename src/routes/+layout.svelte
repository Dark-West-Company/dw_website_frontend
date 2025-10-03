<script>
  import '../app.css';

  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import favicon from '$lib/assets/favicon.svg';
  import { userData } from '$lib/userStore';
  import { apiGet } from '$lib/api';
  import { eventBus, events } from '@/eventBus';

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

<div class="flex flex-col w-full h-full bg-background-900">
  <div class="px-6 py-3 grid grid-cols-3 items-center shadow-lg border-b-2 border-background-400 bg-background-900">
    <div>
      {#if isAdmin}
        <button class="ml-auto w-fit px-3 py-1 rounded transition-colors duration-200" on:click={() => (window.location.href = '/admin')}> Admin </button>
      {/if}
    </div>

    <button
      type="button"
      class="align-self-center text-center font-serif tracking-widest uppercase text-secondary-400 hover:underline focus:outline-none"
      style="display: block; background: none; border: none; cursor: pointer;"
      on:click={() => goto('/')}
    >
      World of DarkWest
    </button>

    {#if $userData.isLoading}
      <div class="ml-auto w-fit px-3 py-1 rounded bg-background-700 text-secondary-400 animate-pulse">Loading...</div>
    {:else if !loggedIn}
      <button class="px-4 py-2 rounded transition-colors duration-200" on:click={loginWithDiscord}> Login with Discord </button>
    {:else}
      <button class="ml-auto w-fit px-3 py-1 rounded transition-colors duration-200" on:click={() => (window.location.href = '/sheets')}> My sheets </button>
    {/if}
  </div>
  <div class="flex grow flex-1 overflow-auto">
    <slot />
  </div>
</div>
