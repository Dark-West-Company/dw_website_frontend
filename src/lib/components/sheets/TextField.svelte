<script>
  import { eventBus, events } from '$lib/eventBus';
  export let id = '';
  export let label = '';
  export let value = '';
  export let placeholder = 'not set';

  function handleInput(e) {
    value = e.target.value;
    eventBus.emit(events.SHEET_DATA_CHANGED, value);
  }
</script>

<div class="flex items-center gap-2 w-full">
  <label for={id} class="text-right text-sm text-tprimary-300 whitespace-nowrap">{label}</label>
  <input {id} type="text" bind:value {placeholder} on:input={handleInput} />
</div>
