<script lang="ts">
    import GameTabs from "$lib/components/Games/GameTabs.svelte";
	import { onMount } from "svelte";
	import type { Course, GameLink } from "$lib/types/customTypes";
	
	let { data } : {data: { links: GameLink[], courses: Course[];}} = $props();

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
	<h1 class="games">
		Spieleprogrammierung
	</h1>

	<h2>
		<strong>mit Pygame Zero</strong>
	</h2>
</section>

<div class="text-column">
	Mithilfe der Python Bibliothek "Pygame Zero" wurde zunächst ein "Spaceshooter" analysiert und nachgebaut. Dabei wurden
	Grundlagen in der Programmierung mit Python erworben, unter Anderem
	<ul>
		<li>Objekte einer Klasse "Actor"</li>
		<li>globale und lokale Variablen</li>
		<li>Definition und Aufruf von Funktionen</li>
		<li>(if-)Bedingungen für Entscheidungen</li>
		<li>Listen und for-Schleifen</li>
	</ul>
	Zum Abschluss wurden individuelle Projekte in Pygame Zero umgesetzt. Das ist entweder eine Weiterentwicklung des Spaceshooters
	oder die Entwicklung eines eigenen Spiels.
</div>

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
		font-size: 80px;
		line-height: 1;
		margin-top: -0.1em;
	}

	.description{
		align-items: start;
	}

	ul {
		list-style-type: square;
		text-align: start;
		padding-left: 2em;
		margin-top: 1em;
		margin-bottom: 1em;
	}
</style>
