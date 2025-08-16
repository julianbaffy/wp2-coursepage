<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
	
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
		max-width: 70rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: row;
		justify-content: end;
		align-items: center;
		padding: 12px;
		background-color: var(--color-bg-2) 50%;
		margin-left: 30px;
		margin-right: 30px;
	}
</style>
