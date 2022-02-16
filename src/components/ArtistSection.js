import ArtistSectionNav from './ArtistSectionNav';
import ArtistSectionInfo from './ArtistSectionInfo';

const ArtistSection = ({ title, more }) => {
	return (
		<div className='p-8'>
			<ArtistSectionNav />

			<ArtistSectionInfo title={title} more={more} />
		</div>
	);
};

export default ArtistSection;
