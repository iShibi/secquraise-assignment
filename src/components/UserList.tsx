import { type User } from '@prisma/client';
import { useEffect, useState } from 'react';
import { UserCard } from './UserCard';

export function UserList() {
	const [fetchedUser, setFetchedUsers] = useState<Array<User>>([]);
	const [usersToShow, setUsersToShow] = useState<Array<User>>([]);
	const [searchName, setSearchName] = useState('');

	useEffect(() => {
		if (searchName.length === 0) return setUsersToShow(fetchedUser);
		const filteredUsers = fetchedUser.filter(u => u.name.toLowerCase() === searchName.toLowerCase());
		setUsersToShow(filteredUsers);
	}, [searchName, fetchedUser]);

	useEffect(() => {
		fetch('/api/all')
			.then(res => res.json())
			.then(data => setFetchedUsers(data));
	}, []);

	return (
		<div className='mt-10 space-y-14'>
			<div className='grid grid-cols-1 place-items-center'>
				<input
					type='text'
					name='search_bar'
					id='search_bar'
					placeholder='Search a name'
					className='w-4/5 rounded-md px-3 py-4 shadow-md outline-none sm:w-5/6 md:w-3/5'
					autoComplete='true'
					onChange={e => setSearchName(e.target.value)}
				/>
			</div>
			<ul className='grid grid-cols-1 space-y-4'>
				{usersToShow.map(u => {
					return (
						<li key={u.id} className='ml-auto mr-auto w-4/5 rounded-md bg-white shadow-md sm:w-5/6 md:w-3/5'>
							<UserCard user={u} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}
