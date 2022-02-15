import PopularTrackList from './PopularTrackList';

const PopularTrack = () => {
	export const tracks = [
		{
			url: '/public/2-min.jpg',
			title: 'Lorem ipsum dolor sit amet',
		},
		{
			url: '/public/3-min.jpg',
			title: 'Lorem ipsum dolor sit amet',
		},
		{
			url: '/public/4-min.jpg',
			title: 'Lorem ipsum dolor sit amet',
		},
		{
			url: '/public/5-min.jpg',
			title: 'Lorem ipsum dolor sit amet',
		},
		{
			url: '/public/6-min.jpg',
			title: 'Lorem ipsum dolor sit amet',
		},
		{
			url: '/public/7-min.jpg',
			title: 'Lorem ipsum dolor sit amet',
		},
	];

	return (
		<div>
			<h2 className='text-gray-100'>POPULAR TRACKS</h2>
			<PopularTrackList tracks={tracks} />
		</div>
	);
};

export default PopularTrack;
