<script>
  /** @type {string} */
  export let text;
  let show = false;
</script>

<div class="relative" role="region" on:mouseenter={() => (show = true)} on:mouseleave={() => (show = false)}>
  {#if show}
    <div class="pointer-events-none absolute z-10 top-0 -translate-y-full -translate-x-full ml-4 bg-background-800 text-white text-xs whitespace-nowrap px-2 py-1 rounded">
      {text}
    </div>
  {/if}
  <slot />
</div>
