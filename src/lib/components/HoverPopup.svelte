<script>
  /** @type {string} */
  export let text;
  export let position = 'top';
  export let disabled = false;
  let show = false;
</script>

<div class="relative" role="region" on:mouseenter={() => (show = !disabled)} on:mouseleave={() => (show = false)}>
  {#if show}
    {#if position === 'top'}
      <div
        class="max-w-7xl whitespace-pre pointer-events-none absolute z-10 -top-1 -translate-y-full -translate-x-full ml-4 bg-black text-tprimary-0 border-2 border-info-0 shadow shadow-black text-xs px-2 py-1 rounded"
      >
        {@html text}
      </div>
    {:else if position === 'bottom'}
      <div
        class="max-w-7xl whitespace-pre pointer-events-none absolute z-10 -bottom-1 translate-y-full -translate-x-full ml-4 bg-black text-tprimary-0 border-2 border-info-0 shadow shadow-black text-xs px-2 py-1 rounded"
      >
        {@html text}
      </div>
    {/if}
  {/if}
  <slot />
</div>
