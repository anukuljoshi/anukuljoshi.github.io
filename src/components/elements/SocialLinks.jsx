import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";

const SocialLinks = React.forwardRef((props, ref) => {
	// const { socialLinks } = props;

	let socialLinksContainer = useRef(null);
	let line = useRef(null);
	let link1 = useRef(null);
	let link2 = useRef(null);
	let link3 = useRef(null);
	let link4 = useRef(null);
	let link5 = useRef(null);

	// useEffect(() => {
	// 	let tl = gsap.timeline();
	// 	tl.to(socialLinksContainer.current, {
	// 		autoAlpha: 1,
	// 	});
	// 	tl.from(line.current, {
	// 		duration: 1,
	// 		height: 0,
	// 	});
	// 	tl.fromTo(
	// 		[
	// 			link1.current,
	// 			link2.current,
	// 			link3.current,
	// 			link4.current,
	// 			link5.current,
	// 		],
	// 		{
	// 			duration: 0,
	// 			opacity: 0,
	// 			scaleX: 0,
	// 			scaleY: 0,
	// 		},
	// 		{
	// 			duration: 0.5,
	// 			opacity: 100,
	// 			scaleX: 1,
	// 			scaleY: 1,
	// 			ease: "ease",
	// 			stagger: {
	// 				amount: 0.5,
	// 			},
	// 		}
	// 	);
	// }, []);

	const handleLinkClick = () => {
		console.log("link");
	};

	return (
		<div
			ref={ref}
			className="invisible hidden z-10 fixed left-5 top-0  lg:flex flex-col justify-center items-center text-gray-500"
		>
			<div ref={line} className="h-28 w-0.5 bg-gray-500"></div>
			<a
				ref={link1}
				href="http://linkedin.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i
					className="fab fa-linkedin-in text-2xl hover:text-secondary"
					onClick={handleLinkClick}
				></i>
			</a>
			<a
				ref={link2}
				href="http://github.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fab fa-github text-2xl hover:text-secondary"></i>
			</a>
			<a
				ref={link3}
				href="http://twitter.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fab fa-twitter text-2xl hover:text-secondary"></i>
			</a>
			<a
				ref={link4}
				href="http://instagram.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fab fa-instagram text-2xl hover:text-secondary"></i>
			</a>
			<a
				ref={link5}
				href="http://codepen.io"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fab fa-codepen text-2xl hover:text-secondary"></i>
			</a>
		</div>
	);
});

export default SocialLinks;