import { useForm } from 'react-hook-form';

import { Receipt } from '../types/form';

interface ReceiptModalProps {
	isOpen: boolean;
	onClose: () => void;
	onAddReceipt: (formData: ReceiptFormData) => void;
}

export type ReceiptFormData = Pick<Receipt, 'receiptDate' | 'taxAmount' | 'taxPercentage'>;

const ReceiptModal = ({ isOpen, onClose, onAddReceipt }: ReceiptModalProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		clearErrors,
		reset,
	} = useForm<ReceiptFormData>();

	const onSubmit = (data: ReceiptFormData) => {
		onAddReceipt(data);
		handleOnClose();
	};

	const handleOnClose = () => {
		clearErrors();
		reset();
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className='modal' id='my-modal'>
			<div className='modal__content'>
				<div className='mt-3'>
					<h4 className='text-xl font-semibold text-gray-800 mb-4 text-center'>Add Receipt</h4>
					<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>
						<div>
							<label htmlFor='receipt-date' className='text-gray-700'>
								Receipt Date
							</label>
							<input
								id='receipt-date'
								type='date'
								className='base-input'
								{...register('receiptDate', { required: 'Receipt Date is required' })}
							/>
							{errors.receiptDate && (
								<span className='text-red-500'>{errors.receiptDate.message}</span>
							)}
						</div>

						<div>
							<label htmlFor='tax-amount' className='text-gray-700'>
								Tax Amount
							</label>
							<input
								id='tax-amount'
								type='number'
								step={0.01}
								className='base-input'
								{...register('taxAmount', {
									required: 'Tax Amount is required',
									min: 0.01,
								})}
							/>
							{errors.taxAmount && <span className='text-red-500'>{errors.taxAmount.message}</span>}
						</div>

						<div>
							<label htmlFor='tax-percentage' className='text-gray-700'>
								Tax Percentage
							</label>
							<input
								id='tax-percentage'
								type='number'
								step={0.01}
								className='base-input'
								{...register('taxPercentage', {
									required: 'Tax Percentage is required',
									min: 0,
									validate: (value) => {
										if (value > 100) {
											return false;
										}
									},
								})}
							/>
							{errors.taxPercentage && (
								<span className='text-red-500'>
									Tax Percentage must be a value between 0 and 100
								</span>
							)}
						</div>

						<button type='submit' className='btn-primary w-full mt-4'>
							Add Receipt
						</button>
						<button onClick={handleOnClose} type='button' className='btn-secondary w-full mt-4'>
							Close
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ReceiptModal;
