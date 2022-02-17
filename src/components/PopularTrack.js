import PopularTrackList from './PopularTrackList';

export const tracks = [
	{
		url: '/2-min.jpg',
		title: 'Lorem ipsum',
		type: 'Single',
		time: '03.56',
	},
	{
		url: '/3-min.jpg',
		title: 'Lorem ipsum',
		type: 'Single',
		time: '03.56',
	},
	{
		url: '/4-min.jpg',
		title: 'Lorem ipsum',
		type: 'Single',
		time: '03.56',
	},
	{
		url: '/5-min.jpg',
		title: 'Lorem ipsum',
		type: 'Single',
		time: '03.56',
	},
	{
		url: '/6-min.jpg',
		title: 'Lorem ipsum',
		type: 'Single',
		time: '03.56',
	},
	{
		url: '/7-min.jpg',
		title: 'Lorem ipsum',
		type: 'Single',
		time: '03.56',
	},
];

const PopularTrack = () => {
	return (
		<div className='pt-8 pl-8 bg-slate-900'>
			<h2 className='text-gray-400'>POPULAR TRACKS</h2>
			<PopularTrackList tracks={tracks} />
		</div>
	);
};

export default PopularTrack;
