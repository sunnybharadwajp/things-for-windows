import { writable, derived } from 'svelte/store';

export const allTasks = writable([]);
export const selectedTaskId = writable<string | null>(null);
export const editingTaskId = writable<string | null>(null);
