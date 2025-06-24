<script lang="ts">
    import CourseTabs from "$lib/Components/CourseTabs.svelte";

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

<CourseTabs courses={data.courses} links={data.links} startPosition="2" />

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
