const PopularTrackList = ({ tracks }) => {
	return (
		<div>
			{tracks.length &&
				tracks.map((track, index) => (
					<div className='flex space-x-6 mt-4 items-center ' key={index}>
						<h3 className='text-gray-100 self-center'>{index + 1}</h3>
						<div className='w-8 h-8 flex justify-center'>
							<img
								src={track.url}
								alt='Album Art'
								className='h-full w-full object-cover '
							/>
						</div>
						<h3 className='text-white'>{track.title}</h3>
					</div>
				))}
		</div>
	);
};

export default PopularTrackList;
