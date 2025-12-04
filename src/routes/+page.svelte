<script>
  // import background from '$lib/assets/forest_bg.png';
  // import winterBackground from '$lib/assets/Winter.png';
  // import dwLogo from '$lib/assets/dw_logo.png';
  import { onMount } from 'svelte';
  // import creamFilagree from '$lib/assets/cream_filagree.png';
  import darkFilagree from '$lib/assets/dark_filagree.png';
  import sunSpurRightBlack from '$lib/assets/sun_spur_right_black.png';
  import sunSpurLeftBlack from '$lib/assets/sun_spur_left_black.png';
  import darkPack from '$lib/assets/dark_pack.png';
  // import blackInkBackground from '$lib/assets/black_ink_background.png';
  // import pageTornEdgeBlack from '$lib/assets/page_torn_edge_black.png';
  import BlinkingEye from '@/components/BlinkingEye.svelte';

  let scrollArea = null;
  let atBottom = false;

  onMount(() => {
    scrollArea.addEventListener('scroll', () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollArea;
      atBottom = scrollTop + clientHeight >= scrollHeight - 5;
    });
  });

  // Reusable function to generate eye parameters
  function generateEyeParams(count) {
    // count should be even for pairs
    const pairs = [];
    for (let i = 0; i < count / 2; i++) {
      // Base position for the pair
      const baseLeft = Math.floor(Math.random() * 80) + 10;
      const baseTop = Math.floor(Math.random() * 70) + 15;

      // Offset for each eye in the pair
      const offset = (Math.random() * 6 + 10) * (Math.random() < 0.5 ? 1 : -1);

      // Randomly decide if this pair blinks
      const shouldBlink = Math.random() < 0.1;
      let blinkParams = {};
      if (shouldBlink) {
        blinkParams = {
          shouldBlink: true,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${8 + Math.random() * 6}s`,
        };
      } else {
        blinkParams = {
          shouldBlink: false,
        };
      }

      // Left eye
      pairs.push({
        left: `${baseLeft - offset}%`,
        top: `${baseTop - offset * 2}%`,
        ...blinkParams,
      });
      // Right eye
      pairs.push({
        left: `${baseLeft + offset}%`,
        top: `${baseTop + offset * 2}%`,
        ...blinkParams,
      });
    }
    return pairs;
  }

  const eyeParamsArea1 = generateEyeParams(20);
  const eyeParamsArea2 = generateEyeParams(10);
</script>

<!-- Main Content -->
<div class="flex flex-col w-full h-full transition-opacity duration-500">
  <div class="flex flex-col relative grow h-0 items-center justify-center">
    <div class="absolute w-full top-0 h-full">
      {#each eyeParamsArea1 as params, i (i)}
        <BlinkingEye class="!absolute" style="left: {params.left}; top: {params.top};" {...params} />
      {/each}
    </div>

    <div bind:this={scrollArea} class="flex flex-col w-full h-full overflow-y-auto gap-16 fade-edges no-scrollbar py-12 z-20">
      <div class="flex flex-col items-center py-1 justify-center w-full relative">
        <div class="torn-edge-top"></div>

        <div class="flex flex-col items-center text-center text-xl gap-4 bg-primary py-2 relative">
          <div class="absolute h-full w-1/2">
            <img src={sunSpurRightBlack} alt="Sun Spur Right Black" class="absolute right-0 translate-x-full pl-6 top-0 h-full z-0 opacity-30" />
            <img src={sunSpurLeftBlack} alt="Sun Spur Left Black" class="absolute left-0 -translate-x-full pr-6 top-0 h-full z-0 opacity-30" />
          </div>

          <div class="flex flex-col items-center text-center text-xl gap-4 w-1/2 z-10 justify-center">
            <div class="font-bold text-3xl">Welcome to DarkWest</div>

            <div>
              We are a RedM roleplay server that utilizes World of Darkness as a setting for facilitating story and roleplay. We use the setting and most of the TTRPG rules that
              can be integrated as a means to create characters, story, and borrow lore.
            </div>

            <div>
              For this server, we value rich stories, engaging with the community, and facilitating storytelling. Currently, we are allowing the average human character, Camarilla
              vampires [Vampire: the Masquerade], Garou [Werewolf: the Apocalypse], and Tradition mages [Mage: the Ascension].
            </div>

            <div>
              We use the 20th Anniversary edition for these splats and, while we’re huge fans of the setting and lore, we are not official World of Darkness material. We are huge
              fans and thankful for the ability and opportunity to create a server like this!
            </div>
          </div>
        </div>

        <div class="torn-edge-bottom"></div>
      </div>

      <div class="flex flex-col items-center py-1 justify-center w-full relative">
        <div class="torn-edge-top"></div>

        <div class="flex flex-col items-center text-center text-xl gap-4 bg-primary py-2 relative">
          <div class="absolute h-full w-1/2">
            <img src={sunSpurRightBlack} alt="Sun Spur Right Black" class="absolute right-0 translate-x-full pl-6 top-0 h-full z-0 opacity-30" />
            <img src={sunSpurLeftBlack} alt="Sun Spur Left Black" class="absolute left-0 -translate-x-full pr-6 top-0 h-full z-0 opacity-30" />
          </div>

          <div class="flex flex-col items-center text-center text-xl gap-4 w-1/2 z-10 justify-center">
            <div class="font-bold text-3xl">How to Join Us</div>

            <div>
              Join our <a href="https://discord.gg/mQ4KXpJH83" target="_blank" rel="noopener noreferrer" class="underline">Discord server</a>, read our
              <a href="/rules" class="underline">Server Rules</a>, check out our <a href="/lore" class="underline">Lore</a>, then review the character creation guidelines for your
              chosen character type. <br /> (<a
                href="https://docs.google.com/document/d/1mEjn6U8nWaVdMmVzGw3OAbeX0GJC3FsRTvtp5fuV6bI/edit?tab=t.7mnx8b1ybb90#heading=h.tj9gcq1aw6fs"
                target="_blank"
                rel="noopener noreferrer"
                class="underline">Human</a
              >,
              <a
                href="https://docs.google.com/document/d/1Mb0oMoY0JA5e0I9A5ypqf2IqIzHo9VAt3UyNn1npDRY/edit?tab=t.9x2awewtdwyp#heading=h.tj9gcq1aw6fs"
                target="_blank"
                rel="noopener noreferrer"
                class="underline">Vampire</a
              >,
              <a
                href="https://docs.google.com/document/d/1cTmeJ_Qcq1dQ2Dek1ZjTVUqwOF5RWJsZ9a2xnQ3ciZg/edit?tab=t.kv05bvjx0ks9#heading=h.wp1m8t1gq6sr"
                target="_blank"
                rel="noopener noreferrer"
                class="underline">Werewolf</a
              >, or
              <a
                href="https://docs.google.com/document/d/1oEQGSgh0KiUX2d812fp4AjhaXnoNBNXjWk1ieunKoF0/edit?tab=t.0#heading=h.wp1m8t1gq6sr"
                target="_blank"
                rel="noopener noreferrer"
                class="underline">Mage</a
              >)
            </div>

            <div>
              Login to this website, create your initial character sheet, and open a ticket with our team in Discord to discuss it. If you're interested in playing a more advanced
              character or advancing your character later, open a ticket and we'll work with you.
            </div>
          </div>
        </div>

        <div class="torn-edge-bottom"></div>
      </div>

      <div class="flex flex-col items-center py-1 justify-center w-full relative">
        <div class="torn-edge-top"></div>

        <div class="flex flex-col items-center text-center text-xl gap-4 bg-primary py-2 relative">
          <div class="absolute h-full w-1/2">
            <img src={sunSpurRightBlack} alt="Sun Spur Right Black" class="absolute right-0 translate-x-full pl-6 top-0 h-full z-0 opacity-30" />
            <img src={sunSpurLeftBlack} alt="Sun Spur Left Black" class="absolute left-0 -translate-x-full pr-6 top-0 h-full z-0 opacity-30" />
          </div>

          <div class="flex flex-col items-center text-center text-xl gap-4 w-1/2 z-10 justify-center">
            <div class="font-bold text-3xl">Conduct</div>
            <div>
              We aim to create compelling and engaging stories with one another. Not just from Storytellers to players or admins to non-admins. As such, we ask you all to ensure
              open respect and communication with one another. You are welcome and encouraged to coordinate with your fellow community members. We just ask you to ensure open
              communication, understanding, and respect for one another.
            </div>
          </div>
        </div>

        <div class="torn-edge-bottom"></div>
      </div>

      <div class="flex flex-col items-center py-1 justify-center w-full relative">
        <div class="torn-edge-top"></div>

        <div class="flex flex-col items-center text-center text-xl gap-4 bg-primary py-2 relative">
          <div class="absolute h-full w-1/2">
            <img src={darkPack} alt="Sun Spur Right Black" class="absolute right-0 translate-x-full pl-6 top-0 h-full z-0 opacity-90" />
            <img src={darkPack} alt="Sun Spur Left Black" class="absolute left-0 -translate-x-full pr-6 top-0 h-full z-0 opacity-90" />
          </div>

          <div class="flex flex-col items-center text-center text-xl gap-2 w-1/2 z-10 justify-center">
            <div class="font-bold text-2xl">Disclaimer</div>
            <div class="font-speedwriter text-sm">
              Portions of the materials are the copyrights and trademarks of Paradox Interactive AB, and are used with permission. All rights reserved. For more information please
              visit <a href="https://worldofdarkness.com" target="_blank" rel="noopener noreferrer" class="underline">worldofdarkness.com</a>.
            </div>
          </div>
        </div>

        <div class="torn-edge-bottom"></div>
      </div>
    </div>

    <div class="absolute flex items-center justify-center w-full pointer-events-none bottom-5 z-20 {atBottom ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200">
      <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="animate-pulse">
        <polyline points="4,4 24,14 44,4" fill="none" stroke="var(--color-tsecondary-0)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>

  <div class="flex w-full relative justify-between pb-2 pt-4 px-2 border-t-0 border-black">
    <div class="z-1">
      <img src={darkFilagree} alt="Cream Filagree" class="w-22 h-auto filagree-drop-shadow" />
    </div>

    <div class="flex flex-col gap-2 items-center justify-end h-full z-1">
      <!-- <div>Contact</div> -->
      <div class="flex items-center gap-4">
        <a href="https://twitter.com/worldofdarkwest" target="_blank" rel="noopener noreferrer" class="hover:!text-tprimary-0 transition-colors duration-150">
          <i class="mdi mdi-twitter text-2xl" aria-hidden="true"></i>
          <span class="sr-only">Twitter</span>
        </a>
        <a href="https://www.instagram.com/worldofdarkwest" target="_blank" rel="noopener noreferrer" class="hover:!text-tprimary-0 transition-colors duration-150">
          <i class="mdi mdi-instagram text-2xl" aria-hidden="true"></i>
          <span class="sr-only">Instagram</span>
        </a>
        <a href="https://discord.gg/mQ4KXpJH83" target="_blank" rel="noopener noreferrer" class="hover:!text-tprimary-0 transition-colors duration-150">
          <i class="fa-brands fa-discord text-2xl" aria-hidden="true"></i>
          <span class="sr-only">Discord</span>
        </a>
        <a href="https://ko-fi.com/worldofdarkwest" target="_blank" rel="noopener noreferrer" class="hover:!text-tprimary-0 transition-colors duration-150">
          <i class="mdi mdi-coffee text-2xl" aria-hidden="true"></i>
          <span class="sr-only">Ko-fi</span>
        </a>
      </div>
    </div>

    <div class="z-1">
      <img src={darkFilagree} alt="Cream Filagree" class="w-22 h-auto -scale-x-100 filagree-drop-shadow" />
    </div>
  </div>
</div>

<style>
  .filagree-drop-shadow {
    filter: drop-shadow(0 0px 3px var(--color-tprimary-0));
  }
  #conduct-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #conduct-text {
    /* Let text content determine height */
    height: auto;
  }
  .grid > div:first-child img {
    height: 100%;
    max-height: 100%;
    width: auto;
    object-fit: contain;
    display: block;
  }
  .grid {
    align-items: start;
  }

  .torn-edge-top {
    width: 100%;
    height: 67px;
    background-image: url(/src/lib/assets/page_torn_edge_black.png);
    background-repeat: repeat-x;
    background-size: 2000px auto;
    background-position: top center;

    filter: invert(8%) sepia(6%) saturate(2495%) hue-rotate(349deg) brightness(92%) contrast(81%);
    z-index: 10;
  }

  .torn-edge-bottom {
    width: 100%;
    height: 67px;
    background-image: url(/src/lib/assets/page_torn_edge_black.png);
    background-repeat: repeat-x;
    background-size: 2000px auto;
    background-position: bottom center;

    filter: invert(8%) sepia(6%) saturate(2495%) hue-rotate(349deg) brightness(92%) contrast(81%);
    transform: rotate(180deg);
    z-index: 10;
  }

  .paper-texture {
    position: absolute;
    top: -100px;
    right: 0;
    bottom: -100px;
    left: 0;
    background-image: url(/src/lib/assets/paper_texture.png);
    background-size: cover;
    background-position: center;
    z-index: 10;
  }

  .fade-edges {
    /* fade the top and bottom edge to transparent */
    position: relative;
    mask-image: linear-gradient(to bottom, transparent, black 5%, black 90%, transparent);
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
</style>
