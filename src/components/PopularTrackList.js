const PopularTrackList = ({ tracks }) => {
	return (
		<div>
			{tracks.length &&
				tracks.map((track, index) => (
					<div className='flex'>
						<h3 className='text-gray-100'>{index + 1}</h3>
						<div
							className={`w-4 h-4 bg-cover bg-[url('/public/${track.url}')]`}
						></div>
						<h3 className='text-white'>{title}</h3>
					</div>
				))}
		</div>
	);
};

export default PopularTrackList;
