import ArtistSectionLatestReleaseList from './ArtistSectionLatestReleaseList';
import { tracks } from './PopularTrack';

const ArtistSectionReleaseLatest = () => {
	return (
		<div className='grid grid-cols-4 auto-cols-auto '>
			{console.log(typeof tracks)}
			{tracks.length &&
				tracks.map((track, index) => (
					<ArtistSectionLatestReleaseList track={track} index={index} />
				))}
		</div>
	);
};

export default ArtistSectionReleaseLatest;
