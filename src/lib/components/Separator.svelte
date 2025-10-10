<script>
  export let white = false;
</script>

<div class="relative flex items-center w-full h-0 border-b-4 {white ? 'border-tsecondary' : 'border-success'}">
  <div class="absolute -left-3 -top-1 w-3 h-3 {white ? 'bg-tsecondary' : 'bg-success'} rounded-full"></div>
  <div class="absolute -right-3 -top-1 w-3 h-3 {white ? 'bg-tsecondary' : 'bg-success'} rounded-full"></div>
</div>
