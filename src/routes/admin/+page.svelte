<script lang="ts">
  import sunSpurLeftBlack from '$lib/assets/sun_spur_left_black.png';
  import sunSpurRightBlack from '$lib/assets/sun_spur_right_black.png';
</script>

<div class="flex flex-col relative w-full h-full overflow-hidden">
  <div class="torn-edge-top"></div>
  <div class="flex flex-1 w-full h-full">
    <!-- Main Content -->
    <div class="flex flex-col grow p-8 bg-primary">
      <div class="flex justify-center items-center w-full gap-3 mb-6">
        <img src={sunSpurLeftBlack} alt="Sun Spur Left" class="h-10 spurs-drop-shadow" />
        <h1 class="text-3xl font-rampart-spurs-stamp text-tprimary-0">Admin Dashboard</h1>
        <img src={sunSpurRightBlack} alt="Sun Spur Right" class="h-10 spurs-drop-shadow" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
        <a href="/admin/werewolf-gifts" class="admin-card bg-background-0/80 rounded-lg shadow-lg p-6 hover:bg-background-100 transition flex flex-col gap-2">
          <div class="text-lg font-bold font-rampart-sans text-tprimary-0">Werewolf Gifts Admin</div>
          <div class="text-sm text-tsecondary">Manage werewolf gifts</div>
        </a>
        <a href="/admin/sheets" class="admin-card bg-background-0/80 rounded-lg shadow-lg p-6 hover:bg-background-100 transition flex flex-col gap-2">
          <div class="text-lg font-bold font-rampart-sans text-tprimary-0">Sheets Admin</div>
          <div class="text-sm text-tsecondary">Manage all character sheets</div>
        </a>
      </div>
    </div>
    <!-- Statistics Panel -->
    <div class="flex flex-col p-8 bg-background-0/80 min-w-[320px] max-w-md w-1/3 !rounded-tl-2xl">
      <h2 class="text-xl font-semibold mb-4 font-rampart-sans text-tprimary-0">Statistics</h2>
      <p class="text-gray-500">Statistics and whatnot will appear here.</p>
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
  .spurs-drop-shadow {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
  }
</style>
