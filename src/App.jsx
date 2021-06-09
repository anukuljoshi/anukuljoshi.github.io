import React, { useState, useEffect } from 'react';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import NavbarContainer from './layout/NavbarContainer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import SocialLinks from './components/socials/SocialLinks';

function App() {
	const [pageLoading, setPageLoading] = useState(true);

	
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.defaults({
            start: "top 80%",
            end: "top 80%",
            markers: true,
            scrub: 1,
        });
		setPageLoading(false);
	}, []);


	return (
		<div className="w-screen overflow-x-hidden">
			{
				pageLoading ? (
					<div> Loading...</div>
				) : (
					<>
						<SocialLinks></SocialLinks>
						<NavbarContainer></NavbarContainer>
						<Home></Home>
						<About></About>
						<Projects></Projects>
						<Contact></Contact>
						<Footer></Footer>
					</>
				)
			}
		</div>
	);
}

export default App;
