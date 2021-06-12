import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";

import Resume from "../../images/ANUKUL_JOSHI_CV.pdf";
import { linkedin, github, twitter, codepen } from '../../utils/constants'

function SidebarNav(props) {
	const { sidebarVisible, setSidebarVisible } = props;
	let sidebarContainer = useRef(null);
	let sidebar = useRef(null);
	let sidebarOverlay = useRef(null);
	let navLinksContainer = useRef(null);
	let navLinks = useRef(null);
	let homeLink = useRef(null);
	let aboutLink = useRef(null);
	let projectLink = useRef(null);
	let contactLink = useRef(null);
    let resume = useRef(null);

	let links = useRef(null);

	let tl = useRef();

	useEffect(() => {
		tl.current = gsap.timeline({ paused: true });
		tl.current.to(sidebarContainer.current, {
			autoAlpha: 1,
		});
		tl.current.addLabel("navbarStart");
		tl.current.fromTo(
			sidebar.current,
			{
				xPercent: 100,
			},
			{
				duration: 0.5,
				xPercent: 0,
			},
			"navbarStart"
		);
		tl.current.fromTo(
			sidebarOverlay.current,
			{
				xPercent: 100,
				display: "block",
			},
			{
				duration: 0.5,
				xPercent: 0,
			},
			"navbarStart"
		);
        tl.current.fromTo(
            navLinks.current.children,
            {
                duration: 0,
                xPercent: 1000,
            },
            {
                duration: 0.5,
                xPercent: 0,
                ease: "power3",
                stagger: {
                    amount: 0.5,
                },
            },
            "navbarStart"
        );
        tl.current.fromTo(
            links.current.children,
            {
                duration: 0,
                xPercent: 1500,
            },
            {
                duration: 0.5,
                xPercent: 0,
                ease: "power3",
                stagger: {
                    amount: 0.5,
                },
            },
            "navbarStart"
        );
        tl.current.fromTo(
            resume.current,
            {
                duration: 0,
                xPercent: 1200,
            },
            {
                duration: 0.5,
                xPercent: 0,
                ease: "power3",
                stagger: {
                    amount: 0.5,
                },
            },
            "navbarStart"
        );
	}, []);

	useEffect(() => {
		sidebarVisible ? tl.current.play() : tl.current.reverse();
	}, [sidebarVisible]);

	const handleNavlinkClick = () => {
		setSidebarVisible(!sidebarVisible);
		document.body.classList.remove('lock-scroll');
	};

	const handleOverlayClick = () => {
		setSidebarVisible(false);
		document.body.classList.remove('lock-scroll');
	};

	return (
		<div ref={sidebarContainer} className="invisible">
			<div
				ref={sidebarOverlay}
				className="hidden z-30 fixed top-0 bottom-0 left-0 right-0"
				onClick={handleOverlayClick}
			></div>
			<nav
				ref={sidebar}
				className={`z-40 fixed top-0 right-0 bottom-0 lg:w-1/4 md:1/2 w-full  px-10 flex flex-col justify-center bg-primary lg:text-4xl text-3xl font-cairo font-bold text-bluebg`}
			>
				<div

                    ref={navLinksContainer}
					className="flex flex-col justify-center h-full"
				>   
                    <div
    					ref={navLinks}
                        className="flex flex-col justify-center mb-16"
                    >
                        <a
                            ref={homeLink}
                            href="#home"
                            onClick={handleNavlinkClick}
                            className="cursor-pointer hover:text-text border-b-2 border-bluebg hover:border-text px-3 pb-3 pt-5"
                        >
                            Home
                        </a>
                        <a
                            ref={aboutLink}
                            href="#about"
                            onClick={handleNavlinkClick}
                            className="cursor-pointer hover:text-text border-b-2 border-bluebg hover:border-text px-3 pb-3 pt-5"
                        >
                            About
                        </a>
                        <a
                            ref={projectLink}
                            href="#projects"
                            onClick={handleNavlinkClick}
                            className="cursor-pointer hover:text-text border-b-2 border-bluebg hover:border-text px-3 pb-3 pt-5"
                        >
                            Portfolio
                        </a>
                        <a
                            ref={contactLink}
                            href="#contact"
                            onClick={handleNavlinkClick}
                            className="cursor-pointer hover:text-text border-b-2 border-bluebg hover:border-text px-3 pb-3 pt-5"
                        >
                            Contact
                        </a>
                    </div>

					<div ref={links} className="flex gap-5 py-2 px-3">
						<a
							href={linkedin}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i
								className="fab fa-linkedin-in text-3xl hover:text-highlight"
							></i>
						</a>
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-github text-3xl hover:text-highlight"></i>
						</a>
						<a
							href={twitter}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-twitter text-3xl hover:text-highlight"></i>
						</a>
						<a
							href={codepen}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-codepen text-3xl hover:text-highlight"></i>
						</a>
					</div>
					<div ref={resume} className="px-3">
						<a 
                            className="px-3 border-2 border-bluebg text-xl font-semibold hover:text-text hover:bg-bluebg"
                            href={Resume} 
                            download
                        >
							Resume
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default SidebarNav;
