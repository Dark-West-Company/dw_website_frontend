<script>
  import { eventBus, events } from '$lib/eventBus';
  export let header = '';
  export let value = 0;
  export let editable = true;

  function handleInput(e) {
    value = Number(e.target.value);
    eventBus.emit(events.SHEET_DATA_CHANGED, value);
  }
</script>

<div class="flex flex-col items-center mb-2">
  <h3 class="font-bold">{header}</h3>
  <input type="number" class="border rounded px-2 py-1 w-full mt-2" bind:value on:input={handleInput} min="0" readonly={!editable} disabled={!editable} />
</div>
