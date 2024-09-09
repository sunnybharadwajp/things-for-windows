import { json } from '@sveltejs/kit';
import prisma from '$lib/prisma';

// PUT /api/tasks/:id - Update a specific task
export async function PUT({ params, request }) {
	try {
		const data = await request.json();
		const updatedTask = await prisma.task.update({
			where: { id: parseInt(params.id) },
			data: {
				title: data.title,
				done: data.done,
				createdAt: data.createdAt,
				deletedAt: data.deletedAt
			}
		});
		return json({
			status: 'success',
			data: updatedTask
		});
	} catch (error) {
		console.error('Error updating task:', error);
		return json(
			{
				status: 'error',
				message: 'Failed to update task',
				error: error instanceof Error ? error.message : String(error)
			},
			{ status: 500 }
		);
	}
}
