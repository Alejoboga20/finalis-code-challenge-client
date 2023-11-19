/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('../forms/pages/HomePage'));
const NewPage = lazy(() => import('../forms/pages/NewPage'));
const FormPage = lazy(() => import('../forms/pages/FormPage'));

export enum Routes {
	HOME = '/',
	NEW = '/new',
	FORM = '/form/:id',
}

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
		path: Routes.FORM,
		element: <FormPage />,
	},
]);
