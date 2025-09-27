<script>
  import { onMount } from 'svelte';
  let loggedIn = false;
  let characterInfo = null;

  // Check for JWT in localStorage and fetch character info
  onMount(async () => {
    const token = localStorage.getItem('jwt');
    if (token) {
      loggedIn = true;
      // Fetch character info from backend
      try {
        const res = await fetch('/api/character/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          characterInfo = await res.json();
        }
      } catch {
        loggedIn = false;
        characterInfo = null;
      }
    }
  });

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
</script>

<div class="flex flex-col w-full h-full">
  <div class="px-6 py-3 flex items-center shadow-lg">
    <div></div>
    <div class="flex-1"></div>
    <div class="text-center font-bold text-2xl tracking-widest uppercase font-serif drop-shadow">Dark West RP Group</div>
    <div class="flex-1"></div>
    {#if !loggedIn}
      <button class="px-4 py-2 rounded font-semibold hover:transition-colors ml-4 shadow" on:click={loginWithDiscord}> Login with Discord </button>
    {:else if characterInfo}
      <button class="px-4 py-2 rounded font-semibold hover:transition-colors ml-4 shadow" on:click={() => (window.location.href = '/sheets')}> View my character sheets </button>
    {/if}
  </div>
  <div class="flex-1 flex flex-col items-center justify-center py-12 gap-8">
    <div class="max-w-xl text-center">
      <h1 class="text-4xl font-extrabold mb-2 font-serif tracking-widest uppercase drop-shadow-lg">Welcome to Dark West</h1>
      <p class="text-lg mb-4 font-medium italic">
        Dark West is a RedM role-playing group set in the wild frontier. Join us for immersive stories, unique characters, and collaborative adventures.
      </p>
      <p class="text-md font-mono"> Placeholder shenanigans: character sheets, campaign logs, Discord integration, and more coming soon! </p>
    </div>
    <div class="flex flex-col items-center gap-4">
      <div class="rounded-lg px-6 py-4 shadow-lg w-full max-w-md text-center">
        <span class="font-bold text-xl block mb-2 font-serif tracking-wide uppercase">Recent RP Events</span>
        <div class="text-base font-mono">
          Train heist in Valentine<br />
          Saloon showdown in Blackwater<br />
          New character sheets released
        </div>
      </div>
      <div class="rounded-lg px-6 py-4 shadow-lg w-full max-w-md text-center">
        <span class="font-bold text-xl block mb-2 font-serif tracking-wide uppercase">Coming Soon</span>
        <div class="text-base font-mono">
          Discord-linked character registration<br />
          Live campaign tracker<br />
          Customizable sheet templates
        </div>
      </div>
    </div>
  </div>
</div>
