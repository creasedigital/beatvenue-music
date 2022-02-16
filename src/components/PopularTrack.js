import PopularTrackList from './PopularTrackList';

const PopularTrack = () => {
	const tracks = [
		{
			url: '/2-min.jpg',
			title: 'Lorem ipsum',
		},
		{
			url: '/3-min.jpg',
			title: 'Lorem ipsum',
		},
		{
			url: '/4-min.jpg',
			title: 'Lorem ipsum',
		},
		{
			url: '/5-min.jpg',
			title: 'Lorem ipsum',
		},
		{
			url: '/6-min.jpg',
			title: 'Lorem ipsum',
		},
		{
			url: '/7-min.jpg',
			title: 'Lorem ipsum',
		},
	];

	return (
		<div className='pt-8 pl-8 bg-slate-900'>
			<h2 className='text-gray-400'>POPULAR TRACKS</h2>
			<PopularTrackList tracks={tracks} />
		</div>
	);
};

export default PopularTrack;
