import { Link } from 'react-router-dom';

import { Form } from '../types/form';
import { Routes } from '../../router/router';

interface FormCardProps {
	form: Form;
}

export const FormCard = ({ form }: FormCardProps) => {
	return (
		<Link
			className='bg-white shadow-lg rounded-lg overflow-hidden my-4 cursor-pointer hover:shadow-md hover:bg-blue-100 transition duration-300 ease-in-out'
			to={`${Routes.FORM}/${form.id}`}
		>
			<div className='px-6 py-4'>
				<h3 className='font-bold text-xl mb-2'>{form.companyName}</h3>
				<p
					className={`text-base ${
						form.formStatus === 'PENDING'
							? 'text-yellow-500'
							: form.formStatus === 'APPROVED'
							? 'text-green-500'
							: 'text-red-500'
					}`}
				>
					{form.formStatus}
				</p>
				<p className='text-gray-700 text-sm'>Fiscal Code: {form.fiscalCode}</p>
				<p className='text-gray-700 text-sm'>Client Number: {form.clientNumber}</p>
				<p
					className={`text-sm font-semibold ${
						form.validFiscalCode ? 'text-green-500' : 'text-red-500'
					}`}
				>
					{form.validFiscalCode ? 'Valid Fiscal Code' : 'Invalid Fiscal Code'}
				</p>
			</div>
		</Link>
	);
};
