const AudioOption = () => {
	return (
		<div className='flex justify-center items-center mr-4'>
			<div className='flex justify-center items-center space-x-4 '>
				<span className='flex justify-center items-center text-lg text-white'>
					&cong;
				</span>
				<span className='flex justify-center items-center text-lg text-white'>
					&phi;
				</span>
				<div className='w-32 h-1 rounded opacity-50 relative '>
					<span className='bg-gray-400 w-full h-1 rounded block absolute '></span>
					<span className='bg-gray-100 w-1/4 h-1 rounded block absolute '></span>
				</div>
				<span className='flex justify-center items-center text-lg text-white'>
					&diams;
				</span>
			</div>
		</div>
	);
};

export default AudioOption;
