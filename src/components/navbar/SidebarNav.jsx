import React, { useEffect, useRef } from 'react';

import { gsap  } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

function SidebarNav(props) {
    const { sidebarVisible, setSidebarVisible } = props;
    let sidebar = useRef(null);
    let sidebarOverlay = useRef(null);
    let navLinksContainer = useRef(null);
    let homeLink = useRef(null);
    let aboutLink = useRef(null);
    let projectLink = useRef(null);
    let contactLink = useRef(null);

    let tl = useRef();

    useEffect(() => {
        tl.current = gsap.timeline({paused: true});
        tl.current.addLabel('startSideNavbar');
        tl.current.fromTo([sidebar.current, sidebarOverlay.current], {
            duration: 0,
            x: "100%"
        }, {
            duration: 1,
            x: "0%",
            ease: "power3.inOut",
        }, 'startSideNavbar');
        tl.current.fromTo([homeLink.current, aboutLink.current, projectLink.current, contactLink.current], {
            duration: 0,
            x: "150%",
        }, {
            duration: 1,
            x: "0%",
            ease: "power.inOut",
            stagger: {
                amount: 0.3
            }
        }, 'startSideNavbar')
    }, []);

    useEffect(() => {
        sidebarVisible ? tl.current.play() : tl.current.reverse();
    }, [sidebarVisible])

    const handleNavlinkClick = () => {
        setSidebarVisible(!sidebarVisible);
    }

    const handleOverlayClick = () => {
        setSidebarVisible(false);
    }

    return (
        <div>
            <div ref={sidebarOverlay} className="hidden lg:block z-10 fixed top-0 left-0 bottom-0 right-0" onClick={handleOverlayClick}>
            </div>
            <nav ref={sidebar} className={`fixed top-0 bottom-0 right-0 z-20 h-screen w-screen md:w-1/3 bg-primary flex flex-col justify-center items-start}`}>
                <div ref={navLinksContainer} className="md:w-8/12 w-10/12 mx-auto font-rubik md:text-6xl text-5xl font-bold flex flex-col text-backdrop text-center">
                    <a ref={homeLink} href="#home" onClick={handleNavlinkClick} className="cursor-pointer hover:text-secondary pb-5">Home</a>
                    <a ref={aboutLink} href="#about" onClick={handleNavlinkClick} className="cursor-pointer hover:text-secondary pb-5">About</a>
                    <a ref={projectLink} href="#projects" onClick={handleNavlinkClick} className="cursor-pointer hover:text-secondary pb-5">Projects</a>
                    <a ref={contactLink} href="#contact" onClick={handleNavlinkClick} className="cursor-pointer hover:text-secondary pb-5">Contact</a>
                </div>
            </nav>
        </div>
    )
}

export default SidebarNav
