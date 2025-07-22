<script lang="ts">
    import Clickable from "./clickable.svelte";

   let width = $state(0);
   let height =$state(0);

	function updateSize() {
    	width = window.innerWidth;
        height = window.innerHeight;
  	}
    
</script>
<div class="clickable-container">

</div>