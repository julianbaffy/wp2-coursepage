<script lang="ts">
    import GameTabs from "$lib/Components/Games/GameTabs.svelte";
	import { onMount } from "svelte";
	import type { Course, GameLink } from "$lib/types/customTypes";
	import Online from "$lib/images/online-gaming.svelte";
	import Download1 from "$lib/images/download1.svelte";
	import ArrowUpRight from "$lib/images/ArrowUpRight.svelte";
	
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
		Spiele Programmieren
	</h1>

	<h2>
		<strong>mit Pygame Zero</strong>
	</h2>
</section>

<section class="content">
	<div class="description">
		<p>
			In diesem Projekt wurde zunächst ein "Spaceshooter" mithilfe der Python Bibliothek "<a href="https://pygame-zero.readthedocs.io/en/stable/" class="underline">Pygame Zero</a>" nachgebaut und anschließend
			eigene Projekte umgesetzt. Dabei erlernten die Schülerinnen und Schüler Grundlagen in der Programmierung mit Python, unter Anderem:</p>
			<ul>
				<li>Objekte einer Klasse "Actor" und "Screen" als interagierende Objekte</li>
				<li>globale und lokale Variablen</li>
				<li>if-Bedingungen für Entscheidungen</li>
				<li>Definition und Aufruf von Funktionen</li>
				<li>Listen und for-Schleifen</li>
			</ul>
	</div>

	<div class="info-box content-box-dark">
		<h3 class="games">How to Play</h3>
		<div class="info-item">
			<span class="icon text-gray-200"><Online /></span>
			<div class="explanation">
				Zurzeit ist es noch nicht möglich, die Spiele direkt im Browser zu spielen.
			</div>
		</div>
		<div class="info-item">
			<span class="icon text-gray-200"><Download1 /></span>
			<div class="explanation">
				<ol>
					<li>Lade die zip-Datei herunter und entpacke den Spielordner.</li>
					<li>Installiere den <a href="https://codewith.mu/" class="underline" target="_blank" > MU Editor <ArrowUpRight /></a></li>
					<li>Klicke "load" und wähle die .py Datei im Spielordner aus.</li>
					<li>Klicke "run".</li>
				</ol>
			</div>
		</div>
	</div>
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
		font-size: 80px;
		line-height: 0.6;
		margin-top: -0.05em;
		margin-bottom: 0.4em;
	}

	h3 {
		text-align: center;
		font-size: 60px;
		color: var(--color-theme-1-light);
		line-height: 0.5;
		margin-top: -0.05em;
		margin-bottom: 0.2em;
	}

	ul {
		margin-top: 1em;
		list-style-type: square;
		align-items: start;
		padding-left: 2em;
	}

	ol {
		list-style-type: decimal;
		padding-left: 1.2em;
	}

	.content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
		gap: 2em;
		width: 100%;
		margin: 0 auto;
	}

	.description {
		flex: 1 1;
		margin-bottom: 1em;
	}

	.info-box {
		flex: 0 0 320px;
		display: flex;
		flex-direction: column;
		gap: 1.2em;
	}

	.info-item {
		display: flex;
		flex-direction: column;
		gap: 0.6em;
	}

	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 0.4em;
	}

	@media (max-width: 1060px) {
		.content {
			padding: 1em;
		}
	}

	@media (max-width: 914px) {
	.content {
		flex-direction: column;
		gap: 2.5em;
	}

	.info-box {
		width: 100%;
		flex: 1 1 auto;
		max-width: 100%;
	}
	}

	@media (max-width: 914px) and (min-width: 600px) {

	.content {
		padding: 1em;
	}
	
	.info-item {
		flex-direction: row;
		align-items: flex-start;
		gap: 1em;
	}

	.icon {
		flex: 0 0 2em;
		align-items: flex-start;
		margin-right: 0.8em;
	}

	.explanation {
		flex: 1;
	}
	}

	@media (max-width: 599px) {
	
	.info-item {
		flex-direction: column;
	}

	.info-box {
		gap: 1em;
	}

	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content {
		padding: 0em;
	}

	}
</style>
