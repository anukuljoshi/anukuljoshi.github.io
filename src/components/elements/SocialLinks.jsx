import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";

import { linkedin, github, twitter, codepen } from '../../utils/constants';

const SocialLinks = React.forwardRef((props, ref) => {

	const handleLinkClick = () => {
		console.log("link");
	};

	return (
		<div
			ref={ref}
			className="invisible hidden z-10 fixed left-5 top-0  lg:flex flex-col justify-center items-center text-gray-500"
		>
			<div className="h-28 w-0.5 bg-gray-500"></div>
			<a
				href={linkedin}
				target="_blank"
				rel="noopener noreferrer"
			>
				<i
					className="fab fa-linkedin-in text-2xl hover:text-secondary"
					onClick={handleLinkClick}
				></i>
			</a>
			<a
				href={github}
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fab fa-github text-2xl hover:text-secondary"></i>
			</a>
			<a
				href={twitter}
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fab fa-twitter text-2xl hover:text-secondary"></i>
			</a>
			<a
				href={codepen}
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fab fa-codepen text-2xl hover:text-secondary"></i>
			</a>
		</div>
	);
});

export default SocialLinks;
