<script>
  import { userData } from '$lib/userStore';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  let isAdmin = false;
  let isLoading = true;

  // Wait for userData to load and check admin status
  onMount(() => {
    const unsubscribe = userData.subscribe((user) => {
      isLoading = user.isLoading;
      if (!user.isLoading) {
        isAdmin = user.isAdmin ?? false;
        if (!isAdmin) {
          goto('/');
        }
        unsubscribe();
      }
    });
  });
</script>

{#if $userData.isLoading}
  <div class="flex items-center justify-center w-full h-full">
    <p>Loading admin area...</p>
  </div>
{:else if !$userData.isAdmin}
  <!-- Redirecting, nothing to show -->
{:else}
  <slot />
{/if}