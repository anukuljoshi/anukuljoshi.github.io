import React, { useRef, useEffect } from 'react';

import { gsap } from 'gsap';


function SectionTitle(props) {
    const { title } = props;
    let sectionHeader = useRef(null);

    useEffect(() => {
        let tl = gsap.timeline();
        tl.fromTo(sectionHeader.current, {
            duration: 0,
            yPercent: 50,
            opacity: 0
        }, {
            duration: 1,
            yPercent: 0,
            opacity: 1,
            ease: "ease",
            scrollTrigger: {
                trigger: sectionHeader.current,
                end: "bottom 60%"
            },
        });
    });

    return (
        <h1
            id="aboutHeader"
            ref={sectionHeader}
            className={`lg:text-8xl md:text-7xl text-6xl font-cairo font-black text-secondary mb-10`}
        >
            {title}
        </h1>
    )
}

export default SectionTitle
