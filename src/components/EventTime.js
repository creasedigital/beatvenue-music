import EventTimeCard from './EventTimeCard';

const EventTime = () => {
	return (
		<div>
			<EventTimeCard
				month='month'
				day='day'
				eventTitle='eventTitle'
				recordLabels='recordLabels'
				artistLocation='artistLocation'
			/>
		</div>
	);
};

export default EventTime;
