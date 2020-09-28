import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import '../../node_modules/animate.css/animate.min.css';

import isMobileContext from './isMobileContext';
import Countdown from 'react-countdown-now';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const fadeIn = keyframes`
	from { 
		opacity: 0;
	}
	to { 
		opacity: 1;
	}
`;

const Container = styled.div`
	margin: 0em;
	position: relative;
	width: 100%;
	justify-content: left;
	animation: ${fadeIn} 1s linear;

	@media screen and (max-width: 480px) {
		margin-top: 2em;
	}
`;

const TextBox = styled.div`
	font-size: 0.8em;
	color: #fff;
	background: rgb(253, 165, 15);
	margin: 0rem 1rem 1rem;
	padding: 1em 3em;
	border-radius: 30px;
	height: 3.5rem;

	display: flex;
	justify-content: center; /* align horizontal */
	align-items: center; /* align vertical */

	@media screen and (max-width: 480px) {
		font-size: 1em;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
`;

const BoxTitleContainer = styled.div`
	text-align: center;
	flex: auto;
`;

const endEventTime = new Date('Oct 04 2020 08:30:00 GMT-0500');

if (typeof window !== `undefined`) {
	let viewportWidth = window.innerWidth;

	window.onresize = () => {
		if (window.innerWidth < 1310 && viewportWidth >= 1310) {
			document.location.reload();
		} else if (window.innerWidth >= 1310 && viewportWidth < 1310) {
			document.location.reload();
		}
		viewportWidth = window.innerWidth;
	};
}

const Boxes = () => {
	const isMobile = useContext(isMobileContext);
	return (
		<Container>
			<ButtonContainer>
				<BoxTitleContainer>
					<h4 style={{ fontSize: '1.5em' }}>Time Remaining</h4>
					<TextBox style={{ fontSize: '1.5em', maxWidth: '42.7vw' }}>
						<div
							style={{
								// fontFamily: 'Segoe UI Regular',
								fontVariantNumeric: 'tabular-nums',
								minWidth: '172px',
								width: '50%',
								whiteSpace: 'nowrap',
								textAlign: 'center',
							}}
						>
							<Countdown date={endEventTime} />
						</div>
					</TextBox>
				</BoxTitleContainer>
				{/* <BoxTitleContainer>
					<h4 style={{ fontSize: '1.5em' }}>Wifi Login</h4>
					<TextBox>
						Username: eduroam or vuGuest
						<br />
						No Password
					</TextBox>
				</BoxTitleContainer> */}
			</ButtonContainer>
			<BoxTitleContainer>
				<h4 style={{ marginTop: isMobile ? '0' : '0.5rem', fontSize: '1.5em' }}>Announcements</h4>
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="VandyHacks"
					options={{
						minHeight: '300px',
						height: 930 < window.innerWidth && window.innerWidth < 1310 ? '23vh' : '43vh',
						width: isMobile ? '95vw' : '40vw',
					}} // 1306px is threshold
				/>
			</BoxTitleContainer>
		</Container>
	);
};

const BoxesAnimated = () => (
	<InViewMonitor
		classNameNotInView="vis-hidden"
		classNameInView="animated fadeInLeft" // fadeInLeft, or fadeInRight
	>
		<Boxes />
	</InViewMonitor>
);

export default BoxesAnimated;
