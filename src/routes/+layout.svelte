<script>
	import '../app.scss';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import PageFooter from '$lib/components/PageFooter.svelte';
	import { onMount } from 'svelte';
	import { allTasks } from '$lib/stores/taskStore';

	const getAllTasks = async () => {
		const res = await fetch('/api/tasks');
		const resData = await res.json();
		$allTasks = resData.data;
	};

	onMount(async () => {
		await getAllTasks();
	});
</script>

<div class="layout-wrapper">
	<Sidebar />
	<div class="page-container">
		<slot />
		<PageFooter />
	</div>
</div>

<style>
	.layout-wrapper {
		display: flex;
		height: 100vh;
		overflow: hidden;
	}
</style>
