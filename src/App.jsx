import React, { useState, useEffect } from 'react';

import NavbarContainer from './layout/NavbarContainer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import SocialLinks from './components/socials/SocialLinks';

function App() {
	const [pageLoading, setPageLoading] = useState(true);

	useEffect(() => {
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
					</>
				)
			}
		</div>
	);
}

export default App;
