import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

// import { setOffScreenTop, setOffScreenBottom } from '../../utils/gsap';

function Cross(props) {
    const { bg, opacity, moveX, moveY } = props;
    const cross = useRef();

    useEffect(() => {
        let tl = gsap.timeline();
        // tl.set(cross.current, {
        //     opacity: 0
        // });
        // tl.to(cross.current, {
        //     opacity: 100,
        //     duration: 2
        // });
		tl.from(cross.current, { duration: 2, y: 0, opacity: 0, ease:"expo.in"}, 'titleTextStart');
        tl.to(cross.current, {
            x: moveX,
            y: moveY,
            opacity: 100,
            duration: 2,
            // delay: 2,
            ease: "ease",
            yoyo: true,
            repeat: -1
        });
    }, [moveX, moveY])

    return (
        <div ref={cross} className={`flex flex-col opacity-${opacity}`}>
            <span className={`w-6 h-1 mb-3 md:mb-6 md:w-12 md:h-2 bg-${bg} transform origin-top-left rotate-45`}></span>
            <span className={`w-6 h-1 md:w-12 md:h-2 bg-${bg} transform origin-bottom-left -rotate-45`}></span>
        </div>
    )
}

export default Cross
