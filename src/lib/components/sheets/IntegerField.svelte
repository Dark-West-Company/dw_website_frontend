<script>
  import { eventBus, events } from '$lib/eventBus';
  import debounce from 'lodash/debounce';
  export let id = '';
  export let label = '';
  export let value = null;
  export let placeholder = 'not set';

  const emitChange = debounce((val) => {
    eventBus.emit(events.SHEET_DATA_CHANGED, val);
  }, 500);

  function handleInput(e) {
    let intVal = parseInt(e.target.value, 10);
    if (isNaN(intVal)) intVal = '';
    value = intVal;
    emitChange(value);
  }
</script>

<div class="flex items-center gap-2 w-full">
  <label for={id} class="mr-2 w-20 text-right">{label}</label>
  <input {id} class="border-b px-3 py-1" type="number" bind:value {placeholder} on:input={handleInput} />
</div>
