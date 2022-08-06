import type { NextPage } from 'next';
import Head from 'next/head';
import { UserList } from '../components/UserList';

const AllPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>All</title>
			</Head>

			<main>
				<UserList />
			</main>
		</>
	);
};

export default AllPage;
