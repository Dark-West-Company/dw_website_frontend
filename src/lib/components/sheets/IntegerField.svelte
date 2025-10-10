<script>
  import { eventBus, events } from '$lib/eventBus';
  export let id = '';
  export let label = '';
  export let value = null;
  export let placeholder = 'not set';
  export let disabled = false;

  function handleInput(e) {
    let intVal = parseInt(e.target.value, 10);
    if (isNaN(intVal)) intVal = '';
    value = intVal;
    eventBus.emit(events.SHEET_DATA_CHANGED, intVal);
  }
</script>

<div class="flex items-center gap-2 w-full">
  {#if label}
    <label for={id} class="text-right text-sm text-tsecondary">{label}</label>
  {/if}
  <input {id} type="number" bind:value {placeholder} on:input={handleInput} {disabled} />
</div>
