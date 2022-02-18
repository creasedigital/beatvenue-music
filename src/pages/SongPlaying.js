import AlbumInfo from '../components/AlbumInfo';
import NowPlaying from '../components/NowPlaying';
import AudioOption from '../components/AudioOption';

const SongPlaying = () => {
	return (
		<div className='flex justify-between h-16 w-full bg-zinc-800 absolute bottom-0 left-0 z-50'>
			<AlbumInfo className='flex-1' />
			<NowPlaying className='flex-1' />
			<AudioOption className='flex-1' />
		</div>
	);
};

export default SongPlaying;
