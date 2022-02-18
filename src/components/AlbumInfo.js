import { tracks } from './PopularTrack';

const AlbumInfo = () => {
	return (
		<div className='flex space-x-4 items-center'>
			<div className='w-16 h-16 flex'>
				<img
					src={tracks[5].url}
					alt='Album Art'
					className='h-full w-full object-cover '
				/>
			</div>
			<div>
				<h3 className='text-white'>{tracks[5].title}</h3>
				<p className='text-gray-400 text-xs'>{tracks[5].title}</p>
			</div>
			<div className='flex justify-center items-center'>
				<span className='text-lg text-green-400'>&hearts;</span>
			</div>
		</div>
	);
};

export default AlbumInfo;
