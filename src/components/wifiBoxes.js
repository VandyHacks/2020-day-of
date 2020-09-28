import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import '../../node_modules/animate.css/animate.min.css';

import isMobileContext from './isMobileContext';
import Countdown from 'react-countdown-now';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import WidgetBot, { API } from '@widgetbot/react-embed';

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
	margin: 0rem auto;
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
					<TextBox
						style={{
							fontSize: '1.5em',
							maxWidth: isMobile ? '86vw' : '41.7vw',
							textAlign: 'center',
						}}
					>
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
			</ButtonContainer>
			<BoxTitleContainer>
				<h4 style={{ marginTop: isMobile ? '2rem' : '0.5rem', fontSize: '1.5em' }}>
					Announcements
				</h4>
				{/* <div className="twitter-feed">
					<TwitterTimelineEmbed
						sourceType="profile"
						screenName="VandyHacks"
						borderColor="#FDA50F"
						options={{
							minHeight: '420px',
							height: 930 < window.innerWidth && window.innerWidth < 1310 ? '44vh' : '48vh',
							width: isMobile ? '95vw' : '39vw',
						}} // 1306px is threshold
					/>
				</div> */}

				<WidgetBot
					server="755112297772351499"
					channel="755112297986392146"
					height={930 < window.innerWidth && window.innerWidth < 1310 ? '44vh' : '48vh'}
					width={isMobile ? '86vw' : '39vw'}
				/>
				{/* <iframe src="https://discord.com/widget?id=755112297772351499&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> */}
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
