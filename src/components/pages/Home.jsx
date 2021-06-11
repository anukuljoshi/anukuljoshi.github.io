import React, { createRef, useEffect, useRef } from "react";

import gsap from "gsap";

import SocialLinks from "../elements/SocialLinks";

function Home() {
	const titleHeading = useRef(null);
	const homeTextContainer = useRef(null);
	const socialLinks = createRef();

	let tl = gsap.timeline({ paused: true });

	useEffect(() => {
		tl.to(titleHeading.current, {
			autoAlpha: 1,
		});
		tl.addLabel("textStart");
		tl.from(
			homeTextContainer.current.children,
			{
				duration: 1,
				opacity: 0,
				y: "+=25",
				stagger: {
					amount: 0.5,
				},
			},
			"textStart"
		);
		tl.addLabel("linksStart");
		tl.to(
			socialLinks.current,
			{
				autoAlpha: 1,
			},
			"linksStart"
		);
		tl.from(
			socialLinks.current[0],
			{
				duration: 1,
				yPercent: -100,
			},
			"linksStart"
		);
		tl.fromTo(
			Array.prototype.slice.call(socialLinks.current.children, [1]),
			{
				duration: 0,
				opacity: 0,
				scaleX: 0,
				scaleY: 0,
			},
			{
				duration: 1,
				opacity: 100,
				scaleX: 1,
				scaleY: 1,
				ease: "ease",
				stagger: {
					amount: 0.5,
				},
			},
			"linksStart"
		);
	}, []);

	useEffect(() => {
		tl.play();
	}, []);

	return (
		<div
			id="home"
			ref={titleHeading}
			className="invisible h-screen mb-10 font-cairo flex items-center justify-center"
		>
			<SocialLinks ref={socialLinks}></SocialLinks>
			<div ref={homeTextContainer} className="flex flex-col -mt-24">
				<h1 className="font-titil text-6xl md:text-9xl font-black text-secondary w-max">
					{"anukul Joshi"}
				</h1>
				<h3
					// ref={subTitle}
					className="text-lg md:text-4xl font-titil font-black text-secondary -mt-2"
				>
					WEB DEVELOPER
				</h3>
				<div className="font-titil font-semibold flex gap-3 mt-2">
					<a
						className="inline-block border-2 px-3 py-1  border-green-500 hover:bg-green-500 text-green-500 hover:text-bluebg text-xl"
						href="#projects"
					>
						Portfolio
					</a>
					<a
						className="inline-block border-2 px-3 py-1  border-green-500 hover:bg-green-500 text-green-500 hover:text-bluebg text-xl"
						href="#contact"
					>
						Get In Touch
					</a>
				</div>
			</div>
		</div>
	);
}

export default Home;
