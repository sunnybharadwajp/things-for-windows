import { writable, derived } from 'svelte/store';
import type { Task } from '../types/task';

export const allTasks = writable<Task[]>([]);
export const selectedTaskId = writable<string | null>(null);
export const editingTaskId = writable<string | null>(null);

export function addToTasks(task: Task) {
	allTasks.update((tasks) => {
		return [...tasks, task];
	});
}

export function updateCurrentTask(task: Task) {
	allTasks.update((tasks) => {
		const index = tasks.findIndex((t) => t.id === task.id);
		tasks[index] = task;
		return tasks;
	});
}

export const inboxTasks = derived(allTasks, (allTasksValue) => {
	return allTasksValue.filter((task) => task.deletedAt === null && task.done === false);
});
