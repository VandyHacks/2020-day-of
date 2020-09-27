import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import InViewMonitor from 'react-inview-monitor';
import MtSvgLines from 'react-mt-svg-lines';

import '../../node_modules/animate.css/animate.min.css';

// import top from '../images/logo/retroedn-used.png';
// import middle from '../images/logo/vandygoldhacks.png';
// import bottom from '../images/logo/thehackathon.png';

import LogoVandyHacksText from '../images/textVandyHacks.svg';
import isMobileContext from './isMobileContext';

import SocialMedias from '../components/socialMedia';

const fadeIn = keyframes`
	from { 
		opacity: 0;
	}
	to { 
		opacity: 1;
	}
`;

const Container = styled.div`
	margin: 1em;
	position: relative;
	width: calc(100% - 2em);
	justify-content: left;
	animation: ${fadeIn} 1s linear;
	&:after {
		content: '';
		border-color: hsl(228, 53%, 34%);
		position: absolute;
		bottom: 0;
		left: -0em;
		width: 94%;
		height: 2px;
		border-bottom-style: dashed;
	}
`;

const ContainerMobile = styled.div`
	position: relative;
	width: 100%;
	text-align: center;
	animation: ${fadeIn} 1s linear;
`;

const LogoVandyHacksTextStyle = styled.div`
	width: 30em;
	max-width: 100%;
	min-width: 80%;
	margin-left: 0;
	left: 0;
	right: 0;
	fill: white;
	fill-opacity: 1;
	z-index: 2;
`;

const LogoVandyHacksTextStyleMobile = styled.div`
	width: calc(100vw - 3em);
	margin: 1.5em auto 0.3em auto;
	left: 0;
	right: 0;
	fill: white;
	fill-opacity: 1;
	z-index: 2;
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: space-around;
`;

const StyledButton = styled.button`
	width: 16vw;
	height: 5vh;
	min-width: 120px;
	min-height: 41px;
	margin: 1em 0.8em 1.5em 1.2em;
	text-align: center;
	border: 3px solid hsl(228, 53%, 34%);
	border-radius: 6px;
	background: none;
	color: #293c85;
	font-weight: 600;
	font-size: larger;
	transition: all 0.25s linear;

	user-select: none;

	&:hover,
	&:focus {
		background-color: hsl(228, 53%, 34%);
		color: white;
		cursor: pointer;
	}

	outline: none;
	&::-moz-focus-inner {
		border: 0;
	}
`;

const StyledButtonMobile = styled(StyledButton)`
	margin: 1em auto;
`;

const ScrollAnimateInLineSvg = ({ SvgElement }) => (
	<InViewMonitor
		classNameNotInView="vis-hidden"
		classNameInView=""
		childPropsInView={{ animate: true }}
	>
		<MtSvgLines duration={3500} fade>
			{SvgElement}
		</MtSvgLines>
	</InViewMonitor>
);

const UpperLeft = () => {
	const isMobile = useContext(isMobileContext);
	if (isMobile) {
		return (
			<ContainerMobile>
				<LogoVandyHacksTextStyleMobile>
					<LogoVandyHacksText/>
					{/* <div>
						<img src={top}/>
						<img src={middle}/>
						<img src={bottom}/>
					</div> */}
				</LogoVandyHacksTextStyleMobile>
				<ButtonContainer>
					<SocialMedias />
				</ButtonContainer>
			</ContainerMobile>
		);
	} else
		return (
			<Container>
				<LogoVandyHacksTextStyle>
					<LogoVandyHacksText/>
				{/* <div>
						<img src={top}/>
						<img src={middle}/>
						<img src={bottom}/>
					</div> */}
				</LogoVandyHacksTextStyle>
				<ButtonContainer>
					<StyledButton onClick={() => (window.location = 'https://hackerguide.vandyhacks.org')}>
						Hacker Guide
					</StyledButton>
					<SocialMedias />
				</ButtonContainer>
			</Container>
		);
};

const UpperLeftAnimated = () => <ScrollAnimateInLineSvg SvgElement={<UpperLeft />} />;

export default UpperLeftAnimated;
