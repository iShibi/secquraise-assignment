import { type User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Array<User> | { status: number; message: string }>,
) {
	if (req.method !== 'GET') {
		return res.status(405).json({
			status: 405,
			message: 'Method not allowed',
		});
	}
	const users = await prisma.user.findMany();
	return res.status(200).json(users);
}
