const ArtistCover = ({
	artistStatus,
	artistSongTitle,
	listenNumbers,
	followNumbers,
	following,
}) => {
	return (
		<div className="backdrop-brightness-50 pl-8 text-white bg-cover bg-left-bottom bg-no-repeat h-screen/2.5 bg-[url('/public/1-min.jpg')] ">
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
				<h4 className='text-8xl font-extrabold'>{artistSongTitle}</h4>
				<div className='text-sm'>
					<span className='mr-4'>
						{listenNumbers} monthly listeners . {followNumbers} followers
					</span>
					<span>{following}</span>
				</div>
			</div>
		</div>
	);
};

export default ArtistCover;
