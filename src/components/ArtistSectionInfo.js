import ArtistSectionLatestRelease from './ArtistSectionLatestRelease';

const ArtistSectionInfo = ({ title, more }) => {
	return (
		<div className='mb-2'>
			<h1 className='font-bold text-2xl text-white ml-8'>
				{title}{' '}
				<span className='text-green-700 font-thin text-xs ml-2'>{more}</span>
			</h1>
			<ArtistSectionLatestRelease />
		</div>
	);
};

export default ArtistSectionInfo;
