const ArtistCover = ({
	artistStatus,
	artistSongTitle,
	listenNumbers,
	followNumbers,
	following,
}) => {
	return (
		<>
			<div className='h-screen/2.5 relative'>
				<div className="brightness-50  bg-cover bg-left-bottom bg-no-repeat h-full  bg-[url('/public/1-min.jpg')] "></div>
				<div className='pl-8 text-white absolute top-0 left-0'>
					<div className='flex pt-8  mb-16'>
						<span className='prev w-6 h-6 flex justify-center items-center mr-4 rounded-full  bg-black'>
							&lt;
						</span>
						<span className='next w-6 h-6 flex justify-center items-center mr-4 rounded-full  bg-black'>
							&gt;
						</span>
					</div>
					<div>
						<h4 className='text-sm'>{artistStatus}</h4>
						<h1 className='text-8xl font-extrabold'>{artistSongTitle}</h1>
						<div className='text-sm'>
							<span className='mr-4'>
								{listenNumbers} monthly listeners . {followNumbers} followers
							</span>
							<span>{following}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ArtistCover;
