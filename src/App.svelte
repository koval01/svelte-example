<script lang="ts">
	import Home from "./routes/Home.svelte";
	import Page from "./routes/Page.svelte";
	import NoMatch from "./elements/NoMatch.svelte";

	import { Router, Route } from "svelte-routing";

	export let url: string = "";
</script>

<svelte:head>
	{#if import.meta.env.PROD}
	<!-- html that will be added to the production -->
	<!-- <script ... /> -->
	{/if}
</svelte:head>

<Router {url}>
	<main class="select-none">
		<Route patth="*"><NoMatch /></Route>
		<Route path="/"><Home /></Route>
		<Route path="/page/:slug" let:params>
			<Page slug={params.slug} />
		</Route>
	</main>
</Router>
