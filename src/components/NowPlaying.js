const NowPlaying = () => {
	return (
		<div className='flex justify-center items-center flex-col'>
			<div className='flex justify-center items-center space-x-10 '>
				<span className='flex justify-center items-center text-lg text-white'>
					&laquo;
				</span>
				<span className='flex justify-center items-center text-lg text-white'>
					&larr;
				</span>
				<span className='origin-center rotate-270 w-8 h-8 flex justify-center items-center rounded-full bg-white text-zinc-800'>
					&nabla;
				</span>
				<span className='flex justify-center items-center text-lg text-white'>
					&rarr;
				</span>
				<span className='flex justify-center items-center text-lg text-white'>
					&raquo;
				</span>
			</div>
			<div className='flex justify-between space-x-2 items-center'>
				<div className='text-xs text-gray-400'>0.56</div>
				<div className='w-64 h-1 rounded opacity-50 relative '>
					<span className='bg-gray-400 w-full h-1 rounded block absolute '></span>
					<span className='bg-gray-100 w-1/4 h-1 rounded block absolute '></span>
				</div>
				<div className='text-xs text-gray-400'>3.44</div>
			</div>
		</div>
	);
};

export default NowPlaying;
