/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { LoaderFunctionArgs, createBrowserRouter } from 'react-router-dom';

import apiClient from '../common/api';
import { Form } from '../forms/types/form';

const HomePage = lazy(() => import('../forms/pages/HomePage'));
const NewPage = lazy(() => import('../forms/pages/NewPage'));
const FormPage = lazy(() => import('../forms/pages/FormPage'));

export enum Routes {
	HOME = '/',
	NEW = '/new',
	FORM = '/form',
}

const getFormDetails = async (request: LoaderFunctionArgs) => {
	const { id } = request.params;
	const { data } = await apiClient.get<Form>(`/forms/${id}`);

	return data;
};

export const router = createBrowserRouter([
	{
		path: Routes.HOME,
		element: <HomePage />,
	},
	{
		path: Routes.NEW,
		element: <NewPage />,
	},
	{
		path: `${Routes.FORM}/:id`,
		element: <FormPage />,
		loader: getFormDetails,
	},
]);
