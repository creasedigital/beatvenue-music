const ArtistPlaylistCover = () => {
	return (
		<>
			<div className='h-screen/2.5 relative '>
				<div className="backdrop-brightness-50 blur-sm bg-cover bg-left-bottom bg-no-repeat h-full bg-[url('/public/1-min.jpg')] "></div>

				<div className='positionAbsoluteCenter flex items-center justify-center'>
					<div className="brightness-50 w-56 h-56 rounded-full object-cover bg-cover  bg-left-bottom bg-no-repeat bg-[url('/public/1-min.jpg')] "></div>
				</div>

				<div className='positionAbsoluteCenter flex justify-center items-center'>
					<span className='origin-center rotate-270 w-10 h-10 flex justify-center items-center rounded-full bg-green-400 text-white'>
						&nabla;
					</span>
				</div>
				<div className='pl-4 text-white absolute bottom-4 left-4'>
					<h4 className='text-sm'>Listen to</h4>
					<h2 className='text-4xl font-bold'>Artist Playlist</h2>
				</div>
			</div>
		</>
	);
};

export default ArtistPlaylistCover;
