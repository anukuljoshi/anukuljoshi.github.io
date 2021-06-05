import React from 'react';

import NavbarContainer from './layout/NavbarContainer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import SocialLinks from './components/socials/SocialLinks';

function App() {
	return (
		<div className="">
			<SocialLinks></SocialLinks>
			<NavbarContainer></NavbarContainer>
			<Home></Home>
			<About></About>
			<Projects></Projects>
			<Contact></Contact>
		</div>
	);
}

export default App;
