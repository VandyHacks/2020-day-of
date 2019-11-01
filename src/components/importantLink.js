import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import '../../node_modules/animate.css/animate.min.css';

import isMobileContext from './isMobileContext';
import StationeryPen from '../images/stationeryPen3.svg';
import StationeryBox from '../images/stationeryBox.svg';
import BubbleBox from '../images/speechbubble.svg';
import Slack from '../images/slack.svg';
import Maps from '../images/maps.svg';
import Calendar from '../images/calendar.svg';
import Books from '../images/books.svg';
import Hammer from '../images/hammer.svg';

const fadeIn = keyframes`
	from { 
		opacity: 0;
	}
	to { 
		opacity: 1;
	}
`;

const Container = styled.div`
	margin: 0 0 0 1em;
	position: relative;
	width: 100%;
	justify-content: left;
	animation: ${fadeIn} 1s linear;
`;

const ContainerMobile = styled.div`
	position: relative;
	width: 100%;
	text-align: center;
	min-height: calc(101vh - 10em);
	animation: ${fadeIn} 1s linear;
`;

const BoxTitleContainer = styled.div`
	margin: 1em 1.5em;
	position: static;
	width: 12em;
	height: 100%;
	opacity: 1;
	float: left;
`;

const StyledUL = styled.ul`
	list-style-type: none;
	margin: 1em 0 0 0;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100px, 50%));
`;

const StyledLi = styled.li`
	font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
	border-bottom: 1px solid #ccc;

	&:last-child {
		border: none;
	}

	a {
		text-decoration: none;
		color: hsl(228, 53%, 34%);
		display: block;
		font-size: 0.8em;

		transition: all 0.3s ease;
	}

	a:hover {
		opacity: 0.7;
		transform: translateX(10px);
	}
`;

const BoxStyle = styled.div`
	position: absolute;
	top: 10.3em;
	left: 77%;
	width: 3.3em;
	opacity: 1;
`;

const BoxStyleMobile = styled.div`
	position: absolute;
	top: 7.3em;
	left: 73%;
	width: 3.3em;
	opacity: 1;
`;

const PenStyle = styled.div`
	position: absolute;
	top: 9.3em;
	left: 89%;
	width: 3.4em;
	opacity: 1;
`;

const PenStyleMobile = styled.div`
	position: absolute;
	top: 1.3em;
	left: 72%;
	width: 3.4em;
	opacity: 1;
`;

const BubbleStyle = styled.div`
	position: relative;
	top: 1em;
	left: -3em;
	width: 20em;
	opacity: 1;
	z-index: -1;
`;

const BubbleStyleMobile = styled.div`
	position: relative;
	top: 1em;
	left: 0em;
	width: 20em;
	opacity: 1;
	margin-bottom: 3em;
	z-index: -1;
`;

const ScheduleBox = () => {
	const isMobile = useContext(isMobileContext);
	const iconSize = {
		height: '90px',
		width: '90px',
		cursor: 'pointer',
	};

	return (
		<Container>
			<BoxTitleContainer>
				<h4 style={{ fontSize: '1.7em' }}>Important Links</h4>
				<StyledUL>
					<StyledLi>
						<a href="https://map.vandyhacks.org">
							<Maps style={iconSize} />
						</a>
					</StyledLi>
					<StyledLi>
						<a href="https://learn.vandyhacks.org">
							<Books style={iconSize} />
						</a>
					</StyledLi>
					<StyledLi>
						<a href="https://learn.vandyhacks.org">
							<Hammer />
						</a>
					</StyledLi>
					<StyledLi>
						<a href="https://calendar.vandyhacks.org">
							<Calendar style={iconSize} />
						</a>
					</StyledLi>
					<StyledLi>
						<a href="https://vandyhacksvi.slack.com">
							<Slack style={iconSize} />
						</a>
					</StyledLi>
				</StyledUL>
			</BoxTitleContainer>
			{{ isMobile } ? (
				<>
					<BubbleStyleMobile>
						<BubbleBox />
					</BubbleStyleMobile>
					<BoxStyleMobile>
						<StationeryBox />
					</BoxStyleMobile>
					<PenStyleMobile>
						<StationeryPen />
					</PenStyleMobile>
				</>
			) : (
				<>
					<BoxTitleContainer style={{ width: '10em' }}>
						<BubbleStyle>
							<BubbleBox />
						</BubbleStyle>
					</BoxTitleContainer>
					<BoxStyle>
						<StationeryBox />
					</BoxStyle>
					<PenStyle>
						<StationeryPen />
					</PenStyle>
				</>
			)}
		</Container>
	);
};

const LinkAnimated = () => (
	<InViewMonitor
		classNameNotInView="vis-hidden"
		classNameInView="animated fadeInRight" // fadeInLeft, or fadeInRight
	>
		<ScheduleBox />
	</InViewMonitor>
);

export default LinkAnimated;
