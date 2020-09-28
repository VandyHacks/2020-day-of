import React, { useContext, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import '../../node_modules/animate.css/animate.min.css';

import isMobileContext from './isMobileContext';
import moment from 'moment';
// import { getEvents } from './getEvents';

import { Calendar, momentLocalizer } from 'react-big-calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
// a localizer for BigCalendar

// this weird syntax is just a shorthand way of specifying loaders
// require('style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css');

const fadeIn = keyframes`
	from { 
		opacity: 0;
	}
	to { 
		opacity: 1;
	}
`;

const Container = styled.div`
	margin: 0.5em 0.5em 2em;
	position: relative;
	width: 100%;
	justify-content: left;
	animation: ${fadeIn} 1s linear;
`;

const ContainerMobile = styled.div`
	position: relative;
	width: 100%;
	text-align: center;
	margin-top: 2em;
	padding: 1.5em;
	animation: ${fadeIn} 1s linear;
`;

const BoxTitleContainer = styled.div`
	text-align: center;
`;

const localizer = momentLocalizer(moment);

const ColoredDateCellWrapper = ({ children }) =>
	React.cloneElement(React.Children.only(children), {
		style: {
			// backgroundColor: 'hsl(228, 53%, 34%)',
			fontSize: '0.8em',
		},
	});

const ScheduleBox = ({ events }) => {
	// following code is used when fetching the data in client side now moved to server side
	/*
	getEvents((events) => {
		this.setState({events})
	  })
	const [events, setEvents] = useState([]);
	useEffect(() => {
		getEvents(events => setEvents(events));
	});
	*/

	events.forEach(event => {
		event.start = new Date(event.start);
		event.end = new Date(event.end);
	});

	const isMobile = useContext(isMobileContext);
	if (isMobile) {
		return (
			<ContainerMobile>
				<BoxTitleContainer>
					<h4>Schedule</h4>
				</BoxTitleContainer>

				<div>
					<Calendar
						events={events}
						// step={60}
						defaultView={'agenda'}
						views={['day', 'agenda']}
						showMultiDayTimes
						// max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
						// defaultDate={new Date(2015, 3, 1)}
						components={{
							timeSlotWrapper: ColoredDateCellWrapper,
						}}
						localizer={localizer}
						toolbar={true}
						length={1}
					/>
				</div>
			</ContainerMobile>
		);
	} else
		return (
			<Container>
				<BoxTitleContainer>
					<h4>Schedule</h4>
				</BoxTitleContainer>

				<div style={{ height: '51vh' }}>
					<Calendar
						events={events}
						// step={60}
						defaultView={'agenda'}
						views={['agenda']}
						showMultiDayTimes
						// max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
						components={{
							timeSlotWrapper: ColoredDateCellWrapper,
						}}
						localizer={localizer}
						toolbar={true}
						// length={1}
					/>
				</div>
			</Container>
		);
};

const ScheduleAnimated = ({ events }) => (
	<InViewMonitor
		classNameNotInView="vis-hidden"
		classNameInView="animated fadeInRight" // fadeInLeft, or fadeInRight
	>
		<ScheduleBox events={events} />
	</InViewMonitor>
);

export default ScheduleAnimated;
