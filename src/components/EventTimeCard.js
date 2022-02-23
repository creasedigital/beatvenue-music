const EventTimeCard = ({
	month,
	day,
	eventTitle,
	recordLabels,
	artistLocation,
}) => {
	return (
		<div>
			{month.length && <h3>{month}</h3>}
			<div className='flex space-between'>
				<div className='extrabold text-4xl eventSectionTab'>{day}</div>
				<div>
					<h4>{eventTitle}</h4>
					<p>
						{recordLabels} &bull; {artistLocation}
					</p>
					<button className='bg-transparent text-white rounded-sm border-current border '>
						Tickets
					</button>
				</div>
			</div>
		</div>
	);
};

export default EventTimeCard;
