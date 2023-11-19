import { useNavigate } from 'react-router-dom';
import { BaseLayout } from '../../common/layout';
import { Routes } from '../../router/router';

const ErrorPage = () => {
	const navigate = useNavigate();

	const goToHome = () => {
		navigate(Routes.HOME);
	};

	return (
		<BaseLayout>
			<div className='flex flex-col items-center justify-center h-screen'>
				<h1 className='text-4xl font-semibold text-gray-800 mb-4'>404 Not Found</h1>
				<p className='text-lg text-gray-600 mb-8'>The page you're looking for doesn't exist.</p>
				<button
					onClick={goToHome}
					className='rounded bg-blue-500 py-2 px-4 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
				>
					Go Home
				</button>
			</div>
		</BaseLayout>
	);
};

export default ErrorPage;
