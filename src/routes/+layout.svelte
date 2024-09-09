<script>
	import '../app.scss';
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="layout-wrapper">
	<Sidebar />
	<div class="page-container">
		<slot />
	</div>
</div>

<style>
	.layout-wrapper {
		display: flex;
		height: 100vh;
		overflow: hidden;
	}
</style>
