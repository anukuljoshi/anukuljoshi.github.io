import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

function SidebarNav(props) {
    const { sidebarVisible, setSidebarVisible } = props;
    let sidebar = useRef(null);
    let sidebarOverlay = useRef(null);
    let tl = useRef();

    useEffect(() => {
        tl.current = gsap.timeline({paused: true});
        tl.current.fromTo([sidebar.current, sidebarOverlay.current], {
            duration: 0,
            x: "100%"
        }, {
            duration: 1,
            x: "0%",
            ease: "power3.inOut",
        });
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
            <div ref={sidebarOverlay} className="z-10 fixed top-0 left-0 bottom-0 right-0" onClick={handleOverlayClick}>
            </div>
            <nav ref={sidebar} className={`fixed top-0 bottom-0 right-0 z-20 h-screen w-screen md:w-1/2 bg-primary flex flex-col justify-center items-start}`}>
                <div className="w-10/12 md:w-8/12 mx-auto font-rubik text-5xl md:text-6xl font-bold flex flex-col gap-2 md:gap-5 text-backdrop">
                    <span>
                        <a href="#home" onClick={handleNavlinkClick} className=" cursor-pointer hover:text-secondary">Home</a>
                    </span>
                    <span>
                        <a href="#about" onClick={handleNavlinkClick} className="cursor-pointer hover:text-secondary">About</a>
                    </span>
                    <span>
                        <a href="#projects" onClick={handleNavlinkClick} className="cursor-pointer hover:text-secondary">Projects</a>
                    </span>
                    <span>
                        <a href="#contact" onClick={handleNavlinkClick} className="cursor-pointer hover:text-secondary">Contact</a>
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default SidebarNav
