import React, { useState, useEffect } from 'react';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import NavbarContainer from './layout/NavbarContainer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';

import Loader from './components/elements/Loader';

import FixedBackground from './components/background/FixedBackground';

function App() {
	const [pageLoading, setPageLoading] = useState(true);
	const [url, setUrl] = useState(window.location.href.split("#")[1]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.defaults({
            start: "top 80%",
            end: "top 80%",
        });
	}, []);

	useEffect(() => {
		if(pageLoading){
			return 
		}
		if(url){
			window.location.href = `#${url}`;
		}
	}, [pageLoading, url]);

	return (
		<>
			<FixedBackground></FixedBackground>
			{
				pageLoading ? (
					<Loader finishLoading={() => setPageLoading(false)}></Loader>
					) : (
						<div className="w-screen overflow-x-hidden">
							<NavbarContainer></NavbarContainer>
							<Home></Home>
							<About></About>
							<Projects></Projects>
							<Contact></Contact>
							<Footer></Footer>
						</div>
					)
			}
		</>
	);
}

export default App;
