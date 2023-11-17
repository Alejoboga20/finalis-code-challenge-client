import * as React from 'react';
import { Link } from 'react-router-dom';

import apiClient from '../../common/api';
import { FormCard } from './FormCard';
import { NoForms } from './NoForms';
import { Spinner } from '../../common/components';
import { Form } from '../types/form';
import { Routes } from '../../router/router';

export const FormDashboard = () => {
	const [forms, setForms] = React.useState<Form[]>([]);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);

	const loadData = async () => {
		setIsLoading(true);
		try {
			const { data } = await apiClient.get<Form[]>('forms');
			setForms(data);
		} catch (error) {
			console.error('Error loading forms:', error);
		} finally {
			setIsLoading(false);
		}
	};

	React.useEffect(() => {
		loadData();
	}, []);

	if (isLoading) return <Spinner />;
	if (!forms.length) return <NoForms />;

	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
				{forms.map((form) => (
					<FormCard key={form.id} form={form} />
				))}
			</div>
			<div className='flex justify-end lg:justify-start p-4'>
				<Link className='btn-primary' to={Routes.NEW}>
					add new client
				</Link>
			</div>
		</>
	);
};
