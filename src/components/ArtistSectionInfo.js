import ArtistSectionLatestRelease from './ArtistSectionLatestRelease';

const ArtistSectionInfo = ({ title, more }) => {
	return (
		<div>
			<h1>
				{title} <span>{more}</span>
			</h1>
			<ArtistSectionLatestRelease />
		</div>
	);
};

export default ArtistSectionInfo;
