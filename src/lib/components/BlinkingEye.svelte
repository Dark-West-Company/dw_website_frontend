<script>
  import { onMount } from 'svelte';

  let size = 5;
  let innerGlow = 2;
  let outerGlow = 4;
  let shouldBlink = false;
  let animationDelay = '0s';
  let animationDuration = '8s';

  onMount(() => {
    // Randomize dot size (5-8px)
    size = 5 + Math.random() * 3;

    // Randomize glow sizes
    innerGlow = 2 + Math.random() * 3; // 2-5px
    outerGlow = 4 + Math.random() * 6; // 4-10px

    // 90% chance to blink (for testing)
    shouldBlink = Math.random() < 0.2;

    if (shouldBlink) {
      animationDelay = `${Math.random() * 8}s`;
      animationDuration = `${8 + Math.random() * 6}s`; // 8-14s
    }
  });
</script>

<div class="presence {$$props.class || ''}" style={$$props.style || ''}>
  <div class="presence-wrapper {shouldBlink ? 'blink' : ''}" style={shouldBlink ? `animation-delay: ${animationDelay}; animation-duration: ${animationDuration};` : ''}>
    <div
      class="presence-glow"
      style="
        width: {size}px; 
        height: {size}px;
        filter: drop-shadow(0 0 {innerGlow}px rgba(212, 167, 102, 0.8)) drop-shadow(0 0 {outerGlow}px rgba(212, 167, 102, 0.4));
      "
    ></div>
  </div>
</div>

<style>
  .presence {
    width: 50px;
    height: 50px;
    position: relative;
  }

  .presence-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .presence-glow {
    background-color: #000000;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .presence-wrapper.blink {
    animation: blink ease-in-out infinite;
  }

  @keyframes blink {
    0%,
    97%,
    100% {
      clip-path: inset(0% 0% 0% 0% round 50%);
    }
    97.5% {
      clip-path: inset(25% 0% 25% 0% round 40%);
    }
    98% {
      clip-path: inset(50% 0% 50% 0% round 30%);
    }
    98.5% {
      clip-path: inset(25% 0% 25% 0% round 40%);
    }
    99% {
      clip-path: inset(0% 0% 0% 0% round 50%);
    }
  }
</style>
