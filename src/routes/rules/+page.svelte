<script lang="ts">
  import flowerDividerLeft from '$lib/assets/flower_divider_left.png';
  import flowerDividerRight from '$lib/assets/flower_divider_right.png';
  import Separator from '@/components/Separator.svelte';

  // Placeholder sidebar links for rules
  const sidebarLinks = [
    { id: 'general_rules', title: 'General Rules' },
    { id: 'character_creation', title: 'Character Creation' },
    { id: 'roleplay', title: 'Roleplay' },
    { id: 'conduct', title: 'Conduct' },
    { id: 'faq', title: 'FAQ' },
  ];
</script>

<div class="flex flex-col relative w-full h-full overflow-hidden">
  <div class="torn-edge-top"></div>
  <div class="flex flex-grow relative overflow-hidden">
    <!-- Sidebar -->
    <nav class="absolute h-full left-0 top-1/2 !rounded-tr-2xl -translate-y-1/2 w-56 bg-background-0/80 flex flex-col items-start px-4 py-4 gap-3 z-20 rounded-lg">
      <div class="text-2xl font-rampart-spurs-stamp tracking-widest h-6 text-tprimary">Rules</div>
      <div class="w-full px-2 my-1">
        <Separator white />
      </div>
      {#each sidebarLinks as link (link.id)}
        <a class="text-sm font-rampart-spurs-stamp tracking-wide hover:underline focus:underline transition-colors duration-150" href={'#' + link.id}>
          {link.title}
        </a>
      {/each}
    </nav>

    <!-- Main Content -->
    <main class="w-full h-full flex justify-center relative overflow-y-auto bg-primary">
      <div class="flex flex-col items-start font-rampart-sans w-3/5">
        <section id="general_rules" class="w-full py-3">
          <div class="flex justify-center items-center w-full relative mb-1 gap-2">
            <img src={flowerDividerLeft} alt="Flower Divider Left" class="h-8 black-to-text-primary" />
            <div class="flex items-center text-3xl font-rampart-spurs-stamp text-center text-tprimary-0 mt-1">General Rules</div>
            <img src={flowerDividerRight} alt="Flower Divider Right" class="h-8 black-to-text-primary" />
          </div>
          <p class="paragraph-text"> [Placeholder] List the general rules for the server here. </p>
        </section>

        <Separator class="my-2 drop-shadow-tprimary/50 drop-shadow-[0_0px_6px]" />

        <section id="character_creation" class="w-full py-3">
          <div class="flex items-center w-full relative gap-3">
            <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider">Character Creation</h2>
          </div>
          <p class="paragraph-text"> [Placeholder] Describe the rules for character creation here. </p>
        </section>

        <section id="roleplay" class="w-full py-3">
          <div class="flex items-center w-full relative gap-3">
            <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider">Roleplay</h2>
          </div>
          <p class="paragraph-text"> [Placeholder] Explain the roleplay rules here. </p>
        </section>

        <section id="conduct" class="w-full py-3">
          <div class="flex items-center w-full relative gap-3">
            <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider">Conduct</h2>
          </div>
          <p class="paragraph-text"> [Placeholder] Outline the conduct expectations here. </p>
        </section>

        <Separator class="my-2 drop-shadow-tprimary/50 drop-shadow-[0_0px_6px]" />

        <section id="faq" class="w-full py-3">
          <div class="flex justify-center items-center w-full relative mb-1 gap-3 mt-3">
            <img src={flowerDividerLeft} alt="Flower Divider Left" class="h-8 black-to-text-primary" />
            <div class="text-3xl font-rampart-spurs-stamp text-center text-tprimary-0">FAQ</div>
            <img src={flowerDividerRight} alt="Flower Divider Right" class="h-8 black-to-text-primary" />
          </div>
          <p class="paragraph-text"> [Placeholder] Add frequently asked questions here. </p>
        </section>
      </div>
    </main>
    <div class="absolute right-2 top-0 pr-10 text-tsecondary/1 max-w-32">
      Blane made me add this annoying extra space on the right so things would be centered and I'm angry about it.
    </div>
  </div>
</div>

<style>
  .torn-edge-top {
    height: 67px;
    min-height: 67px;
    background-image: url(/src/lib/assets/page_torn_edge_black.png);
    background-repeat: repeat-x;
    background-size: 2000px auto;
    background-position: top center;
    filter: invert(8%) sepia(6%) saturate(2495%) hue-rotate(349deg) brightness(92%) contrast(81%);
    z-index: 10;
  }

  .black-to-text-primary {
    filter: invert(72%) sepia(22%) saturate(259%) hue-rotate(158deg) brightness(92%) contrast(99%);
  }
</style>
