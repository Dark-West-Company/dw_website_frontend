<script lang="ts">
  import sunSpurLeftBlack from '$lib/assets/sun_spur_left_black.png';
  import sunSpurRightBlack from '$lib/assets/sun_spur_right_black.png';
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

<div class="flex w-full h-full">
  <!-- Sidebar -->
  <nav class="sticky top-0 h-full min-w-56 bg-gradient-to-bl bg-background-0/80 flex flex-col items-start px-4 py-4 gap-3 z-10">
    <div class="text-2xl font-rampart-spurs-stamp tracking-widest h-6 text-tprimary">Rules</div>
    <div class="w-full px-2">
      <Separator white />
    </div>
    {#each sidebarLinks as link (link.id)}
      <a class="text-sm font-rampart-spurs-stamp tracking-wide hover:underline focus:underline transition-colors duration-150" href={'#' + link.id}>
        {link.title}
      </a>
    {/each}
  </nav>

  <!-- Main Content -->
  <main class="h-full overflow-y-auto px-8 py-3 flex flex-col grow gap-0 items-start font-rampart-sans bg-primary/80">
    <section id="general_rules" class="w-full py-3">
      <div class="flex justify-center items-center w-full relative mb-1 gap-3 mt-6">
        <img src={sunSpurLeftBlack} alt="Sun Spur Left" class="h-12 spurs-drop-shadow" />
        <div class="text-3xl font-rampart-spurs-stamp text-center text-tprimary-0">General Rules</div>
        <img src={sunSpurRightBlack} alt="Sun Spur Right" class="h-12 spurs-drop-shadow" />
      </div>
      <p class="paragraph-text"> [Placeholder] List the general rules for the server here. </p>
    </section>

    <Separator />

    <section id="character_creation" class="w-full py-3">
      <div class="flex items-center w-full relative gap-3">
        <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider">Character Creation</h2>
        <img src={sunSpurRightBlack} alt="Sun Spur Right" class="h-12 spurs-drop-shadow" />
      </div>
      <p class="paragraph-text"> [Placeholder] Describe the rules for character creation here. </p>
    </section>

    <section id="roleplay" class="w-full py-3">
      <div class="flex items-center w-full relative gap-3">
        <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider">Roleplay</h2>
        <img src={sunSpurRightBlack} alt="Sun Spur Right" class="h-12 spurs-drop-shadow" />
      </div>
      <p class="paragraph-text"> [Placeholder] Explain the roleplay rules here. </p>
    </section>

    <section id="conduct" class="w-full py-3">
      <div class="flex items-center w-full relative gap-3">
        <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider">Conduct</h2>
        <img src={sunSpurRightBlack} alt="Sun Spur Right" class="h-12 spurs-drop-shadow" />
      </div>
      <p class="paragraph-text"> [Placeholder] Outline the conduct expectations here. </p>
    </section>

    <Separator />

    <section id="faq" class="w-full py-3">
      <div class="flex justify-center items-center w-full relative mb-1 gap-3 mt-3">
        <img src={sunSpurLeftBlack} alt="Sun Spur Left" class="h-12 spurs-drop-shadow" />
        <div class="text-3xl font-rampart-spurs-stamp text-center text-tprimary-0">FAQ</div>
        <img src={sunSpurRightBlack} alt="Sun Spur Right" class="h-12 spurs-drop-shadow" />
      </div>
      <p class="paragraph-text"> [Placeholder] Add frequently asked questions here. </p>
    </section>
  </main>
</div>

<style>
  .bg-gradient-to-tr-bl {
    background: linear-gradient(225deg, var(--color-background-0), black 80%);
  }
  .bg-gradient-to-r {
    background: linear-gradient(to right, var(--color-background-0), var(--color-info-0), var(--color-background-0));
  }

  .spurs-drop-shadow {
    filter: drop-shadow(0 0px 6px var(--color-tprimary-0)) drop-shadow(0 0px 6px var(--color-tprimary-0));
  }
</style>
