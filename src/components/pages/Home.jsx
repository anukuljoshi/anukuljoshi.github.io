import React, { useEffect, useRef } from 'react'

import gsap from 'gsap';


const setOffScreenLeft = (el) => {
	let area = el.getBoundingClientRect();
	return -(window.innerWidth - area.left);
}

const setOffScreenRight = (el) => {
	let area = el.getBoundingClientRect();
	return window.innerWidth - area.right;
}

const setOffScreenTop = (el) => {
	let area = el.getBoundingClientRect();
	return -(window.innerHeight - area.top);
}

const setOffScreenBottom = (el) => {
	let area = el.getBoundingClientRect();
	return window.innerHeight - area.bottom;
}

const getMidHeight = (el) => {
    console.log(window.innerHeight - el.offsetHeight);
    return window.innerHeight/2 - el.offsetHeight;
}

const getMidWidth = (el) => {
    console.log(window.innerHeight - el.offsetWidth);
    return window.innerWidth/2 - el.offsetWidth;
}

function Home() {
    const titleHeading = useRef(null);
    const titleFirst = useRef(null);
    const titleLast = useRef(null);
    const subTitle = useRef(null);

	useEffect(() => {
		let tl = gsap.timeline();
		// tl.set(titleFirst.current, { x: (i, el) => { return setOffScreenLeft(el)}});
		// tl.set(titleLast.current, { y: (i, el) => { return setOffScreenTop(el)}});
		tl.addLabel('titleTextStart');
		// tl.to(titleFirst.current, { duration: 2, x: 0, ease: "ease"}, 'titleTextStart');
		// tl.to(titleLast.current, { duration: 2, y: 0, ease: "ease"}, 'titleTextStart');
		// tl.from(subTitle.current, { duration: 2, y: 50, opacity: 0, ease:"ease"}, 'titleTextStart');
	}, []);

    return (
        <div id="home" ref={titleHeading} className="h-screen relative">
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
                <h1 className="h1 font-titil text-9xl font-black flex gap-5 text-secondary text-center">
                    <span ref={titleFirst}>{`anukul`}</span>
                    <span ref={titleLast}>{`Joshi`}</span>
                </h1>
                <h3 ref={subTitle} className="h3 ml-2 font-rubik font-bold text-secondary">SOFTWARE ENGINEER</h3>
            </div>
        </div>
    )
}

export default Home
