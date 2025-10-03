<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { apiPost } from '$lib/api';
  import { resolve } from '$app/paths';

  onMount(async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (!code) {
      goto(resolve('/'));
      return;
    }
    try {
      const res = await apiPost('/api/auth/discord/callback', { code });
      if (res.ok) {
        const data = await res.json();
        console.log('Callback response data:', data);
        if (typeof window !== 'undefined') {
          localStorage.setItem('jwt', data.token);
          console.log('JWT set in localStorage:', data.token);
        } else {
          console.log('localStorage not available (server-side)');
        }
      }
    } catch (e) {
      // Optionally handle error
      console.error('Error during Discord callback:', e);
    }
    window.location.replace('/');
  });
</script>

<div class="flex items-center justify-center w-full h-full">
  <div class="text-secondary-400 text-xl font-bold">Logging you in via Discord...</div>
</div>
