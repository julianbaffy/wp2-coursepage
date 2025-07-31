<script lang="ts">
    import Clickable from "./clickable.svelte";

   let width = $state(0);
   let height =$state(0);

	function updateSize() {
    	width = window.innerWidth;
        height = window.innerHeight;
  	}

</script>
<div class="clickable-container w-full">
    <Clickable y={400} width={width} velocity={80} random={20} />
</div>