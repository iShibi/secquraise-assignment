import type { NextPage } from 'next';
import Head from 'next/head';
import { Form } from '../components/Form';

const CreatePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create</title>
			</Head>

			<main>
				<Form />
			</main>
		</>
	);
};

export default CreatePage;
