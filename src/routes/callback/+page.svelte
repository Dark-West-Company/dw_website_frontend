<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { apiPost } from '$lib/api';

  onMount(async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (!code) {
      goto('/');
      return;
    }
    try {
      const res = await apiPost('/api/auth/discord/callback', { code });
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
