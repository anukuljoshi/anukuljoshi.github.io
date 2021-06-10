import React, { useRef, useEffect } from 'react';

import { gsap } from 'gsap';


function SectionTitle(props) {
    const { title } = props;
    let sectionHeader = useRef(null);

    useEffect(() => {
        gsap.from(sectionHeader.current, {
            y: "+=25",
            opacity: 0,
            scrollTrigger: {
                trigger: sectionHeader.current
            }
        });
    });

    return (
        <h1
            id="aboutHeader"
            ref={sectionHeader}
            className={`lg:text-8xl md:text-7xl text-6xl font-cairo font-black text-secondary lg:mb-16 mb-10`}
        >
            {title}
        </h1>
    )
}

export default SectionTitle
