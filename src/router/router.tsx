import { createBrowserRouter } from 'react-router-dom';

enum Routes {
	HOME = '/',
	NEW = '/new',
	FORM = '/form/:id',
}

export const router = createBrowserRouter([
	{
		path: Routes.HOME,
		element: <div>Home</div>,
	},
	{
		path: Routes.NEW,
		element: <div>New</div>,
	},
	{
		path: Routes.FORM,
		element: <div>Form</div>,
	},
]);
