import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './router/router.tsx';
import { Spinner } from './common/components/Spinner.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Suspense fallback={<Spinner />}>
			<RouterProvider router={router} />
		</Suspense>
	</React.StrictMode>
);
