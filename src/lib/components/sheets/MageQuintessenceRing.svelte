<script lang="ts">
  import { onMount } from 'svelte';
  import { eventBus, events } from '$lib/eventBus';

  /*
    states:
      0: empty
      1: quintessence
      2: paradox
  */
  export let sheet: { quintessence?: number; paradox?: number } = {};

  let states = Array(20).fill(0);

  $: {
    // Fill quintessence from index 0 up
    if (typeof sheet.quintessence === 'number') {
      for (let i = 0; i < 20; i++) {
        states[i] = i < sheet.quintessence ? 1 : 0;
      }
    }
    // Fill paradox from last index down
    if (typeof sheet.paradox === 'number') {
      for (let i = 19; i >= 0; i--) {
        if (19 - i < sheet.paradox) {
          states[i] = 2;
        } else if (typeof sheet.quintessence === 'number' && i < sheet.quintessence) {
          states[i] = 1;
        } else {
          states[i] = 0;
        }
      }
    }
  }

  const colors = [
    '!bg-background-500', // empty
    '!bg-success', // quintessence
    '!bg-error', // paradox
  ];

  function setQuintessence(idx) {
    if (states[idx] === 1) {
      // Check if there are any quintessence buttons ahead (higher index)
      let hasAhead = false;
      for (let i = idx + 1; i < 20; i++) {
        if (states[i] === 1) {
          hasAhead = true;
          break;
        }
      }
      if (hasAhead) {
        // Clear all quintessence buttons ahead, keep the clicked one
        for (let i = idx + 1; i < 20; i++) {
          if (states[i] === 1) {
            states[i] = 0;
          }
        }
        states[idx] = 1;
      } else {
        // No quintessence ahead, remove the clicked one
        states[idx] = 0;
      }
    } else {
      // Otherwise, fill quintessence from start up to idx
      for (let i = 0; i < 20; i++) {
        if (i <= idx) {
          states[i] = 1; // quintessence overtakes paradox or empty
        } else if (states[i] === 1) {
          states[i] = 0; // clear quintessence past idx, leave paradox
        }
        // Do not clear paradox states past idx
      }
    }
    states = [...states];
    handleChange();
  }

  function setParadox(idx) {
    // If the clicked button is already paradox, clear it and all paradoxes past it
    if (states[idx] === 2) {
      // Check if there are any paradox buttons behind (lower index)
      let hasBehind = false;
      for (let i = idx - 1; i >= 0; i--) {
        if (states[i] === 2) {
          hasBehind = true;
          break;
        }
      }
      if (hasBehind) {
        // Clear all paradox buttons behind, keep the clicked one
        for (let i = idx - 1; i >= 0; i--) {
          if (states[i] === 2) {
            states[i] = 0;
          }
        }
        states[idx] = 2;
      } else {
        // No paradox behind, remove the clicked one
        states[idx] = 0;
      }
    } else {
      // Otherwise, fill paradox from idx to end
      for (let i = 19; i >= 0; i--) {
        if (i >= idx) {
          states[i] = 2; // paradox overtakes quintessence or empty
        } else if (states[i] === 2) {
          states[i] = 0; // clear paradox before idx, leave quintessence
        }
        // Do not clear quintessence states before idx
      }
    }
    states = [...states];
    handleChange();
  }

  // Change handler: calculate quintessence and paradox values and log them
  function handleChange() {
    // Quintessence: count of consecutive 1s from index 0
    let quintessence = 0;
    for (let i = 0; i < 20; i++) {
      if (states[i] === 1) {
        quintessence++;
      } else {
        break;
      }
    }
    // Paradox: count of consecutive 2s from index 19 backwards
    let paradox = 0;
    for (let i = 19; i >= 0; i--) {
      if (states[i] === 2) {
        paradox++;
      } else {
        break;
      }
    }
    // Update sheet data
    sheet.quintessence = quintessence;
    sheet.paradox = paradox;
    console.log({ quintessence, paradox });

    // Emit event just like TextField does
    eventBus.emit(events.SHEET_DATA_CHANGED, { quintessence, paradox });
  }

  // For accessibility: focus ring and keyboard navigation
  let focusedIdx = null;

  function handleKeyDown(idx, e) {
    if (e.key === 'Enter' || e.key === ' ') {
      if (states[idx] === 1 || states[idx] === 2) {
        states[idx] = 0;
      } else {
        states[idx] = 1;
      }
      states = [...states];
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      focusedIdx = (idx + 1) % 20;
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      focusedIdx = (idx + 19) % 20;
      e.preventDefault();
    }
  }

  onMount(() => {
    focusedIdx = 0;
  });
  // Helper functions for numbering
  function countQuintessence(idx) {
    let count = 0;
    for (let i = 0; i <= idx; i++) {
      if (states[i] === 1) count++;
    }
    return count;
  }
  function countParadox(idx) {
    let count = 0;
    for (let i = 19; i >= idx; i--) {
      if (states[i] === 2) count++;
    }
    return count;
  }
</script>

<div class="flex flex-col items-center justify-center relative border rounded-xl border-black py-3 px-3 w-64 mx-auto">
  <div class="absolute left-0 right-0 -top-3 flex justify-center items-center">
    <div class="w-fit text-center bg-background-0 text-tprimary rounded font-rampart-spurs-stamp tracking-wider px-2 text-base">Quintessence</div>
  </div>
  <div class="flex flex-col items-center justify-center w-full h-full gap-y-3">
    <div class="relative w-52 h-52 flex items-center justify-center">
      <div class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-2.5 h-2.5 rounded-full bg-black border-2 border-black pointer-events-none"></div>
      <div style="transform: rotate(-90deg); width:100%; height:100%;">
        {#each states as state, idx (idx)}
          <button
            type="button"
            class={`absolute w-6 h-6 rounded-full transition flex items-center justify-center
              ${colors[state]}
              ${focusedIdx === idx ? 'ring-2 ring-primary' : ''}
            `}
            style="left:calc(50% - 0.75rem); top:calc(50% - 0.75rem); transform: rotate({idx * 18 + 9}deg) translate(0, -85px) rotate(-{idx * 18 + 9}deg);"
            aria-label={`Quintessence ${idx + 1}: ${state === 0 ? 'empty' : state === 1 ? 'quintessence' : 'paradox'}`}
            tabindex="0"
            on:click={() => setQuintessence(idx)}
            on:contextmenu={(e) => {
              e.preventDefault();
              setParadox(idx);
            }}
            on:focus={() => (focusedIdx = idx)}
            on:keydown={(e) => handleKeyDown(idx, e)}
          >
            <span class="text-xs font-bold text-white" style="transform: rotate(90deg); display: inline-block;">
              {#if state === 1}
                {countQuintessence(idx)}
              {:else if state === 2}
                {countParadox(idx)}
              {/if}
            </span>
          </button>
        {/each}
      </div>
    </div>
  </div>
  <div class="absolute left-0 right-0 -bottom-3 flex justify-center items-center">
    <div class="w-fit text-center bg-background-0 text-tprimary rounded font-rampart-spurs-stamp tracking-wider px-2 text-base">Paradox</div>
  </div>
</div>
