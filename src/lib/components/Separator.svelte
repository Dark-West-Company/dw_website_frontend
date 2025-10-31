<script>
  export let white = false;
  export let text = "";
</script>

<div class="relative flex items-center w-full">
  <div class="absolute -left-3 -top-1 w-3 h-3 {white ? 'bg-tsecondary' : 'bg-success'} rounded-full"></div>
  <div class="absolute -right-3 -top-1 w-3 h-3 {white ? 'bg-tsecondary' : 'bg-success'} rounded-full"></div>
  {#if text}
    <div class="flex items-center w-full">
      <div class="flex-grow border-b-4 {white ? 'border-tsecondary' : 'border-success'}"></div>
      <h2 class="mx-4 text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider bg-background-0 px-4 z-10 whitespace-nowrap">{text}</h2>
      <div class="flex-grow border-b-4 {white ? 'border-tsecondary' : 'border-success'}"></div>
    </div>
  {:else}
    <div class="w-full border-b-4 {white ? 'border-tsecondary' : 'border-success'}"></div>
  {/if}
</div>
