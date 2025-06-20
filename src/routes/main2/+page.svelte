<script lang="ts">
    import LinkGrid from "$lib/Components/LinkGrid.svelte";
	import { Tabs } from '@skeletonlabs/skeleton-svelte';

	let { data } : {data: {
		links: {
			courseID: string;
			teacher: string;
			title: string;
			url: string;
			description: string;
		}[],
		courses: {
			courseID: string;
			teacher: string;
		}[];}
	} = $props();
	
  	let group = $state('2');
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
	{#each data.courses as course}
		<Tabs.Control value="{course.courseID}">IF{course.courseID} {course.teacher}</Tabs.Control>
	{/each}
  {/snippet}
  {#snippet content()}
  	{#each data.courses as course}
    	<Tabs.Panel value="{course.courseID}"><LinkGrid courseID="{course.courseID}" links={data.links} /></Tabs.Panel>
	{/each}
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
