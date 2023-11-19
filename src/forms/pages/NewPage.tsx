import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { BaseLayout } from '../../common/layout';
import { Routes } from '../../router/router';
import apiClient from '../../common/api';
import { Form } from '../types/form';
import { Spinner } from '../../common/components';
import ReceiptModal, { ReceiptFormData } from '../components/ReceiptModal';

type FormData = {
	companyName: string;
	fiscalCode: string;
	clientNumber: string;
	receipts: ReceiptFormData[];
};

const NewPage = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = React.useState(false);
	const [isAddingReceipt, setIsAddingReceipt] = React.useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		setValue,
	} = useForm<FormData>({
		defaultValues: { companyName: '', clientNumber: '', fiscalCode: '', receipts: [] },
	});

	const onSubmit = async ({ companyName, fiscalCode, clientNumber, receipts }: FormData) => {
		setIsLoading(true);

		try {
			await apiClient.post<Form>('/forms', {
				companyName,
				fiscalCode,
				clientNumber: +clientNumber,
				receipts,
			});

			navigate(Routes.HOME);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const onAddingReceipt = () => setIsAddingReceipt(true);
	const onCancelAddingReceipt = () => setIsAddingReceipt(false);

	const onAddReceipt = (receiptFormData: ReceiptFormData) => {
		const receipts = getValues('receipts');

		setValue('receipts', [
			...receipts,
			{
				...receiptFormData,
				taxAmount: +receiptFormData.taxAmount,
				taxPercentage: +receiptFormData.taxPercentage,
			},
		]);
	};

	const receipts = getValues('receipts');

	if (isLoading) return <Spinner />;

	return (
		<>
			<BaseLayout>
				<div className='max-w-md mx-auto my-10 p-2 sm:p-6 bg-white sm:shadow-lg rounded-lg'>
					<h3 className='text-2xl font-semibold text-center text-gray-800 mb-6'>
						Registration Form
					</h3>

					<form className='flex flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label htmlFor='company-name' className='text-gray-700'>
								Company Name
							</label>
							<input
								id='company-name'
								type='text'
								className='base-input'
								{...register('companyName', { required: true })}
							/>
							{errors.companyName && <span className='text-red-500'>This field is required</span>}
						</div>

						<div>
							<label htmlFor='fiscal-code' className='text-gray-700'>
								Fiscal Code
							</label>
							<input
								id='fiscal-code'
								type='text'
								className='base-input'
								{...register('fiscalCode', { required: true })}
							/>
							{errors.companyName && <span className='text-red-500'>This field is required</span>}
						</div>

						<div>
							<label htmlFor='client-number' className='text-gray-700'>
								Client Number
							</label>
							<input
								id='client-number'
								type='number'
								className='base-input'
								{...register('clientNumber', { required: true })}
							/>
							{errors.companyName && <span className='text-red-500'>This field is required</span>}
						</div>

						<ul>
							{receipts.map((receipt, index) => (
								<li key={index}>
									Receipt Date: {receipt.receiptDate} - Tax Amount: ${receipt.taxAmount}
								</li>
							))}
						</ul>

						<button type='button' className='btn-primary w-full mt-4' onClick={onAddingReceipt}>
							Add Receipt
						</button>

						<button type='submit' className='btn-primary w-full'>
							Submit
						</button>
						<Link className='btn-secondary w-full' to={Routes.HOME}>
							Cancel
						</Link>
					</form>
				</div>
			</BaseLayout>

			<ReceiptModal
				isOpen={isAddingReceipt}
				onClose={onCancelAddingReceipt}
				onAddReceipt={onAddReceipt}
			/>
		</>
	);
};

export default NewPage;
