import AlbumInfo from '../components/AlbumInfo';
import NowPlaying from '../components/NowPlaying';
import AudioOption from '../components/AudioOption';

const SongPlaying = () => {
	return (
		<div className='flex space-between h-12 w-full bg-white absolute bottom-0 left-0'>
			<AlbumInfo className='' />
			<NowPlaying className='' />
			<AudioOption className='' />
		</div>
	);
};

export default SongPlaying;
