<script lang="ts">
    import LinkGrid from "$lib/Components/LinkGrid.svelte";
	import { Tabs } from '@skeletonlabs/skeleton-svelte';

  let group = $state('1');
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Showcase of students products in the website project" />
</svelte:head>

<section>
	<h1>
		Website Projekte des WP II Informatik
	</h1>

	<h2>
		<strong>am Apostelgymnasium Köln</strong>
	</h2>
</section>

<Tabs value={group} onValueChange={(e) => (group = e.value)} fluid>
  {#snippet list()}
    <Tabs.Control value="1">&lt; IF1 BEH &#47; &gt;</Tabs.Control>
    <Tabs.Control value="2">IF2 BAF</Tabs.Control>
  {/snippet}
  {#snippet content()}
    <Tabs.Panel value="1"><LinkGrid courseID="1" /></Tabs.Panel>
    <Tabs.Panel value="2"><LinkGrid courseID="2" /></Tabs.Panel>
  {/snippet}
</Tabs>



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
