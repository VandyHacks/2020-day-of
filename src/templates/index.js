import React, { useState, useCallback, useEffect } from 'react';
// import { Link } from 'gatsby';
// try build again before i push it
import styled from 'styled-components';

import Dayof from '../components/dayOf';
import isMobileContext from '../components/isMobileContext';
import SEO from '../components/seo';

import '../../node_modules/animate.css/animate.min.css';
import '../css/layout.css';

const Container = styled.div`
	width: 100vw;
	margin: 0;
	height: 100vh;
	overflow: hidden;
`;

const ContainerMobile = styled.div`
	width: 100vw;
	margin: 0;
	height: 100vh;
	overflow-x: hidden;
	overflow-y: auto;
`;

const IndexPage = ({ pageContext: { events } }) => {
	const [isMobile, setIsMobile] = useState(undefined);

	const handleWindowResize = useCallback(() => {
		setIsMobile(window.innerWidth < 930);
	}, [setIsMobile]);

	useEffect(() => {
		if (typeof window !== `undefined`) {
			window.addEventListener('resize', handleWindowResize);
		}

		// First resize
		const timeout = setInterval(() => {
			handleWindowResize();
		}, 250);

		return () => {
			clearTimeout(timeout);
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [handleWindowResize]);

	if (isMobile === undefined) return null;

	return isMobile ? (
		<>
			<ContainerMobile>
				<SEO />
				<isMobileContext.Provider value={isMobile}>
					<Dayof events={events} />
				</isMobileContext.Provider>
				<a
					id="mlh-trust-badge"
					style={{
						display: 'block',
						maxWidth: '100px',
						minWidth: '60px',
						position: 'fixed',
						right: '50px',
						top: 0,
						width: '10%',
						zIndex: 10000,
					}}
					href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=blue"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-blue.svg"
						alt="Major League Hacking 2020 Hackathon Season"
						style={{ width: '100%' }}
					/>
				</a>
			</ContainerMobile>
		</>
	) : (
		<>
			<Container>
				<SEO />
				<isMobileContext.Provider value={isMobile}>
					<Dayof events={events} />
				</isMobileContext.Provider>
				<a
					id="mlh-trust-badge"
					style={{
						display: 'block',
						maxWidth: '100px',
						minWidth: '60px',
						position: 'fixed',
						right: '50px',
						top: 0,
						width: '10%',
						zIndex: 10000,
					}}
					href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=blue"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-blue.svg"
						alt="Major League Hacking 2020 Hackathon Season"
						style={{ width: '100%' }}
					/>
				</a>
			</Container>
		</>
	);
};

export default IndexPage;
