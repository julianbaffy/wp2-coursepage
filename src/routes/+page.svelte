<script lang="ts">
	import { onMount } from "svelte";

	let width = $state(0);

	function updateSize() {
    	width = window.innerWidth;
  	}

	onMount(() => {
		window.scrollTo(0, 0);
		updateSize();
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Showcase of students products in the website project" />
</svelte:head>

<section>
	<h1>
		Projekte des WP II Informatik
	</h1>

	<h2>
		<strong>am Apostelgymnasium Köln</strong>
	</h2>
</section>

<section>
	Websites mit HTML und CSS
</section>

<section>
	Spiele mit Pygame Zero
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
