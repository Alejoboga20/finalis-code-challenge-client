import { Link } from 'react-router-dom';

import { BaseLayout } from '../../common/layout';
import { Routes } from '../../router/router';

const NewPage = () => {
	return (
		<BaseLayout>
			<div className='max-w-md mx-auto my-10 p-2 sm:p-6 bg-white sm:shadow-lg rounded-lg'>
				<h3 className='text-2xl font-semibold text-center text-gray-800 mb-6'>Registration Form</h3>

				<form className='flex flex-col space-y-4'>
					<div>
						<label htmlFor='company-name' className='text-gray-700'>
							Company Name
						</label>
						<input
							id='company-name'
							type='text'
							className='w-full px-3 py-2 mt-1 border rounded-lg text-gray-700'
						/>
					</div>

					<div>
						<label htmlFor='fiscal-code' className='text-gray-700'>
							Fiscal Code
						</label>
						<input
							id='fiscal-code'
							type='text'
							className='w-full px-3 py-2 mt-1 border rounded-lg text-gray-700'
						/>
					</div>

					<div>
						<label htmlFor='client-number' className='text-gray-700'>
							Client Number
						</label>
						<input
							id='client-number'
							type='number'
							className='w-full px-3 py-2 mt-1 border rounded-lg text-gray-700'
						/>
					</div>

					<button type='submit' className='btn-primary w-full'>
						Submit
					</button>
					<Link className='btn-secondary w-full' to={Routes.HOME}>
						Cancel
					</Link>
				</form>
			</div>
		</BaseLayout>
	);
};

export default NewPage;
