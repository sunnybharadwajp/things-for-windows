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
