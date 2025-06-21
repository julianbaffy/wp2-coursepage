<script lang="ts">
	import overview from '$lib/images/projectoverview.png';
</script>


<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column max-h-full">
	<h1>Die Website Projekte</h1>
	<p>
		Direkt zu Beginn des Wahlpflichtfaches Informatik in der neunten Klasse lernen die Schülerinnen und Schüler
		.html Dateien zu erstellen und zu gestalten. Dadurch lernen sie das Grundprinzip der Markup Language kennen,
		welche Grundlage für jede Website im www ist. Anschließend werden CSS sheets hinzugefügt und ein ganzes Website Projekt erstellt.
	</p>

	<img src={overview} alt="Übersicht" class="mt-6 w-full" />
</div>

