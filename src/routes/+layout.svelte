<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
	import { afterNavigate } from '$app/navigation';

	afterNavigate(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
	});
	
	let { children } = $props();
</script>

<div class="app">
	<Header />

	<div class="main-container flex-grow">
		<main>
			{@render children()}
		</main>
	</div>

	<footer>
		<div>
			&copy; Julian Baldauf, 2024
		</div>
		<div>
			<a href="/impress">Impressum</a>
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100lvh;
	}

	.main-container{
		margin-top: 6em;
		display: flex;
		flex-grow: 1;
		flex-direction: column;
	}

	main {
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 12px;
		background-color: var(--color-bg-2) 50%;
		margin-left: 30px;
		margin-right: 30px;
	}
</style>
