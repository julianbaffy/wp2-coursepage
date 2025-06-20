<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
	
	let { children } = $props();
</script>

<div class="app">
	<Header />

	<div class="main-container">
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
		min-height: 100dvh;
	}

	.main-container{
		margin-top: 12px;
		display: flex;
		flex-grow: 1;
		flex-direction: column;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
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
		margin-left: 30px;
		margin-right: 30px;
	}
</style>
