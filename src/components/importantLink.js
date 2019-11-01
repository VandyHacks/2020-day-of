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
import Workshop from '../images/workshop.svg';

let isChrome;
if (typeof window !== `undefined`) {
	const isChromium = window.chrome;
	const winNav = window.navigator;
	const vendorName = winNav.vendor;
	const isOpera = typeof window.opr !== 'undefined';
	const isIEedge = winNav.userAgent.indexOf('Edge') > -1;
	const isIOSChrome = winNav.userAgent.match('CriOS');
	isChrome =
		isChromium !== null &&
		typeof isChromium !== 'undefined' &&
		vendorName === 'Google Inc.' &&
		isOpera === false &&
		isIEedge === false &&
		!isIOSChrome;
}

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

let BoxTitleContainer;

if (isChrome) {
	BoxTitleContainer = styled.div`
		margin: 0em 0em 0em -1em;
		position: static;
		width: 24rem;
		height: 110%;
		opacity: 1;
		float: left;
		white-space: nowrap;
	`;
} else {
	BoxTitleContainer = styled.div`
		margin: 0em 0em 0em 2em;
		position: static;
		width: 24rem;
		height: 110%;
		opacity: 1;
		float: left;
		white-space: nowrap;
	`;
}

const StyledULTop = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: 8rem 8rem 8rem;
	grid-template-rows: 7rem;
`;

const StyledULBottom = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: 12rem 12rem;
	grid-template-rows: 11rem;
`;

const StyledLi = styled.li`
	font: 200 20px/1.5 Helvetica, Verdana, sans-serif;

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
		transform: scale(1.1);
	}
`;

const BoxStyle = styled.div`
	position: absolute;
	top: 12.3em;
	left: 75%;
	width: 3.3em;
	opacity: 1;
`;

const BoxStyleMobile = styled.div`
	position: absolute;
	top: 12.3em;
	left: 80%;
	width: 3.3em;
	opacity: 1;
`;

const PenStyle = styled.div`
	position: absolute;
	top: 10.8em;
	left: 89%;
	width: 3.4em;
	opacity: 1;
`;

const PenStyleMobile = styled.div`
	position: absolute;
	top: 1.3em;
	left: 82%;
	width: 3.4em;
	opacity: 1;
`;

const BubbleStyle = isChrome
	? styled.div`
			position: relative;
			top: 2em;
			left: 3em;
			min-width: 15em;
			opacity: 1;
			z-index: -1;
			white-space: no-wrap;
	  `
	: styled.div`
			position: relative;
			top: 2em;
			left: -3em;
			min-width: 15em;
			opacity: 1;
			z-index: -1;
			white-space: no-wrap;
	  `;

const BubbleStyleMobile = styled.div`
	position: relative;
	top: 1em;
	left: 3em;
	width: 20em;
	opacity: 1;
	margin-bottom: 3em;
	z-index: -1;
`;

const ScheduleBox = () => {
	const isMobile = useContext(isMobileContext);
	const topIconSize = {
		height: '7rem',
		width: '7rem',
		padding: '0 0.5rem',
		cursor: 'pointer',
	};
	const bottomIconSize = isChrome
		? {
				height: '10rem',
				width: '10rem',
				padding: '0rem 0.5rem',
				cursor: 'pointer',
		  }
		: {
				height: '10.5rem',
				width: '10.5rem',
				padding: '0rem 0.5rem',
				cursor: 'pointer',
		  };
	const workshopIcon = isChrome
		? {
				height: '9rem',
				width: '9rem',
				padding: '1rem 0.5rem 1rem 1rem',
		  }
		: {
				height: '9.5rem',
				width: '9.5rem',
				padding: '1rem 0.5rem 1rem 1rem',
		  };

	return (
		<Container style={{ marginLeft: isMobile ? '9em' : '1em' }}>
			<BoxTitleContainer>
				<h4 style={{ fontSize: '1.7em' }}>Important Links</h4>
				<StyledULTop>
					<StyledLi>
						<a href="https://map.vandyhacks.org">
							<Maps id="maps" className="icon" style={topIconSize} />
							<p style={{ marginTop: '-0.6em', color: 'rgb(41, 59, 133)', textAlign: 'center' }}>
								Maps
							</p>
						</a>
					</StyledLi>
					<StyledLi>
						<a href="https://calendar.vandyhacks.org">
							<Calendar id="calendar" className="icon" style={topIconSize} />
							<p style={{ marginTop: '-0.6em', color: 'rgb(41, 59, 133)', textAlign: 'center' }}>
								Calendar
							</p>
						</a>
					</StyledLi>
					<StyledLi>
						<a href="https://vandyhacksvi.slack.com">
							<Slack id="slack" className="icon" style={topIconSize} />
							<p style={{ marginTop: '-0.6em', color: 'rgb(41, 59, 133)', textAlign: 'center' }}>
								Slack
							</p>
						</a>
					</StyledLi>
				</StyledULTop>
				<StyledULBottom>
					<StyledLi>
						<a href="https://learn.vandyhacks.org">
							<Books id="books" className="icon" style={bottomIconSize} />
							<p style={{ marginTop: '-2em', color: 'rgb(41, 59, 133)', textAlign: 'center' }}>
								Hackpacks
							</p>
						</a>
					</StyledLi>
					<StyledLi>
						<a href="https://learn.vandyhacks.org">
							<Workshop id="workshops" className="icon" style={workshopIcon} />
							<p
								style={{
									marginTop: '-1em',
									color: 'rgb(41, 59, 133)',
									textAlign: 'center',
									paddingRight: isMobile ? '0' : '3em',
								}}
							>
								Workshops
							</p>
						</a>
					</StyledLi>
				</StyledULBottom>
			</BoxTitleContainer>
			{isMobile ? (
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
					<BoxTitleContainer style={{ display: 'flex', flexDirection: 'row', width: '12em' }}>
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
