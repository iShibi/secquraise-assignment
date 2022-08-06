import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link.js';
import { Footer } from '../components/Footer';

const HomePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>

			<div className='flex min-h-screen flex-col'>
				<main className='flex-grow'>
					<h1 className='bg-gray-800 py-6 text-center font-mono text-3xl text-white'>
						Secquraise Internship Assignment
					</h1>
					<div className='mt-32 grid grid-cols-2 place-items-center'>
						<Link href='/create'>
							<div className='flex h-28 w-40 cursor-pointer items-center justify-center rounded-md bg-green-500 shadow-md hover:bg-green-600'>
								Add User
							</div>
						</Link>
						<Link href='/all'>
							<div className='flex h-28 w-40 cursor-pointer items-center justify-center rounded-md bg-blue-500 shadow-md hover:bg-blue-600'>
								Search User
							</div>
						</Link>
					</div>
				</main>
				<footer className='bg-gray-900 pt-2 pb-3'>
					<Footer />
				</footer>
			</div>
		</>
	);
};

export default HomePage;
