import { type User } from '@prisma/client';
import Image from 'next/future/image';
import { useEffect, useState } from 'react';

export function UserCard({ user }: UserCardProps) {
	const { name, avatar, gender, createdAt, dob } = user;
	const [age, setAge] = useState<number>();

	useEffect(() => {
		const entryDate = new Date(createdAt);
		const birthDate = new Date(dob);
		let ageAtEntry = entryDate.getFullYear() - birthDate.getFullYear();
		const month = entryDate.getMonth() - birthDate.getMonth();
		const date = entryDate.getDate() - birthDate.getDate();
		if (month < 0 || (month === 0 && date < 0)) {
			ageAtEntry--;
		}
		const yearsToAdd = Math.floor((Date.now() - entryDate.getTime()) / (1000 * 60 * 60));
		setAge(ageAtEntry + yearsToAdd);
	}, [dob, createdAt]);

	return (
		<div className='grid grid-cols-3 place-items-center space-x-4 py-3 px-2'>
			<div>
				<Image src={avatar ? avatar : '/images/avatar_placeholder.jpg'} height='150' width='150' alt='avatar' />
			</div>
			<div className='col-span-2'>
				<h1>
					<span className='font-bold'>Name:</span> {name}
				</h1>
				<p>
					<span className='font-bold'>Age:</span> {age}
				</p>
				<p>
					<span className='font-bold'>Gender:</span> {gender}
				</p>
				<p>
					<span className='font-bold'>Dob:</span> {new Date(dob).toUTCString()}
				</p>
				<p>
					<span className='font-bold'>Created:</span> {new Date(createdAt).toUTCString()}
				</p>
			</div>
		</div>
	);
}

type UserCardProps = {
	user: User;
};
