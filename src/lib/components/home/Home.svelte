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

<div class="flex flex-col w-full h-full bg-background-900">
  <div class="bg-primary-950 text-primary-100 px-6 py-3 flex items-center border-b-4 border-primary-800 shadow-lg">
    <div></div>
    <div class="flex-1"></div>
    <div class="text-center font-bold text-2xl tracking-widest uppercase font-serif drop-shadow">Dark West RP Group</div>
    <div class="flex-1"></div>
    {#if !loggedIn}
      <button
        class="bg-primary-800 px-4 py-2 rounded text-primary-100 font-semibold hover:bg-primary-700 transition-colors ml-4 border border-primary-700 shadow"
        on:click={loginWithDiscord}
      >
        Login with Discord
      </button>
    {:else if characterInfo}
      <button
        class="bg-primary-800 px-4 py-2 rounded text-primary-100 font-semibold hover:bg-primary-700 transition-colors ml-4 border border-primary-700 shadow"
        on:click={() => (window.location.href = '/sheets')}
      >
        View my character sheets
      </button>
    {/if}
  </div>
  <div class="flex-1 flex flex-col items-center justify-center py-12 gap-8">
    <div class="max-w-xl text-center">
      <h1 class="text-4xl font-extrabold mb-2 text-primary-400 font-serif tracking-widest uppercase drop-shadow-lg">Welcome to Dark West</h1>
      <p class="text-lg text-primary-200 mb-4 font-medium italic">
        Dark West is a RedM role-playing group set in the wild frontier. Join us for immersive stories, unique characters, and collaborative adventures.
      </p>
      <p class="text-md text-primary-300 font-mono"> Placeholder shenanigans: character sheets, campaign logs, Discord integration, and more coming soon! </p>
    </div>
    <div class="flex flex-col items-center gap-4">
      <div class="bg-primary-900 rounded-lg px-6 py-4 shadow-lg border border-primary-800 text-primary-100 w-full max-w-md text-center ring-2 ring-primary-700">
        <span class="font-bold text-xl block mb-2 font-serif tracking-wide uppercase text-primary-400">Recent RP Events</span>
        <div class="text-primary-300 text-base font-mono">
          Train heist in Valentine<br />
          Saloon showdown in Blackwater<br />
          New character sheets released
        </div>
      </div>
      <div class="bg-primary-900 rounded-lg px-6 py-4 shadow-lg border border-primary-800 text-primary-100 w-full max-w-md text-center ring-2 ring-primary-700">
        <span class="font-bold text-xl block mb-2 font-serif tracking-wide uppercase text-primary-400">Coming Soon</span>
        <div class="text-primary-300 text-base font-mono">
          Discord-linked character registration<br />
          Live campaign tracker<br />
          Customizable sheet templates
        </div>
      </div>
    </div>
  </div>
</div>
