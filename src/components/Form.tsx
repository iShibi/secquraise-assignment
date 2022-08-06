import { type ChangeEvent, type FormEvent } from 'react';
import Image from 'next/future/image';
import { changeDob, changeGender, changeAvatar, changeName } from '../store/FormSlice';
import { useTypedDispatch, useTypedSelector } from '../store/Store';
import Router from 'next/router';

export function Form() {
	const dispatch = useTypedDispatch();
	const { name, dob, gender, avatar } = useTypedSelector(store => store.formSlice);

	const handleAvatarUpload = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (typeof file === 'undefined') return;
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onload = () => {
			if (fileReader.result) {
				dispatch(changeAvatar(fileReader.result.toString()));
			}
		};
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const body = JSON.stringify({
			name,
			dob,
			gender,
			avatar,
		});
		fetch('/api/create', {
			method: 'POST',
			body,
		});
		Router.reload();
	};

	return (
		<form className='my-10 mx-10 grid grid-cols-1 gap-4 sm:mx-20 md:mx-40 lg:mx-60' onSubmit={e => handleSubmit(e)}>
			<div>
				<label htmlFor='avatar'>
					<Image
						src={avatar ? avatar.toString() : '/images/avatar_placeholder.jpg'}
						width='150'
						height='150'
						alt='avatar_placeholder'
						className='ml-auto mr-auto block cursor-pointer rounded-full shadow-md hover:opacity-80'
					/>
				</label>
				<input
					type='file'
					name='avatar'
					id='avatar'
					className='hidden'
					accept='image/*'
					onChange={e => handleAvatarUpload(e)}
				/>
			</div>
			<div className='grid w-full grid-cols-1'>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					id='name'
					value={name}
					onChange={e => dispatch(changeName(e.target.value))}
					autoComplete='true'
					required
					className='rounded py-1 px-2 shadow-md outline-none'
				/>
			</div>
			<div className='grid w-full grid-cols-1'>
				<label htmlFor='dob'>Date of birth</label>
				<input
					type='date'
					name='dob'
					id='dob'
					required
					onChange={e => dispatch(changeDob(e.target.value))}
					className='rounded px-2 py-1 shadow-md outline-none'
				/>
			</div>
			<fieldset className='grid w-full grid-cols-1'>
				<legend>Gender</legend>
				<div className='space-x-4'>
					{['Male', 'Female', 'Others'].map(opt => {
						return (
							<span key={opt} className='space-x-1'>
								<input
									type='radio'
									name='gender'
									id={opt}
									value={opt.toLowerCase()}
									required
									onChange={e => dispatch(changeGender(e.target.value))}
								/>
								<label htmlFor={opt}>{opt}</label>
							</span>
						);
					})}
				</div>
			</fieldset>
			<input type='submit' className='cursor-pointer rounded bg-green-500 py-2 text-lg text-white shadow-md' />
		</form>
	);
}
