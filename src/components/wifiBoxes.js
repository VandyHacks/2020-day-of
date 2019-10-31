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
	background: hsl(228, 53%, 34%);
	margin: 1rem 1rem;
	padding: 1em 3em;
	border-radius: 30px;

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

const endEventTime = new Date('2019-11-03T23:59:59.999Z');

const Boxes = () => {
	const isMobile = useContext(isMobileContext);
	return (
		<Container>
			<ButtonContainer>
				<BoxTitleContainer>
					<h4>Time Remaining</h4>
					<TextBox style={{ fontSize: '1.6em', minWidth: '11.7em' }}>
						<div
							style={{
								fontFamily: 'Segoe UI',
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
				<BoxTitleContainer>
					<h4>Wifi Login</h4>
					<TextBox>
						Username: 1234
						<br />
						Password: 567890
					</TextBox>
				</BoxTitleContainer>
			</ButtonContainer>
			<BoxTitleContainer>
				<h4>Announcements</h4>
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="VandyHacks"
					options={{ height: '50vh', width: isMobile ? '95vw' : '45vw' }}
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
