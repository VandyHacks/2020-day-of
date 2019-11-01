import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import Facebook from '../images/facebook.svg';
import Github from '../images/github.svg';
import Instagram from '../images/instagram.svg';
import Twitter from '../images/twitter.svg';

import isMobileContext from './isMobileContext';

const StyledFooter = styled.div`
	padding-top: 1.8em;
	padding-left: 0.3em;
	color: rgb(48, 72, 161);
	height: 60px;
	overflow: none;
	display: flex;
	justify-content: space-around;
	align-items: flex-start;

	p {
		margin: 0;
	}

	a {
		/* Makes the a tags the same height as their content */
		display: inline-flex;

		&:hover {
			cursor: pointer;
		}
	}

	/* Recolor the SVGs */
	path,
	rect,
	line {
		stroke: rgb(48, 72, 161);
	}

	@media screen and (max-width: 480px) {
		/* Column centered on the X-axis */
		flex-flow: column;
		align-items: center;

		/* Increase height and center on Y-axis */
		justify-content: center;
		height: 60px;
		padding: 0;

		p {
			/* Make text appear after icons on mobile only */
			order: 1;

			/* Add padding so icons don't touch the text */
			padding-top: 10px;
		}
	}
`;

const StyledFooterMobile = styled.div`
	padding: 0.2em 0 0 0.3em;
	margin-bottom: 0.5em;
	color: rgb(48, 72, 161);
	height: 60px;
	overflow: none;
	display: flex;
	justify-content: space-around;
	align-items: flex-start;

	p {
		margin: 0;
	}

	a {
		/* Makes the a tags the same height as their content */
		display: inline-flex;

		&:hover {
			cursor: pointer;
		}
	}

	/* Recolor the SVGs */
	path,
	rect,
	line {
		stroke: rgb(48, 72, 161);
	}

	@media screen and (max-width: 480px) {
		/* Column centered on the X-axis */
		flex-flow: column;
		align-items: center;

		/* Increase height and center on Y-axis */
		justify-content: center;
		height: 60px;
		padding: 0;

		p {
			/* Make text appear after icons on mobile only */
			order: 1;

			/* Add padding so icons don't touch the text */
			padding-top: 10px;
		}
	}
`;

let isInvert = false;

const SocialIcons = styled.div`
	a:not(:first-of-type) {
		/* Adds left margin to every social icon except the first one */
		margin-left: 5px;
	}
	a:last-of-type {
		margin-right: 5vw;
	}
	display: inline-flex;
`;

const changeTheme = () => {
	if (typeof document !== `undefined`) {
		if (!isInvert) {
			document.body.style = 'background: black; filter: invert(95%);';
			isInvert = true;
		} else {
			document.body.style = 'background: white; filter: invert(0%)';
			isInvert = false;
		}
	}
};

const ToggleIcon = () => (
	<svg
		className="theme-toggler"
		width={useContext(isMobileContext) ? '30' : '24'}
		height={useContext(isMobileContext) ? '30' : '24'}
		viewBox="0 0 48 48"
		fill="hsl(228, 53%, 34%)"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z"
		/>
	</svg>
);

const SocialMedias = () => {
	if (useContext(isMobileContext)) {
		return (
			<StyledFooterMobile>
				<SocialIcons>
					<a href="https://www.facebook.com/vandyhacks" rel="noopener noreferrer" target="_blank">
						<Facebook style={{ height: '30px', width: '30px' }} />
					</a>
					<a href="https://twitter.com/vandyhacks" rel="noopener noreferrer" target="_blank">
						<Twitter style={{ height: '30px', width: '30px' }} />
					</a>
					<a href="https://www.instagram.com/vandyhacks" rel="noopener noreferrer" target="_blank">
						<Instagram style={{ height: '30px', width: '30px' }} />
					</a>
					<a href="https://www.github.com/VandyHacks" rel="noopener noreferrer" target="_blank">
						<Github style={{ height: '30px', width: '30px' }} />
					</a>
					<a onClick={changeTheme}>
						<ToggleIcon />
					</a>
				</SocialIcons>
			</StyledFooterMobile>
		);
	}
	return (
		<StyledFooter>
			<SocialIcons>
				<a href="https://www.facebook.com/vandyhacks" rel="noopener noreferrer" target="_blank">
					<Facebook />
				</a>
				<a href="https://twitter.com/vandyhacks" rel="noopener noreferrer" target="_blank">
					<Twitter />
				</a>
				<a href="https://www.instagram.com/vandyhacks" rel="noopener noreferrer" target="_blank">
					<Instagram />
				</a>
				<a href="https://www.github.com/VandyHacks" rel="noopener noreferrer" target="_blank">
					<Github />
				</a>
				<a onClick={changeTheme}>
					<ToggleIcon />
				</a>
			</SocialIcons>
		</StyledFooter>
	);
};

export default SocialMedias;
