import React, { useEffect, useRef } from 'react'

import { gsap } from 'gsap';

function Circle(props) {
    const { bg, opacity, moveX, moveY } = props;
    const circle = useRef(null);

    useEffect(() => {
        let tl = gsap.timeline();
        // tl.set(circle.current, {
        //     opacity: 0
        // });
        // tl.to(circle.current, {
        //     opacity: 100,
        //     duration: 2
        // });
		tl.from(circle.current, { duration: 2, y: 0, opacity: 0, ease:"expo.in"}, 'titleTextStart');
        tl.to(circle.current, {
            x: moveX,
            y: moveY,
            duration: 2,
            // delay: 2,
            ease: "ease",
            yoyo: true,
            repeat: -1
        });
    }, [moveX, moveY])

    return (
        <div ref={circle} className={`border-${bg} rounded-full bg-transparent border-4 h-5 w-5 md:border-8 md:h-10 md:w-10 opacity-${opacity}`}>
            
        </div>
    )
}

export default Circle
