<script lang="ts">
  import sunSpurLeftBlack from '$lib/assets/sun_spur_left_black.png';
  import sunSpurRightBlack from '$lib/assets/sun_spur_right_black.png';
  import Separator from '@/components/Separator.svelte';

  // No loreSections array needed; all content is inline below.
  const sidebarLinks = [
    { id: 'world_lore', title: 'World Lore' },
    { id: 'kindred', title: 'Kindred' },
    { id: 'garou', title: 'Garou' },
    { id: 'mages', title: 'Mages' },
    { id: 'haze', title: 'The Haze' },
  ];
</script>

<div class="flex flex-col relative w-full h-full overflow-hidden">
  <div class="torn-edge-top"></div>
  <!-- <div class="mt-20"></div> -->

  <div class="flex relative overflow-hidden">
    <!-- Sidebar -->
    <nav
      class="absolute h-full left-0 top-1/2 !rounded-tr-2xl -translate-y-1/2 w-56 bg-gradient-to-bl bg-background-0/80 flex flex-col items-start px-4 py-4 gap-3 z-20 rounded-lg shadow-lg"
    >
      <div class="text-2xl font-rampart-spurs-stamp tracking-widest h-6 text-tprimary">Lore</div>
      <div class="w-full px-2">
        <Separator />
      </div>
      {#each sidebarLinks as link (link.id)}
        <a class="text-sm font-rampart-spurs-stamp tracking-wide hover:underline focus:underline transition-colors duration-150" href={'#' + link.id}>
          {link.title}
        </a>
      {/each}
    </nav>

    <!-- Main Content -->
    <main class="flex flex-col items-start px-64 h-full relative overflow-y-auto font-rampart-sans bg-primary">
      <section id="world_lore" class="w-full py-3">
        <div class="flex justify-center items-center w-full relative mb-1 gap-3">
          <img src={sunSpurLeftBlack} alt="Sun Spur Left" class="h-12 spurs-drop-shadow" />
          <div class="text-3xl font-rampart-spurs-stamp text-center text-tprimary-0">World Lore</div>
          <img src={sunSpurRightBlack} alt="Sun Spur Right" class="h-12 spurs-drop-shadow" />
        </div>
        <p class="paragraph-text">
          During the 17th century, Kindred began making their way to the New World and violence would mark their path. The Sabbat, in particular, found their power and strength as
          the first Kindred Faction to make their mark, although the Camarilla would not be too far behind their efforts. As the Camarilla established their strongholds, the Sabbat
          would tear them down with voracity in order to emerge as the apex predators of the period.
        </p>
        <p class="paragraph-text">
          Meanwhile, the Garou, in particular the Galestalkers and Ghost Council, would maintain their strength until the full force of colonisation began wiping out their people.
          A fierce and terrible Bane Spirit known as Storm Eater would break free from its holdings due to this weakening, and in its wake, the Wyrm would run rampant in its
          corruption. Soon, the Storm Eater would fuse with a Weaver spirit, making it even more powerful than before. Simultaneously, European Garou would arrive to settle in the
          U.S. and the Second War of Rage began as they pushed their presence and demands onto the Garou already there.
        </p>
        <p class="paragraph-text">
          Concurrently, Mages were experiencing troubles of their own. The Order of Reason had become aware of a Horizon Realm known as Jebel Qaf and would rise to attempt to take
          it over. Unfortunately, in this process, the entire Realm was lost due to the warring Magi. Still, the Order of Reason found glimmers of progress as their technology
          began to grow, and belief in science over magic started to firmly take root in the general mortal populace.
        </p>
        <p class="paragraph-text">
          As time moves on, the Sabbat who had previously held strongly against the Camarilla began experiencing civil war amongst their numbers. Pressing this opportunity, the
          Camarilla strengthened their strong holds and began to move westward within the United States.
        </p>
        <p class="paragraph-text">
          For the Garou, the Storm Eater and its terrible threat would become apparent. While battling against the Fera in a terrible war within the United States on one front,
          they began to also work towards containing the Storm Eater. This combination of violence, bloodshed and warfare would continue until 1889.
        </p>
        <p class="paragraph-text">
          At this time, the Mages were experiencing a strange event in the shift of factional alignments. The Order of Reason would reinvent itself as the Technocratic Union while
          the faction intertwined with the politics of Queen Victoria. There, they would expand in their power and began making large scale decisions; One of which removed Ether
          from scientific consensus. This would push the Electrodyne Engineers to begin leaving the Union and join the Traditions.
        </p>
      </section>

      <Separator />

      <div class="flex justify-center items-center w-full relative gap-3 mt-5">
        <img src={sunSpurLeftBlack} alt="Sun Spur Left" class="h-12 spurs-drop-shadow" />
        <div class="text-3xl font-rampart-spurs-stamp text-center text-tprimary-0">In the County</div>
        <img src={sunSpurRightBlack} alt="Sun Spur Right" class="h-12 spurs-drop-shadow" />
      </div>

      <section id="kindred" class="w-full py-3">
        <div class="flex items-center w-full relative gap-3">
          <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider">Kindred</h2>
          <img src={sunSpurRightBlack} alt="Sun Spur Right" class="h-12 spurs-drop-shadow" />
        </div>
        <p class="paragraph-text">
          In America, the Camarilla had experienced large pushback due to the Sabbat, but as the Sabbat were occupied with their civil war, the Camarilla found the opportunity to
          begin expanding its empire. For a time, the Camarilla was able to begin making its way to the county and start establishing itself. The holdings and influence were not at
          full force until they encountered a strange situation…
        </p>
        <p class="paragraph-text">
          The city of Saint Denis had been a perfect opportunity for the Kindred. It was full of people, boundless resources, and provided many types of shelter for the Kindred.
          However, they found themselves struggling with the state of the humans that occupied the area. Violence had increased and illness ran rampant. Some would mark strange
          disturbances in magic, but nothing that Kindred had seen before. Slowly but surely, the Kindred were starved out as the predators outnumbered healthy prey.
        </p>
      </section>

      <section id="garou" class="w-full py-3">
        <div class="flex items-center w-full relative gap-3">
          <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider">Garou</h2>
          <img src={sunSpurRightBlack} alt="Sun Spur Right" class="h-12 spurs-drop-shadow" />
        </div>
        <p class="paragraph-text">
          Violence, rage and bloodshed ravaged the county as the Second War of Rage was in full force. The Garou would go on to murder local Fera, as well as any opposition to the
          Garou’s cause. Even those who did not want to participate in the war would find themselves forced into combat despite their best efforts. With such a staunch “Us vs Them”
          mentality, combined with the righteous desire for being Gaia’s “true warriors,” the Garou would not hesitate in carving their name in the county with bloody brutality.
        </p>
        <p class="paragraph-text">
          In the midst of their tides of war, they recognized the rise of the Storm Eater and only after the sacrifice of the Croatan Tribe, the Bane Spirit was contained. However,
          another storm was brewing in its place, albeit on a smaller scale. The Garou of the county would soon recognize the sheer strength of a spirit that became known as The
          Haze. As they saw The Haze grow in strength, they couldn’t help but notice the sheer amount of carnage they had left their footsteps throughout the warring, and in a
          mirror of the Croatan Tribe’s sacrifice, the Garou who stayed to contain the spirit sacrificed themselves to ensure The Haze would not escape the county.
        </p>
      </section>

      <section id="mages" class="w-full py-3">
        <div class="flex items-center w-full relative gap-3">
          <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider">Mages</h2>
          <img src={sunSpurRightBlack} alt="Sun Spur Right" class="h-12 spurs-drop-shadow" />
        </div>
        <p class="paragraph-text">
          The Doissetep, a stronghold and one of the greatest chantries in Tradition history, was a testament to Magi knowledge, skill, and experience. The Mages of the county
          would rise to erect their own Chantry with the goal to grow it to the same strength as the legendary Doissetep itself. They worked hard in their construction; dubbing
          their newly founded Chantry as Ad Astra but the cacophony of warfare and violence was evident. It became very clear to the Magi that the Shifters of the county were
          engaging in a violent and messy war. In turn, in effort to protect themselves from the crossfire, they pulled back and sequestered themselves within the walls of the
          chantry.
        </p>
        <p class="paragraph-text">
          Soon, Ad Astra’s walls would become more akin to a prison than a haven as an Umbral Storm ravaged the Mages. Those who tried to fight against it would find themselves
          being ravaged and killed by Paradox or Umbral Spirits; but perhaps even worse, those who tried to travel to the Umbra in search of answers to what might be happening were
          thrown about and snatched away to be presumed dead, their absences only bringing in more questions. A handful of Mages would try escaping the walls, yet any communication
          with them was lost. Rumors state that some of those Mages were able to weather the proverbial storm but those whisperings have been adamantly denied and stated to be
          false.
        </p>
      </section>

      <Separator />

      <section id="haze" class="w-full py-3">
        <div class="flex justify-center items-center w-full relative mb-1 gap-3 mt-3">
          <img src={sunSpurLeftBlack} alt="Sun Spur Left" class="h-12 spurs-drop-shadow" />
          <div class="text-3xl font-rampart-spurs-stamp text-center text-tprimary-0">The Haze</div>
          <img src={sunSpurRightBlack} alt="Sun Spur Right" class="h-12 spurs-drop-shadow" />
        </div>
        <p class="paragraph-text">
          The Haze, the Eternal Fog, the Restless Storm… Whatever you may call it, is a force and fusion of the Wyrm (Shenti of Entropy), the Weaver (Shenti of Stasis), and the
          Wyld (Shenti of Dynamism) spirits that grew in the scars of the Storm Eater. The Second War of Rage and all of the chaos seeped into it has only strengthened its power.
        </p>
        <p class="paragraph-text">
          Over time the Spirit would grow in power and nothing was able to stop it; even the Supernaturals were unable to defend themselves against its wrath. The Kindred starved
          out and forced to seek shelter elsewhere, the Garou perished before its might, and the Mages were dislodged, thrown and buffoned about to be lost. For a considerable
          passage of time, no Supernatural was able to pierce the walls of The Haze. The unaware humans, who did not see the storm in its full capacity, would mark this as one of
          the worst times to be within the county. Violence, illness, poverty and discontent ran rampant in the area.
        </p>
        <p class="paragraph-text">
          The Technocratic Union worked to formulate a plan to tackle the issues arising, but they had lacked the bodies to go into the storm itself. Eventually, utilizing the
          contacts at their disposal, they were able to put together a crew who were willing to do what it took to stabilize The Haze and its terrible storm.
        </p>
        <p class="paragraph-text">
          A pack of Garou would volunteer their assistance, as their knowledge of Spirits and the land would be necessary. One singular Mage, a survivor of Ad Astra, would take the
          chance to assist as their Magick would provide support and their knowledge of Umbral travel would be advantageous. A Kindred would lend a hand as their own contacts and
          resources could provide the needed materials for the questing group. Finally, a singular, mortal human, who was incredibly knowledgeable on the realm of the supernatural,
          would lend their assistance in the form of military and survival knowledge, and assure the others involved would not kill one another in the process due to their own
          personal faction conflicts.
        </p>
        <p class="paragraph-text">
          This group would form what is known as the Triatic Armistice, and would work for many years to pierce the ominous, roiling walls of The Haze. In the process, they
          suffered and struggled greatly, but in 1903 they finally managed to employ stabilization to the region; buying the county the first breath of fresh air that it had gotten
          in a long, long time.
        </p>
        <p class="paragraph-text">
          Now, we find ourselves in 1904. The Haze still manifests its power, and will continue to do so as time goes on. With the walls pierced, the various Supernaturals can
          enter the county once again. While The Haze’s influence still rises and rolls in its waves, it isn't nearly as rampant as it once was before. In these periods of surging
          power, the Supernatural can still feel the effect that it imposes on them, however, the suffering is much more palpable than the death it used to promise.
        </p>
      </section>
    </main>

    <div class="absolute right-2 top-0 pr-10 text-tsecondary/1 max-w-32">
      Blane made me add this annoying extra space on the right so things would be centered and I'm angry about it.
    </div>
  </div>
</div>

<style>
  .torn-edge-top {
    /* position: absolute;
    top: -100px;
    right: 0;
    left: 0; */

    height: 100px;
    min-height: 100px;
    background-image: url(/src/lib/assets/page_torn_edge_black.png);
    background-repeat: repeat-x;
    background-size: 2000px auto;
    background-position: top center;

    filter: invert(8%) sepia(6%) saturate(2495%) hue-rotate(349deg) brightness(92%) contrast(81%);
    z-index: 10;
  }
</style>
