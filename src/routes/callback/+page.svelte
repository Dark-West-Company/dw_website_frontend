<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  onMount(async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (!code) {
      goto('/');
      return;
    }
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const callbackUrl = `${backendUrl}/api/auth/discord/callback`;
    console.log('Attempting to POST to:', callbackUrl);
    try {
      const res = await fetch(callbackUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      if (res.ok) {
        const { token } = await res.json();
        localStorage.setItem('jwt', token);
      }
    } catch (e) {
      // Optionally handle error
    }
    goto('/');
  });
</script>

<div class="flex flex-col items-center justify-center h-screen">
  <div class="text-secondary-400 text-xl font-bold">Logging you in via Discord...</div>
</div>
