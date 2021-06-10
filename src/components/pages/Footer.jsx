import React, { useRef, useEffect } from "react";

import { gsap } from 'gsap';

function Footer() {
	let footer = useRef(null);
	let link1 = useRef(null);
	let link2 = useRef(null);
	let link3 = useRef(null);
	let link4 = useRef(null);
	let link5 = useRef(null);

	useEffect(() => {
		gsap.from(footer.current.children, {
			y: "+=25",
			opacity: 0,
			scrollTrigger: {
				trigger: footer.current
			},
			stagger: {
				amount: 0.5
			}
		})
	}, []);

	const handleLinkClick = () => {
		console.log("link");
	};

	return (
		<div ref={footer} className="text-center text-sm bg-foreground lg:px-32 md:px-20 px-5 font-cairo py-8 text-highlight relative">
			<div className="w-full lg:hidden flex justify-center items-center gap-5 text-gray-400 mt-3 mb-5">
				<a
					ref={link1}
					href="http://linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i
						className="fab fa-linkedin-in text-3xl hover:text-highlight"
						onClick={handleLinkClick}
					></i>
				</a>
				<a
					ref={link2}
					href="http://github.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-github text-3xl hover:text-highlight"></i>
				</a>
				<a
					ref={link3}
					href="http://twitter.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-twitter text-3xl hover:text-highlight"></i>
				</a>
				<a
					ref={link4}
					href="http://instagram.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-instagram text-3xl hover:text-highlight"></i>
				</a>
				<a
					ref={link5}
					href="http://codepen.io"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-codepen text-3xl hover:text-highlight"></i>
				</a>
			</div>
			<div className="lg:mb-4 mb-3">
				<p className="lg:mb-4 mb-3">
					Designed and Created by 
					<br />
					<a className="text-base" href="https://linkedin.com">Anukul Joshi</a>
					<br />
					with ReactJS, TailwindCSS and GSAP.
				</p>
				<a className="inline-block px-2 py-1 font-semibold border-2 border-highlight hover:bg-highlight hover:text-foreground" href="http://github.com" target="_blank" rel="noopener noreferrer">
					<i className="fab fa-github"></i> Source Code
				</a>
			</div>
		</div>
	);
}

export default Footer;
