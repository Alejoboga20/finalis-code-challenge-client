import { PropsWithChildren } from 'react';

interface BaseLayoutProps extends PropsWithChildren {
	title?: string;
}

export const BaseLayout = ({ children, title = 'M&O Accountants' }: BaseLayoutProps) => {
	return (
		<div className='p-6'>
			<header className='text-center text-2xl font-bold p-2'>{title}</header>
			<hr />
			<main className='p-2'>{children}</main>
		</div>
	);
};
