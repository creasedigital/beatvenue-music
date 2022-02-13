import ArtistCover from '../components/ArtistCover';
import ArtistSection from '../components/ArtistSection';
const ArtistPage = () => {
	return (
		<div>
			<ArtistCover />
			<ArtistSection title='Welcome To The Artist Section' more='MORE' />
		</div>
	);
};

export default ArtistPage;
