<script lang="ts">
    import WebsiteTabs from "$lib/components/Websites/WebsiteTabs.svelte";
	import { onMount } from "svelte";
	import type { Course, WebsiteLink } from "$lib/types/customTypes";
	import overview from '$lib/images/projectoverview.png';
	
	let { data } : {data: { links: WebsiteLink[], courses: Course[];}} = $props();

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
	<title>Home</title>
	<meta name="description" content="Showcase of students products in the website project" />
</svelte:head>

<section>
	<h1 class="websites">
		Websites
	</h1>

	<h2>
		<strong>mit HTML und CSS</strong>
	</h2>
</section>

<div class="text-column">
	<p>
		Direkt zu Beginn des Wahlpflichtfaches Informatik in der neunten Klasse lernen die Schülerinnen und Schüler
		.html Dateien zu erstellen und zu gestalten. Dadurch lernen sie das Grundprinzip der Markup Language kennen,
		welche Grundlage für jede Website im www ist. Anschließend werden CSS sheets hinzugefügt und ein ganzes Website Projekt erstellt.
	</p>

	<img src={overview} alt="Übersicht" class="mt-6 w-full" />
</div>


<WebsiteTabs courses={data.courses} links={data.links} startPosition={manualStartPosition}  smallButtons={smallButtons} />

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
