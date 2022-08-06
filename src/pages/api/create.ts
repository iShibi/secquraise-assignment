import { type User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<User | { status: number; message: string }>,
) {
	if (req.method !== 'POST') {
		return res.status(405).json({
			status: 405,
			message: 'Method not allowed',
		});
	}
	const body = JSON.parse(req.body);
	const createdUser = await prisma.user.create({
		data: {
			createdAt: new Date().toISOString(),
			...body,
		},
	});
	return res.status(201).json(createdUser);
}
