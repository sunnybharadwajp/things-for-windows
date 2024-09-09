<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import { Plus } from 'lucide-svelte';

	import { addToTasks, selectedTaskId, editingTaskId } from '$lib/stores/taskStore';

	const addNewEmptyTask = async () => {
		try {
			if ($page.url.pathname !== '/inbox') {
				await goto('/inbox');
			}

			const task = {
				title: ''
			};

			const response = await fetch('/api/tasks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(task)
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const newTask = await response.json();
			addToTasks(newTask);
		} catch (error) {
			console.error('Failed to add new task:', error);
			// user-facing error handling here
		}
	};
</script>

<div class="page-footer">
	<button on:click={addNewEmptyTask} class="page-footer-button"><Plus size={18} /></button>
</div>
