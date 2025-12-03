<script lang="ts">
  import flowerDividerLeft from '$lib/assets/flower_divider_left.png';
  import flowerDividerRight from '$lib/assets/flower_divider_right.png';
  import Separator from '@/components/Separator.svelte';

  // Placeholder sidebar links for rules
  const sidebarLinks = [
    { id: 'golden_rule', title: 'Golden Rule' },
    { id: 'general_rules', title: 'General Rules' },
    { id: 'rp_rules', title: 'RP Rules' },
    { id: 'perma_death', title: 'Perma/Death' },
    { id: 'criminal_rules', title: 'Criminal' },
    { id: 'group_conflict', title: 'Group Conflict' },
    { id: 'combat_rules', title: 'Combat' },
    { id: 'supernatural_rules', title: 'Supernatural' },
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
        <section id="golden_rule" class="w-full py-3">
          <div class="flex justify-center items-center w-full relative mb-1 gap-2">
            <img src={flowerDividerLeft} alt="Flower Divider Left" class="h-8 black-to-text-primary" />
            <div class="flex items-center text-3xl font-rampart-spurs-stamp text-center text-tprimary-0 mt-1">The Golden Rule</div>
            <img src={flowerDividerRight} alt="Flower Divider Right" class="h-8 black-to-text-primary" />
          </div>
          <p class="paragraph-text mb-2">
            The Roleplay you get here is what you make of it and your character. Wish to enjoy the simple life and stay out of trouble? You are free to do so. Want a high paced and
            drama-filled life? You are also free to do so. The rules here are a guide to how the server works and what behavior is acceptable. Tell the story you want to tell. We
            look forward to watching it all unfold, the good, the bad, and the dumb.
          </p>
        </section>

        <Separator class="my-2 drop-shadow-tprimary/50 drop-shadow-[0_0px_6px]" />

        <section id="general_rules" class="w-full py-3">
          <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider mb-2">General Rules</h2>
          <ol class="list-decimal list-inside space-y-2">
            <li>All characters must be 18+</li>
            <li
              >Do not DM any member of the Staff Team about issues within the server. DMs pertaining to their duties will be deleted without answer. Open a ticket if you have
              questions or concerns.
              <ul class="list-disc list-inside ml-6">
                <li>Only the Disciplinary Team sees Staff Report tickets.</li>
              </ul>
            </li>
            <li>Be respectful toward your fellow players, as well as Staff.</li>
            <li
              >Hate speech, racism, homophobia, racial slurs, bullying, harassment, sexism, etc. will not be tolerated on this server.
              <ul class="list-disc list-inside ml-6">
                <li>While we are in a Historical setting, it is also a <em>fictional</em> setting.</li>
                <li
                  >We understand that there are Splat conflicts & frictions, but at the end of the day this is a collaborative space and those using such things as an excuse to
                  bully and harass will be dealt with accordingly.</li
                >
              </ul>
            </li>
            <li>Do not reference present day terms or technology, keep in mind the time period and reference accordingly.</li>
            <li>ERP is allowed in private settings. IE behind locked doors or in brothels with consenting parties.</li>
            <li>No ERP in anything but human form. This includes partial transformations.</li>
            <li>Sexual assault, miscarriage, and nonconsensual RP are not allowed.</li>
            <li
              >No suicide or self harm.
              <ul class="list-disc list-inside ml-6">
                <li
                  >Self-harm is when someone <strong>hurts their own body on purpose</strong> usually by cutting, hitting, burning, or other methods. It’s about trying to
                  <strong>cope with emotional pain</strong>, stress, or feeling numb.</li
                >
                <li
                  >While the World of Darkness is a dark and gritty setting, we encourage players to explore a wide range of roleplay styles and emotional depth beyond just themes
                  of angst to create richer, more varied stories.</li
                >
              </ul>
            </li>
            <li
              >Value your life as if it’s the only life you have. Your character does not perceive their existence as a game, and will not know that they can respawn, let alone if
              medical treatment will actually work. Life is precious. Cherish it.</li
            >
            <li
              >When respawning without getting medical treatment from a player doctor, you must forget the last 30 mins prior to you being downed.
              <ul class="list-disc list-inside ml-6">
                <li
                  >Using context clues to sort out vague details of what happened is acceptable; but this will always be guess work. You will never remember any players, locations
                  or supernatural happenings.</li
                >
              </ul>
            </li>
            <li
              >If you choose to play a character from a background different than your own- Such as a different race, religion, or ethnicity- We encourage you to approach it with
              thoughtfulness and care. Taking time to learn about that culture can help ensure respectful and meaningful roleplay</li
            >
          </ol>
        </section>

        <Separator class="my-2 drop-shadow-tprimary/50 drop-shadow-[0_0px_6px]" />

        <section id="rp_rules" class="w-full py-3">
          <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider mb-2">RP Rules</h2>
          <ol class="list-decimal list-inside space-y-2">
            <li
              >Any character that had history in the County had to leave in 1982 and is now just returning.
              <ul class="list-disc list-inside ml-6">
                <li>If you want your character to have stayed later, discuss this in your character whitelist processes.</li>
              </ul>
            </li>
            <li
              >Flaws can be bought off and removed from your character sheet. This requires double XP of its initial points, in depth roleplay leading up to it and a ticket to be
              opened.</li
            >
            <li>Stay in character at all times. You may use /ooc to communicate in the Skybox so long as it pertains to the scene.</li>
            <li>You can join VCs while not in active RP, but when you are engaged or going to start Rping either mute and deafen or leave the call.</li>
            <li
              >If you are downed or knocked out, you are allowed to talk if it fits the injury. IE; broken leg, you can talk. Throat cut open, you will realistically not be able to
              talk.</li
            >
            <li>Do not use global chat unless you are a doctor or law enforcement responding to a call.</li>
            <li
              >If a doctor responds to your medical call, you must wait ten minutes before using the in game mechanical respawn option.
              <ul class="list-disc list-inside ml-6">
                <li>Respawning while a doctor is enroute to you will be considered a form of power gaming and you will be pulled into a ticket.</li>
              </ul>
            </li>
            <li>Do not break the common rules of RP. This includes meta gaming, powergaming (including hog tying without initiation and proper RP), or failRP.</li>
            <li
              >Keep in county and IC drama in county and IC. Public discord and OoC spaces are not places to air out drama or personal grievances.
              <ul class="list-disc list-inside ml-6">
                <li>If there is an issue you feel needs handling, open a ticket.</li>
              </ul>
            </li>
            <li>All supernaturals must stick to the rules given to them.</li>
            <li>No RDM or VDM.</li>
            <li
              >If you are going to perform an action, whether good or bad, against a player you must initiate it using RP. You can not force succeed an action on a player and must
              allow them an opportunity to react appropriately.</li
            >
            <li
              >Torture scenes must have OOC consent from both parties before starting.
              <ul class="list-disc list-inside ml-6">
                <li>This includes brief discussion of the types of torture and injuries that will be inflicted.</li>
              </ul>
            </li>
          </ol>
        </section>

        <Separator class="my-2 drop-shadow-tprimary/50 drop-shadow-[0_0px_6px]" />

        <section id="perma_death" class="w-full py-3">
          <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider mb-2">Perma Kill & Death Rules</h2>
          <div class="space-y-2 mb-2">
            <p class="paragraph-text italic"
              >Players are not permitted to Perma Kill one another. There are many terrible options for punishment in World of Darkness other than Death, and Death should always be
              the last exploration. Should you feel that a Character is deserving of Death, or that a Character has not reacted realistically to the punishments and efforts made to
              correct their actions in character, open a Storyteller Ticket so it may be addressed.</p
            >
            <p class="paragraph-text italic"
              >Character Deaths are something that we take very seriously in Darkwest. Each Perma case will be heavily scrutinized before a choice is made, and a Storyteller from
              each Splat will weigh in on what the outcome will be- Whether that is Death, Punishment, or Temporary In Character exile from the County.</p
            >
            <p class="paragraph-text italic"
              >Opening a ticket does not promise a Character death, unless the player opts for it, or they have exhausted every effort of Staff to course correct. Ultimately, we
              are here to tell stories, and a Character’s story ends when they die.</p
            >
            <p class="paragraph-text italic"
              >We encourage you to remember that while we are all here to tell stories together, the person on the other side of the character that you are interacting with is very
              real.</p
            >
          </div>
          <ol class="list-decimal list-inside space-y-2">
            <li
              >To open a ticket for a Perma Kill request, you must supply ample evidence of your concerns and be able to defend why you think it requires Staff’s involvement. You
              must have witnesses that are willing to support your claims, and they must have first hand experience in the types of issues you bring to Staff’s attention.</li
            >
            <li>Force Player Kill (FPK) Contracts require a ticket opened so Staff may see the contracts and weigh in or adjust them as needed.</li>
            <li
              >If a character dies, they remain dead. We will not allow any kind of resurrection in Darkwest, and the moment you confirm OoC that your character is dead, it is a
              sealed deal.</li
            >
            <li
              >Upon the death of your character, you must open a ticket to inform Staff that they have passed, even if no one IC is aware of the death, or your body is unable to be
              found.</li
            >
          </ol>
        </section>

        <Separator class="my-2 drop-shadow-tprimary/50 drop-shadow-[0_0px_6px]" />

        <section id="criminal_rules" class="w-full py-3">
          <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider mb-2">Criminal Rules</h2>
          <ol class="list-decimal list-inside space-y-2">
            <li>Crimes must have purpose, motive and intention, and cannot be random.</li>
            <li
              >If committing a crime against other players, make this an occurrence that adds to RP and dialogue. Robbing someone should be for story reasons and not to just gain
              money or items.
              <ul class="list-disc list-inside ml-6">
                <li>You are expected to RP out your crimes and not simply carry out mechanical acts.</li>
              </ul>
            </li>
            <li>You can only Rob or steal from the same player/POI once per day.</li>
            <li
              >Group sizes (Packs, Coteries, Covens, Gangs, Etc) are capped at 12 players max.
              <ul class="list-disc list-inside ml-6">
                <li>When engaging in combat or crimes, you are limited to a group of 4.</li>
              </ul>
            </li>
            <li
              >Leave evidence or a “calling card” for law and bounty hunters to find when committing crimes or leaving scenes pertaining to crimes.
              <ul class="list-disc list-inside ml-6">
                <li>Remember that they too are here to roleplay, not just to serve mechanic purposes.</li>
              </ul>
            </li>
            <li>Crime is not permitted 30 minutes before or after server restart.</li>
            <li>RDM against other players and NPCs is not allowed. Every conflict requires initiation. Treat NPCs as if they are players.</li>
            <li
              >If you start a conflict, you are required to remain online for at least 30 minutes following the end of a scene. IE; You just evaded the police after robbing a bank
              or player, you have to remain online for 30 mins.</li
            >
          </ol>
        </section>

        <Separator class="my-2 drop-shadow-tprimary/50 drop-shadow-[0_0px_6px]" />

        <section id="group_conflict" class="w-full py-3">
          <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider mb-2">Group Conflict</h2>
          <div class="space-y-2 mb-2">
            <p class="paragraph-text italic"
              >Conflict can be messy and unpredictable. We recognize that it comes with a lot of grey areas and in the moment it’s easy to get lost or make a mistake. If you are
              uncertain about a situation and the choices or actions that were taken within it, we encourage you to open a ticket so we can explore it with you.</p
            >
          </div>
          <ol class="list-decimal list-inside space-y-2">
            <li
              >Bystanders inserting themselves into group v group conflict is not permitted, unless the conflict washes over onto them and pulls them in.
              <ul class="list-disc list-inside ml-6">
                <li>IE; You are in a bar that belongs to a group and a drunk starts a fight. As a Bystander, you are allowed to get involved in this.</li>
                <li
                  >IE; You are in a bar that belongs to a group and another group of individuals, clearly together, enters the bar and starts intentionally causing problems. As a
                  Bystander, you are not allowed to get involved in this. You may react, comment and help patch people up or pull them out of danger once they are done, but you are
                  not permitted to start engaging in violence yourself.
                  <ul class="list-disc list-inside ml-6">
                    <li>One of the groups intentionally hurts you. You may get involved and defend yourself.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              >When attacking an opposing group’s territory (whether this is packs, covens, coteries, gang, law etc) The defending group is allowed to utilize all 12 of its members
              in defense of the territory until the immediate conflict is concluded.
              <ul class="list-disc list-inside ml-6">
                <li
                  >IE; Lawmen attempt to raid a Gang’s house. The Gang can defend with whoever is a member, and available. A conflict is had, the Lawmen retreat and the violence
                  ends. Several hours later, the Lawmen stop by again but do not start violence, the Gang cannot attack them full force because the initial conflict has ended, and
                  the Lawmen are not attacking the territory again.
                  <ul class="list-disc list-inside ml-6">
                    <li>Note, if intending to pursue the retreating Lawmen, the Gang must defer back to engagement rules and only send 4 members to chase.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <Separator class="my-2 drop-shadow-tprimary/50 drop-shadow-[0_0px_6px]" />

        <section id="combat_rules" class="w-full py-3">
          <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider mb-2">Sheet & Combat Rules</h2>
          <ol class="list-decimal list-inside space-y-2">
            <li
              >When engaging in violent combat, there will be a group vote on whether to use Sheets or Game Mechanics. Ties will be broken by a dice roll. Ties will be broken by a
              dice roll. If there is a scene that ICly you narratively cannot leave, but for an IRL need must (whether it’s IRL obligations or even just personal comfort levels)
              You may still opt out of a scene and leave, with the caveat that whatever the result of the scene is, your character will also be included in it.
              <ul class="list-disc list-inside ml-6">
                <li
                  >IE: Your group gets into a conflict and loses and gets put in Jail- Your character will also be in jail, and a Storyteller ticket will be opened to inform you of
                  what your situation looks like.</li
                >
              </ul>
            </li>
            <li
              >When using Sheets for Combat, the initiative roll is 1D10+Dex & Int. A turn is done in the following stages; Start your attack or action by using /me, Roll your
              dice, Deal or take any damage as pertinent, and Soak any damage as pertinent.
              <ul class="list-disc list-inside ml-6">
                <li>Splitting dice pools to attack multiple enemies is not permitted.</li>
                <li>Any extra turns or additional actions gained from abilities or resources will be utilized at the end of the entire group combat round.</li>
              </ul>
            </li>
            <li
              >In Sheet Combat, players may opt for the traditional Full Combat, which will go on until resources and health are fully expended, or the groups naturally decide to
              end it- Or they can opt for a quicker 3 Round Combat where the fight lasts 3 rounds. At the finish of the rounds, the groups will elect to have one of the following
              as the ending result; whichever group has the least amount of health left loses, one group can elect to surrender or retreat, or something narratively cool and/or
              distracting occurs that stops the group from fighting.</li
            >
            <li>If a group engages with all 4 of its available members, those members are not able to be replaced once they are downed.</li>
            <li
              >If a group starts with less than 4 of its available members, those empty slots are able to be filled by late arrivals until the count is at 4. If arriving mid round,
              the late arrivals must roll initiative and wait until the next round of combat to join.</li
            >
            <li
              >Players are responsible for ‘yes and'ing / no but’ing’ themselves out of a situation where they are over the max allotted combatant amount. Afford your fellow
              roleplayers grace when these moments occur. Naturally your characters will react the way that they do, but make sure it makes sense for what has happened.
              <ul class="list-disc list-inside ml-6">
                <li
                  >Examples of bowing out and reactions
                  <ul class="list-disc list-inside ml-6">
                    <li
                      >Jane Doe is a better medic than a fighter, she stays out of the fight so she can drag those that are too injured to continue away and starts patching them
                      up. It might frustrate another character that she didn’t fight, but most people can recognize the worth of having a stand by medic.</li
                    >
                    <li
                      >John Cowboy is a coward and doesn’t like getting hurt. He decides to hide from the fight and when this is realized, other characters react poorly to it. Not
                      bowing out gracefully was a choice that John Cowboy’s player decided to make as a character choice (Which is awesome RP!) It makes sense for characters to be
                      angry and upset with John Cowboy!</li
                    >
                    <li
                      >Felicity Vampire is a seasoned combatant and has a bit of an arrogant streak. She feels unthreatened by the combat and is confident that her allies can
                      handle their own without her help. She stands and watches, maybe even heckling a little bit. Naturally this is the sort of thing that draws a mixed response!</li
                    >
                  </ul>
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <Separator class="my-2 drop-shadow-tprimary/50 drop-shadow-[0_0px_6px]" />

        <section id="supernatural_rules" class="w-full py-3">
          <h2 class="text-2xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider mb-2">Supernatural Rules</h2>
          <ol class="list-decimal list-inside space-y-2">
            <li
              >Complete memory wiping is not permitted in World of Darkwest. Wiping a character’s memory will result in the details of the encounter being hazy. They will not
              remember who, exactly where, or exactly what happened. They will keep vague recollections of the Supernatural, but be unable to put any details together from the
              memories. Characters will be able to remember up to 20 minutes prior to the initial encounter.
              <ul class="list-disc list-inside ml-6">
                <li
                  >Keep in mind that Memory Wiping can significantly impact a Player’s chances and abilities to interact, and get involved in storylines. We encourage you to use
                  these types of powers for high impact narrative moments, rather than as a run of the mill routine solution every time someone comes across the Supernatural.</li
                >
              </ul>
            </li>
            <li
              >While supernatural characters are a key part of the setting, mortal characters deserve equal opportunity for meaningful and engaging roleplay. We encourage plots and
              interactions that include and value all character types.</li
            >
            <li>Read and familiarize yourself with the lore of each Splat and abide by it. Failure to do so can result in your whitelist being revoked.</li>
            <li
              >With proper roleplay, a splat transfer can be requested. A storyteller ticket must be opened and you must inform of story beats, lead up and your plans for the
              character. You will be assisted in making your new character sheet. 10 XP must be spent to transfer your splat. Attributes, Abilities and Backgrounds will transfer as
              applicable- XP will be returned to you for anything that cannot transfer.
              <ul class="list-disc list-inside ml-6">
                <li>Mortals can become Mages, Ghouls, Kindred or Garou.</li>
                <li>Mages can become Kindred.</li>
                <li>Garou and Kindred cannot splat transfer.</li>
              </ul>
            </li>
            <li
              >Splat Hubs are available to only their designated Splat.
              <ul class="list-disc list-inside ml-6">
                <li>Intentionally entering another Splat’s Hub will be a major rule break, and considered NVL and FailRP.</li>
                <li
                  >Using Splat Hubs to avoid consequences and conflict is not allowed.
                  <ul class="list-disc list-inside ml-6">
                    <li>IE; Robbing a bank in hiding in the Hub, or killing a player and hiding from the search party there</li>
                  </ul>
                </li>
                <li>Splats are not permitted to stalk, harass or attack other Splats’ Hubs.</li>
              </ul>
            </li>
            <li
              >Players can utilize smaller/minor Spirits in their roleplay so long it makes sense with their character and abilities.
              <ul class="list-disc list-inside ml-6">
                <li>More powerful spirits and Spirit Incarnae must be played by Staff to interact with if you open a ticket.</li>
              </ul>
            </li>
          </ol>

          <div class="mt-6">
            <h3 class="text-xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider mb-1">Kindred</h3>
            <ol class="list-decimal list-inside space-y-2">
              <li>While you are not human and able to take extra damage you are not invulnerable and should RP as such and value your life.</li>
              <li
                >Vampires with the ability to command people must abide by the server rules and roleplay standards (ie suicide/self harm/nvl/powergaming)
                <ul class="list-disc list-inside ml-6">
                  <li>Keep in mind that you are not controlling NPCs, but real players.</li>
                </ul>
              </li>
              <li
                >Daywalking is allowed for all Kindred, however, you will not be able to heal any injuries during the day, or use your powers during the day.
                <ul class="list-disc list-inside ml-6">
                  <li
                    >Daylight is the natural enemy of Kindred, thus it is expected for player characters to have an active fear of the sun, and express some degree of fatigue
                    within it, even while being able to daywalk.</li
                  >
                </ul>
              </li>
              <li
                >Ghouls and Blood Bonds require a Storyteller ticket to be opened before it can be engaged with in roleplay. If you wish to come in as an established Ghoul, open a
                ticket and discuss with the story tellers.</li
              >
              <li>Engaging in diablerie requires a storyteller ticket.</li>
            </ol>
          </div>

          <div class="mt-6">
            <h3 class="text-xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider mb-1">Garou</h3>
            <ol class="list-decimal list-inside space-y-2">
              <li>While you are not human and able to take extra damage, you are not immortal or invulnerable and should RP as such and value your life.</li>
              <li
                >Special forms are not protected by RDM rules. If someone kills you without initiation while you are in a shifted form, do not make a report.
                <ul class="list-disc list-inside ml-6">
                  <li>Being chased by a big werewolf is understandably scary. Expect reactions.</li>
                  <li>This is a rural and wild area, many people in the woods are likely to shoot a wolf before it has the chance to attack them.</li>
                </ul>
              </li>
              <li
                >When downed in any form other than homid (human), do not alert doctors for medical attention. In these circumstances, you may retain your memory and forgo the 30
                minute rule.</li
              >
            </ol>
          </div>

          <div class="mt-6">
            <h3 class="text-xl text-tprimary-0 font-rampart-spurs-stamp tracking-wider mb-1">Mage</h3>
            <ol class="list-decimal list-inside space-y-2">
              <li>While Mages can have a significant degree of power, you are still mortal and expected to value your life as such.</li>
              <li>Record your Paradox and your Paradox backlashes accordingly.</li>
              <li>Mages are capped at Arete 4. If you wish your character to reach Arete 5, you must retire them and have them leave the County.</li>
              <li
                >The available Traditions for your Mage are as follows; Akashic Brotherhood, Celestial Chorus, Cult of Ecstasy, Dreamspeakers, Euthanatoi, Order of Hermes, Sons of
                Ether & Verbena.</li
              >
            </ol>
          </div>
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
