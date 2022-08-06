export function Footer() {
	return (
		<>
			<div className='mb-2 flex justify-center'>
				<a href='https://github.com/iShibi/secquraise-assignment' target='_blank' rel='noopener noreferrer'>
					<svg viewBox='0 0 16 16' className='my-2 mr-4 w-8 hover:cursor-pointer' fill='white' aria-hidden='true'>
						<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
					</svg>
				</a>
				<a href='https://twitter.com/iShiibi' target='_blank' rel='noopener noreferrer'>
					<svg viewBox='0 0 24 24' className='my-2 ml-4 w-8 hover:cursor-pointer' fill='white' aria-hidden='true'>
						<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
					</svg>
				</a>
			</div>
			<div className='flex justify-center'>
				<p className='font-mono text-slate-200'>
					Made with 💖 by{' '}
					<a
						href='https://github.com/iShibi'
						target='_blank'
						rel='noopener noreferrer'
						className='decoration-slice underline decoration-pink-600 decoration-2'
					>
						Shubham Parihar
					</a>
				</p>
			</div>
		</>
	);
}