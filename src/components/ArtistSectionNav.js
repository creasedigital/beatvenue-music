const ArtistSectionNav = () => {
	return (
		<div className=' flex justify-between mb-4'>
			<ul className='flex space-x-8 pl-8 items-center text-gray-400'>
				<li className='artistSectionTab'>Releases</li>
				<li className=''>About</li>
				<li className=''>Events</li>
				<li className=''>Similar</li>
			</ul>
			<div className='flex space-x-4 items-center '>
				<span className='text-lg'>&Xi;</span>
				<span className='text-xl rotate-90'> &hellip;</span>
			</div>
		</div>
	);
};

export default ArtistSectionNav;
