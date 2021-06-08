import React, { useEffect, useRef } from 'react'

import {gsap} from 'gsap';

function Loader() {
    let loader = useRef(null);
    useEffect(() => {
        // let tl = gsap.timeline();
        gsap.to(loader.current, {
            duration: 1,
            rotate: 360
        });
    });
     
    return (
        <div className="absolute top-0 left-0 h-full w-full bg-backdrop">
            <div ref={loader} className="bg-primary h-20 w-20"></div>
        </div>
    )
}

export default Loader
