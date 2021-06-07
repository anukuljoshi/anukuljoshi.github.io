import React, { useEffect, useRef } from 'react'

import gsap from 'gsap';

import { setOffScreenLeft, setOffScreenRight } from '../../utils/gsap'

import Circle from '../background/Circle';
import Cross from '../background/Cross';

function Home() {
    const titleHeading = useRef(null);
    const titleFirst = useRef(null);
    const titleLast = useRef(null);
    const subTitle = useRef(null);

	useEffect(() => {
		let tl = gsap.timeline();
		tl.set(titleFirst.current, { x: (i, el) => { return setOffScreenLeft(el)}});
		tl.set(titleLast.current, { x: (i, el) => { return setOffScreenRight(el)}});
		tl.addLabel('titleTextStart');
		tl.to(titleFirst.current, { duration: 2, x: 0, ease: "ease"}, 'titleTextStart');
		tl.to(titleLast.current, { duration: 2, x: 0, ease: "ease"}, 'titleTextStart');
		tl.from(subTitle.current, { duration: 2, y: 0, opacity: 0, ease:"expo.in"}, 'titleTextStart');
        tl.addLabel('textEnd');
        // tl.
	}, []);

    return (
        <div id="home" ref={titleHeading} className="h-screen relative mb-10">
            <div className="absolute top-1/3 md:top-1/4 left-1/2 transform -translate-x-1/2">
                <div className="flex justify-end">
                    <Cross bg={`secondary`} opacity={100} moveX={-30} moveY={0}></Cross>
                    <Circle bg={`primary`} opacity={100} moveX={-30}moveY={0}></Circle>
                </div>
                <h1 className="h1 font-titil text-6xl md:text-9xl font-black flex gap-2 md:gap-5 text-secondary text-center">
                    <span ref={titleFirst}>{`anukul`}</span>
                    <span ref={titleLast}>{`Joshi`}</span>
                </h1>
                <h3 ref={subTitle} className="h3 text-lg md:text-4xl ml-1 font-cairo font-black text-secondary mb-1 md:mb-2">WEB DEVELOPER</h3>
                <div className="flex">
                    <Cross bg={`primary`} opacity={100} moveX={30} moveY={0}></Cross>
                    <Circle bg={`secondary`} opacity={100} moveX={30} moveY={0}></Circle>
                </div>
            </div>
        </div>
    )
}

export default Home
