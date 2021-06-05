import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

function SidebarNav(props) {
    const { sidebarVisible, setSidebarVisible } = props;
    let sidebar = useRef(null);
    let tl = useRef();
    useEffect(() => {
        tl.current = gsap.timeline({paused: true});
        tl.current.fromTo(sidebar.current, {
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

    return (
        <nav ref={sidebar} className={`fixed top-0 bottom-0 right-0 z-10 h-screen w-screen md:w-1/2 bg-primary flex flex-col justify-center items-start}`}>
            <div className="w-10/12 md:w-8/12 mx-auto font-rubik text-5xl md:text-6xl font-bold flex flex-col gap-2 md:gap-5 text-backdrop">
                <a href="#home" onClick={handleNavlinkClick} className="cursor-pointer hover:text-secondary">Home</a>
                <a href="#about" onClick={handleNavlinkClick} className="cursor-pointer hover:text-secondary">About</a>
                <a href="#projects" onClick={handleNavlinkClick} className="cursor-pointer hover:text-secondary">Projects</a>
                <a href="#contact" onClick={handleNavlinkClick} className="cursor-pointer hover:text-secondary">Contact</a>
            </div>
        </nav>
    )
}

export default SidebarNav
