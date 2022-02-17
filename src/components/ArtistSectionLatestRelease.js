import ArtistSectionLatestReleaseList from './ArtistSectionLatestReleaseList';
import { tracks } from './PopularTrack';

const ArtistSectionReleaseLatest = () => {
	return (
		<div className='flex'>
			{console.log(typeof tracks)}
			{tracks.length &&
				tracks.map((track, index) => (
					<ArtistSectionLatestReleaseList track={track} index={index} />
				))}
		</div>
	);
};

export default ArtistSectionReleaseLatest;
