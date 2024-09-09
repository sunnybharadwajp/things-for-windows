import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

// GET /api/tasks - List all tasks
export async function GET() {
	try {
		const tasks = await prisma.task.findMany();
		if (!tasks) {
			return json(
				{
					status: 'error',
					message: 'Failed to retrieve tasks'
				},
				{ status: 500 }
			);
		}
		return json({
			status: 'success',
			data: tasks
		});
	} catch (error) {
		return json(
			{
				status: 'error',
				message: 'An error occurred while fetching tasks'
			},
			{ status: 500 }
		);
	}
}

// POST /api/tasks - Create a new task
export async function POST({ request }) {
	const data = await request.json();
	try {
		const newTask = await prisma.task.create({
			data
		});
		return json(newTask);
	} catch (error) {
		console.log(error);
		return json({
			status: 400,
			body: {
				error: 'Error creating task'
			}
		});
	}
}
