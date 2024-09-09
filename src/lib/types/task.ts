export interface Task {
	id: number;
	title: string | null;
	done: boolean | null;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date | null;
	doneWhen: Date | null;
}
