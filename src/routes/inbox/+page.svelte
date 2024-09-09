<script>
	import { inboxTasks, allTasks, selectedTaskId, editingTaskId } from '$lib/stores/taskStore';
	import { setContext } from 'svelte';
	import Task from '$lib/components/Task/Task.svelte';
	setContext('currentTasksList', inboxTasks);
</script>

<div class="page-heading">
	<span class="page-heading-icon">
		<img src="/sidebar-icons/inbox.svg" alt="Inbox" />
	</span>
	<span class="page-heading-text"> Inbox </span>
</div>

<div class="page-content">
	{#each $allTasks as currentTask}
		<Task {currentTask} />
	{/each}
</div>

<style>
</style>
