<script lang="ts">
  // import background from '$lib/assets/forest_bg.png';
  import winterBackground from '$lib/assets/Winter.png';
  import dwLogo from '$lib/assets/dw_logo.png';
  import { onMount } from 'svelte';
  // import creamFilagree from '$lib/assets/cream_filagree.png';
  import darkFilagree from '$lib/assets/dark_filagree.png';

  let entered = true;

  function enterSite() {
    entered = true;
    setTimeout(() => {
      document.documentElement.classList.remove('no-scroll');
    }, 1000);
  }

  onMount(() => {
    document.documentElement.classList.add('no-scroll');
  });
</script>

<!-- Overlay -->
<div
  class="fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-1000
    {entered ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}"
  aria-hidden={!entered}
  style="background-image: url({winterBackground}); background-size: cover; background-position: center;"
>
  <div class="absolute inset-0 backdrop-blur-[2px]"></div>
  <img src={dwLogo} alt="DarkWest Logo" class="w-3/4 h-auto mb-4 logo-drop-shadow" />

  <button
    class="z-10 mt-10 text-4xl !text-black button-drop-shadow button-hover-drop-shadow font-semibold font-rampart-spurs-stamp !border-none !bg-transparent tracking-widest"
    on:click={enterSite}
  >
    ENTER
  </button>
</div>

<!-- Main Content -->
<div class="flex flex-col w-full h-full transition-opacity duration-500 {entered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}">
  <div class="flex flex-col relative grow items-center gap-8 overflow-y-auto pb-10">
    <div class="text-center mt-12">
      <div class="mb-2">
        <span class="block text-lg tracking-wide uppercase font-rampart-spurs">Welcome to the</span>
        <span class="block text-6xl tracking-widest mt-1 font-rampart-spurs-stamp">World of DarkWest</span>
      </div>
    </div>

    <div class="flex flex-col font-speedwriter items-center max-w-3/4 px-6 py-4 bg-gradient-to-r from-background-0 via-dark-green-0 to-backgrond-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>

    <div class="flex flex-col font-speedwriter items-center max-w-3/4 px-6 py-4 bg-gradient-to-r from-background-0 via-dark-green-0 to-backgrond-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>

    <div class="flex flex-col font-speedwriter items-center max-w-3/4 px-6 py-4 bg-gradient-to-r from-background-0 via-dark-green-0 to-backgrond-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>

    <div class="flex flex-col font-speedwriter items-center max-w-3/4 px-6 py-4 bg-gradient-to-r from-background-0 via-dark-green-0 to-backgrond-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </div>

  <div class="flex w-full relative justify-between bg-black pb-2 px-2">
    <div class="h-6 w-full absolute left-0 right-0 -top-6 bg-gradient-to-b from-transparent via-black to-black"></div>

    <div>
      <img src={darkFilagree} alt="Cream Filagree" class="w-22 h-auto filagree-drop-shadow" />
    </div>

    <div class="flex flex-col gap-2 items-center justify-center h-full">
      <div>Contact</div>
      <div class="text-xs">social logos</div>
    </div>

    <div>
      <img src={darkFilagree} alt="Cream Filagree" class="w-22 h-auto -scale-x-100 filagree-drop-shadow" />
    </div>
  </div>
</div>

<style>
  .logo-drop-shadow {
    filter: drop-shadow(0 0px 11px var(--color-light-blue-0)) drop-shadow(0 0px 11px var(--color-light-blue-0));
  }

  .button-drop-shadow {
    filter: drop-shadow(0 0px 11px var(--color-light-blue-0)) drop-shadow(0 0px 11px var(--color-light-blue-0)) drop-shadow(0 0px 11px var(--color-light-blue-0));
    transition: filter 0.3s ease;
  }

  .button-hover-drop-shadow:hover {
    filter: drop-shadow(0 0px 11px var(--color-light-blue-0)) drop-shadow(0 0px 11px var(--color-light-blue-0)) drop-shadow(0 0px 15px var(--color-light-green-0));
  }

  .filagree-drop-shadow {
    filter: drop-shadow(0 0px 3px var(--color-light-blue-0));
  }
</style>
