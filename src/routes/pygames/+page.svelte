<script lang="ts">
    import GameTabs from "$lib/Components/GameTabs.svelte";
	import { onMount } from "svelte";
	import type { Course, Link } from "$lib/types/customTypes";
	
	let { data } : {data: { links: Link[], courses: Course[];}} = $props();

	let manualStartPosition = 'auto'; //set 'auto' for default behavior or any courseID to be opened when loading the page.

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

	let smallButtons = $derived(width<700 && data.courses.length>=4 || width<540 && data.courses.length>=3);
</script>

<svelte:head>
	<title>Pygames</title>
	<meta name="description" content="Showcase of students products in the website project" />
</svelte:head>

<section>
	<h1>
		Pygame Zero Projekte
	</h1>

	<h2>
		<strong>am Apostelgymnasium Köln</strong>
	</h2>
</section>

<GameTabs courses={data.courses} links={data.links} startPosition={manualStartPosition}  smallButtons={smallButtons} />

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
