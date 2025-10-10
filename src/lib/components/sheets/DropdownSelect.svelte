<script>
  import { eventBus, events } from '$lib/eventBus';
  export let options = []; // [{ label: string, value: any }]
  export let value = null;
  export let field;
  export let sheet;

  function handleChange(e) {
    value = e.target.value;
    if (sheet && field) {
      sheet[field] = value;
      eventBus.emit(events.SHEET_DATA_CHANGED, sheet);
    }
  }
</script>

<select class="w-fit py-1 border-b border-tprimary-0 px-1 focus:outline-none" bind:value on:change={handleChange}>
  {#each options as opt (opt.value)}
    <option value={opt.value} class="text-sm bg-background-900 text-tprimary-0">{opt.label}</option>
  {/each}
</select>
