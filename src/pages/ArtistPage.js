import ArtistCover from '../components/ArtistCover';
import ArtistSection from '../components/ArtistSection';
const ArtistPage = () => {
	return (
		<div>
			<ArtistCover
				artistStatus='Verified Artist'
				artistSongTitle='The Weekend'
				listenNumbers='73,892,726'
				followNumbers='56 M'
				following='FOLLOWING'
			/>
			<ArtistSection title='Last Releases' more='MORE &gt;' />
		</div>
	);
};

export default ArtistPage;
