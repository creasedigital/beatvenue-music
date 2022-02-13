import ArtistSectionNav from './ArtistSectionNav';
import ArtistSectionInfo from './ArtistSectionInfo';

const ArtistSection = ({ title, more }) => {
	return (
		<div>
			<h1>
				{title} <span>{more}</span>
			</h1>
			<ArtistSectionNav />
			<ArtistSectionInfo />
		</div>
	);
};

export default ArtistSection;
