<script lang="ts">
	import { writable } from 'svelte/store';
	import { debounce } from '$lib/utils';

	import { updateCurrentTask } from '$lib/stores/taskStore';

	import type { Task } from '$lib/types/task';

	export let currentTask: Task;
	const currentTaskState = writable(currentTask);

	async function updateTaskRecord() {
		const id = $currentTaskState.id;
		const request = await fetch(`/api/tasks/${id}`, {
			method: 'PUT',
			body: JSON.stringify(currentTask)
		});
		const response = await request.json();
		updateCurrentTask(response.data);
	}

	function toggleTaskDone() {
		if ($currentTaskState.done) {
			$currentTaskState.doneWhen = new Date();
		} else {
			$currentTaskState.doneWhen = null;
		}
		updateTaskRecord();
	}

	function debouncedUpdate() {
		return debounce(updateTaskRecord, 250);
	}
</script>

<div class="task">
	<div class="task-checkbox">
		<input
			type="checkbox"
			id="task-checkbox"
			bind:checked={$currentTaskState.done}
			on:change={toggleTaskDone}
		/>
	</div>
	<div class="task-content">
		<div class="minimised">
			{#if currentTask.title}
				<span class="w-full">{$currentTaskState.title}</span>
			{:else}
				<span class="opacity-40">New To-Do</span>
			{/if}
		</div>
	</div>
</div>
