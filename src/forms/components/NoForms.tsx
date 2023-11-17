export const NoForms = () => {
	return (
		<div className='flex flex-col items-center justify-center h-64 bg-white shadow-lg rounded-lg overflow-hidden my-4'>
			<h2 className='text-lg font-semibold'>No Forms Available</h2>
			<p className='text-gray-600 mb-2'>You have not created any forms yet.</p>
			<button className='btn-primary'>Create New Form</button>
		</div>
	);
};
