export interface Form {
	id: string;
	companyName: string;
	fiscalCode: string;
	validFiscalCode: boolean;
	clientNumber: string;
	formStatus: FormStatus;
}

export type FormStatus = 'PENDING' | 'APPROVED' | 'REJECTED';
