import * as React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

import { Form, FormStatus } from '../types/form';
import { BaseLayout } from '../../common/layout';
import { Routes } from '../../router/router';
import apiClient from '../../common/api';
import { Spinner } from '../../common/components';

const FormPage = () => {
	const [isLoading, setIsLoading] = React.useState(false);

	const formData = useLoaderData() as Form;
	const navigate = useNavigate();

	const onSetFormStatus = async (status: FormStatus) => {
		setIsLoading(true);
		try {
			await apiClient.patch<Form>(`/forms/${formData.id}`, { formStatus: status });
			navigate(Routes.HOME);
		} catch (error) {
			console.log({ error });
		} finally {
			setIsLoading(false);
		}
	};

	if (isLoading) return <Spinner />;

	return (
		<BaseLayout>
			<div className='max-w-2xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg'>
				<h3 className='text-2xl font-semibold text-center text-gray-800 mb-6'>Form Details</h3>

				<div className='space-y-4'>
					<div>
						<h4 className='form__label'>Company Name:</h4>
						<p className='text-gray-700'>{formData.companyName}</p>
					</div>

					<div>
						<h4 className='form__label'>Fiscal Code:</h4>
						<p className='text-gray-700'>{formData.fiscalCode}</p>
					</div>

					<div>
						<h4 className='form__label'>Valid Fiscal Code:</h4>
						<p
							className={`text-lg font-semibold ${
								formData.validFiscalCode ? 'text-green-500' : 'text-red-500'
							}`}
						>
							{formData.validFiscalCode ? 'Yes' : 'No'}
						</p>
					</div>

					<div>
						<h4 className='form__label'>Client Number:</h4>
						<p className='text-gray-700'>{formData.clientNumber}</p>
					</div>

					<div>
						<h4 className='form__label'>Form Status:</h4>
						<p
							className={`text-gray-700 ${
								formData.formStatus === 'PENDING'
									? 'text-yellow-500'
									: formData.formStatus === 'APPROVED'
									? 'text-green-500'
									: 'text-red-500'
							}`}
						>
							{formData.formStatus}
						</p>
					</div>

					{formData.receipts && formData.receipts.length > 0 && (
						<div>
							<h4 className='text-lg font-semibold text-gray-600'>Receipts:</h4>
							<ul>
								{formData.receipts.map((receipt, index) => (
									<li key={index} className='bg-gray-100 rounded-lg p-2 my-2'>
										<p>Date: {receipt.receiptDate}</p>
										<p>Tax Amount: {receipt.taxAmount}</p>
										<p>Tax Percentage: {receipt.taxPercentage}%</p>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>

				<div className='flex justify-between items-center'>
					<div>
						<Link to={Routes.HOME} className='link'>
							Go Back
						</Link>
					</div>
					<div className='flex justify-end mt-6 gap-4'>
						<button
							type='button'
							className='btn-primary'
							onClick={() => onSetFormStatus('APPROVED')}
							disabled={isLoading || formData.formStatus === 'APPROVED'}
						>
							Approve Form
						</button>
						<button
							type='button'
							className='btn-secondary'
							onClick={() => onSetFormStatus('REJECTED')}
							disabled={isLoading || formData.formStatus === 'REJECTED'}
						>
							Reject Form
						</button>
					</div>
				</div>
			</div>
		</BaseLayout>
	);
};

export default FormPage;
