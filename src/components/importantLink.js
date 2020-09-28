import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import '../../node_modules/animate.css/animate.min.css';

import isMobileContext from './isMobileContext';

import Discord from '../images/discord.svg';
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
	grid-template-columns: 8.3rem 8.3rem 8.3rem 8.3rem;
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

const ScheduleBox = () => {
	const isMobile = useContext(isMobileContext);
	const topIconSize = {
		height: '7rem',
		width: '7rem',
		padding: '0.5rem 0.5rem',
		cursor: 'pointer',
	};
	const hackpackIconSize = isChrome
		? {
				height: '8.4rem',
				width: '8.4rem',
				padding: '0 0 1.5rem 0',
				cursor: 'pointer',
		  }
		: {
				height: '8.9rem',
				width: '8.9rem',
				padding: '0 0 1.5rem 0',
				cursor: 'pointer',
		  };
	const workshopIcon = isChrome
		? {
				height: '8rem',
				width: '8rem',
				padding: '0.8rem 0.8rem 1.5rem 0.8rem',
		  }
		: {
				height: '8.5rem',
				width: '8.5rem',
				padding: '0.8rem 0.8rem 1.5rem 0.8rem',
		  };

	return (
		<Container style={{ marginLeft: isMobile ? '9em' : '1em' }}>
			<BoxTitleContainer>
				<h4 style={{ fontSize: '1.7em', marginBottom: '1.7rem' }}>Important Links</h4>
				<StyledULTop>
					{/* <StyledLi>
						<a href="https://map.vandyhacks.org">
							<Maps id="maps" className="icon" style={topIconSize} />
							<p style={{ marginTop: '-0.5em', color: 'rgb(253, 165, 15)', textAlign: 'center' }}>
								Maps
							</p>
						</a>
					</StyledLi> */}
					<StyledLi>
						<a href="https://calendar.vandyhacks.org">
							<Calendar id="calendar" className="icon" style={topIconSize} />
							<p
								style={{
									marginTop: '-0.6em',
									marginLeft: '2.4rem',
									color: 'rgb(253, 165, 15)',
								}}
							>
								Calendar
							</p>
						</a>
					</StyledLi>
					<StyledLi>
						<a href="https://vandyhacksvi.slack.com">
							<Discord id="discord" className="icon" style={topIconSize} />
							<p style={{ marginTop: '-0.6em', color: 'rgb(253, 165, 15)', marginLeft: '2.7rem' }}>
								Discord
							</p>
						</a>
					</StyledLi>
				{/* <StyledULBottom> */}
					<StyledLi>
						<a href="https://learn.vandyhacks.org">
							<Books id="books" className="icon" style={hackpackIconSize} />
							<p style={{ marginTop: '-2.3em', color: 'rgb(253, 165, 15)', marginLeft: '2.4rem' }}>
								Hackpacks
							</p>
						</a>
					</StyledLi>
					<StyledLi>
						<a href="https://learn.vandyhacks.org" target="_blank">
							<Workshop id="workshops" className="icon" style={workshopIcon} />
							<p
								style={{
									marginTop: '-1.8em',
									color: 'rgb(253, 165, 15)',
									marginLeft: '2.2rem',
								}}
							>
								Workshops
							</p>
						</a>
					</StyledLi>
				</StyledULTop>
			</BoxTitleContainer>
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
