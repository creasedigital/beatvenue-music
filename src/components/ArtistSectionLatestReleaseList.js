const ArtistSectionLatestReleaseList = ({ track, index }) => {
	return (
		<div>
			<div className='m-4 '>
				<div className='w-32 h-32 flex '>
					<img
						src={track.url}
						alt='Album Art'
						className='h-full w-full object-cover '
					/>
				</div>
				<h3 className='text-white'>{track.title}</h3>
				<p className='text-gray-400 text-sm'>
					{track.type} &bull; <span>{track.time}</span>
				</p>
			</div>
		</div>
	);
};

export default ArtistSectionLatestReleaseList;
