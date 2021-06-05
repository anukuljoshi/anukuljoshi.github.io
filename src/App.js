import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import NavbarContainer from './layout/NavbarContainer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';


function App() {
	return (
		<div className="">
			<NavbarContainer></NavbarContainer>
			<Home></Home>
			<About></About>
			<Projects></Projects>
			<Contact></Contact>
		</div>
	);
}

export default App;
