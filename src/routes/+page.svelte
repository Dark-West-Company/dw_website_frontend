<script lang="ts">
  // import background from '$lib/assets/forest_bg.png';
  // import winterBackground from '$lib/assets/Winter.png';
  // import dwLogo from '$lib/assets/dw_logo.png';
  // import { onMount } from 'svelte';
  // import creamFilagree from '$lib/assets/cream_filagree.png';
  import darkFilagree from '$lib/assets/dark_filagree.png';
  // import blackInkBackground from '$lib/assets/black_ink_background.png';
  // import pageTornEdgeBlack from '$lib/assets/page_torn_edge_black.png';
  import BlinkingEye from '@/components/BlinkingEye.svelte';
</script>

<!-- Main Content -->
<div class="flex flex-col w-full h-full transition-opacity duration-500">
  <div class="h-full flex flex-col relative grow items-center justify-center">
    <div class="relative w-full grow">
      {#each Array(8) as _, i (i)}
        <BlinkingEye class="!absolute" style="left: {Math.floor(Math.random() * 90) + 5}%; top: {Math.floor(Math.random() * 80) + 10}%;" />
      {/each}
    </div>

    <div class="flex flex-col items-center h-1/2 justify-center w-full text-center font-speedwriter text-2xl bg-primary gap-10 relative z-10 my-24">
      <div class="torn-edge-top"></div>
      <div class="z-10">What are you doing?</div>
      <div class="z-10">You shouldn't be here</div>
      <div class="z-10">Not yet...</div>
      <div class="torn-edge-bottom"></div>
    </div>

    <div class="relative w-full grow">
      {#each Array(8) as _, i (i)}
        <BlinkingEye class="!absolute" style="left: {Math.floor(Math.random() * 90) + 5}%; top: {Math.floor(Math.random() * 80) + 10}%;" />
      {/each}
    </div>
  </div>

  <div class="flex w-full relative justify-between pb-2 pt-4 px-2 border-t-0 border-black">
    <div class="z-1">
      <img src={darkFilagree} alt="Cream Filagree" class="w-22 h-auto filagree-drop-shadow" />
    </div>

    <div class="flex flex-col gap-2 items-center justify-end h-full z-1">
      <!-- <div>Contact</div> -->
      <div class="flex items-center gap-4">
        <a href="https://twitter.com/worldofdarkwest" target="_blank" rel="noopener noreferrer" class="hover:!text-tprimary-0 transition-colors duration-150">
          <i class="mdi mdi-twitter text-2xl" aria-hidden="true"></i>
          <span class="sr-only">Twitter</span>
        </a>
        <a href="https://www.instagram.com/worldofdarkwest" target="_blank" rel="noopener noreferrer" class="hover:!text-tprimary-0 transition-colors duration-150">
          <i class="mdi mdi-instagram text-2xl" aria-hidden="true"></i>
          <span class="sr-only">Instagram</span>
        </a>
        <a href="https://discord.gg/mQ4KXpJH83" target="_blank" rel="noopener noreferrer" class="hover:!text-tprimary-0 transition-colors duration-150">
          <i class="fa-brands fa-discord text-2xl" aria-hidden="true"></i>
          <span class="sr-only">Discord</span>
        </a>
        <a href="https://ko-fi.com/worldofdarkwest" target="_blank" rel="noopener noreferrer" class="hover:!text-tprimary-0 transition-colors duration-150">
          <i class="mdi mdi-coffee text-2xl" aria-hidden="true"></i>
          <span class="sr-only">Ko-fi</span>
        </a>
      </div>
    </div>

    <div class="z-1">
      <img src={darkFilagree} alt="Cream Filagree" class="w-22 h-auto -scale-x-100 filagree-drop-shadow" />
    </div>
  </div>
</div>

<style>
  .filagree-drop-shadow {
    filter: drop-shadow(0 0px 3px var(--color-tprimary-0));
  }

  .torn-edge-top {
    position: absolute;
    top: -100px;
    right: 0;
    left: 0;

    height: 100px;
    background-image: url(/src/lib/assets/page_torn_edge_black.png);
    background-repeat: repeat-x;
    background-size: 2000px auto;
    background-position: top center;

    filter: invert(8%) sepia(6%) saturate(2495%) hue-rotate(349deg) brightness(92%) contrast(81%);
    z-index: 10;
  }

  .torn-edge-bottom {
    position: absolute;
    bottom: -100px;
    right: 0;
    left: 0;

    height: 100px;
    background-image: url(/src/lib/assets/page_torn_edge_black.png);
    background-repeat: repeat-x;
    background-size: 2000px auto;
    background-position: bottom center;

    filter: invert(8%) sepia(6%) saturate(2495%) hue-rotate(349deg) brightness(92%) contrast(81%);
    transform: rotate(180deg);
    z-index: 10;
  }
</style>
