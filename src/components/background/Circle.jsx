import React, { useEffect, useRef } from 'react'

import { gsap } from 'gsap';

function Circle() {
    const tl = useRef();

    useEffect(() => {
        tl.current = gsap.timeline({ paused: true });
    
    }, [])

    return (
        <div className="rounded-full">
            
        </div>
    )
}

export default Circle
