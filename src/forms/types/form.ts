export interface Form {
	id: string;
	companyName: string;
	fiscalCode: string;
	validFiscalCode: boolean;
	clientNumber: string;
	formStatus: FormStatus;
	receipts: Receipt[];
}

export interface Receipt {
	id: string;
	receiptDate: string;
	taxAmount: number;
	taxPercentage: number;
}

export type FormStatus = 'PENDING' | 'APPROVED' | 'REJECTED';
