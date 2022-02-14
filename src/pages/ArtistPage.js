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
			<ArtistSection title='Welcome To The Artist Section' more='MORE' />
		</div>
	);
};

export default ArtistPage;
