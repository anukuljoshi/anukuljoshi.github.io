import React, { useRef, useEffect } from 'react';

import { gsap } from 'gsap';


const Loader = (props) => {
	const { finishLoading } = props;

    let loader = useRef(null);

	let animate = () => {
		gsap.to(loader.current, {
			duration: 3,
			rotateZ: 360,
			onComplete: () => {
				finishLoading();
			}
		});
	} 

	useEffect(() => {
		animate();
	}, []);

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-transparent">
            <div ref={loader} className="h-20 w-20 bg-highlight"></div>
        </div>
    )
}

export default Loader
