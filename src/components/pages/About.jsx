import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

import certificate from '../../svgs/undraw_certificate.svg';
import working from '../../svgs/undraw_working_from_anywhere.svg';


function About() {
    let sectionHeader = useRef(null);
    let descriptionSvgContainer = useRef(null);
    let descriptionSvgContainerMobile = useRef(null);
    let descriptionContainer = useRef(null);
    let skillsSvgContainer = useRef(null);
    let skillsSvgContainerMobile = useRef(null);
    let skillsContainer = useRef(null);

    useEffect(() => {
        let tl = gsap.timeline();
        tl.fromTo(sectionHeader.current, {
            duration: 0,
            yPercent: 50,
            opacity: 0
        }, {
            duration: 1,
            yPercent: 0,
            opacity: 1,
            ease: "ease",
            scrollTrigger: {
                trigger: sectionHeader.current,
                end: "bottom 60%"
            },
        });
        tl.fromTo(descriptionContainer.current, {
            duration: 0,
            xPercent: 150,
        }, {
            duration: 2,
            xPercent: 0,
            ease: "ease",
            scrollTrigger: {
                trigger: descriptionContainer.current
            },
        });
        tl.fromTo(descriptionSvgContainer.current, {
            duration: 0,
            xPercent: -150,
        }, {
            duration: 2,
            xPercent: 0,
            ease: "ease",
            scrollTrigger: {
                trigger: descriptionSvgContainer.current
            },
        }, 'startAboutSection');
        tl.fromTo(descriptionSvgContainerMobile.current, {
            duration: 0,
            xPercent: -150,
        }, {
            duration: 2,
            xPercent: 0,
            ease: "ease",
            scrollTrigger: {
                trigger: descriptionSvgContainerMobile.current
            },
        });
        tl.fromTo(skillsContainer.current, {
            duration: 0,
            xPercent: -150,
        }, {
            duration: 2,
            xPercent: 0,
            ease: "ease",
            scrollTrigger: {
                trigger: skillsContainer.current
            },
        });
        tl.fromTo(skillsSvgContainer.current, {
            duration: 0,
            xPercent: 150,
        }, {
            duration: 2,
            xPercent: 0,
            ease: "ease",
            scrollTrigger: {
                trigger: skillsSvgContainer.current
            },
        });
        tl.fromTo(skillsSvgContainerMobile.current, {
            duration: 0,
            xPercent: 150,
        }, {
            duration: 2,
            xPercent: 0,
            ease: "ease",
            scrollTrigger: {
                trigger: skillsSvgContainerMobile.current
            },
        });
    }, []);

    return (
        <div className={`lg:px-32 md:px-20 px-8`}>
            <h1 
                id="aboutHeader" 
                ref={sectionHeader}
                className={`lg:text-8xl md:text-7xl text-6xl font-cairo font-black text-primary lg:mb-16 mb-10`}>About Me</h1>
            <div className={`lg:flex gap-10 block lg:px-10 px-5 lg:mb-40 mb-20`}>
                <div 
                    ref={descriptionSvgContainerMobile} className="lg:hidden flex">
                    <img className="w-4/12" src={working} alt="About Me" />
                </div>
                <div 
                    ref={descriptionSvgContainer} 
                    className="lg:flex hidden w-5/12 justify-start items-center">
                    <img id="aboutMeImg" className="lg:w-full w-4/12" src={working} alt="About Me" />
                </div>
                <div 
                    id="descriptionContainer"
                    ref={descriptionContainer} 
                    className={`flex items-center lg:w-8/12  mx-auto bg-foreground text-text shadow-lg px-10 lg:py-16 md:py-12 py-10`}>
                    <div className="w-full">
                        <h4 className="h4 font-bold text-primary mb-3">Hello, my name is <span className="text-secondary">Anukul Joshi.</span></h4>
                        <p className={`font-cairo px-2`}>
                            I am a full-stack web developer with experience in languages like Python, JavaScript, HTML, CSS and frameworks and libraries such as Django, ReactJS, Express, TailwindCSS.
                        </p>
                    </div>
                </div>
            </div>
            <div className={`lg:flex gap-10 block lg:px-10 px-5 lg:mb-40 mb-20`}>
                <div ref={skillsSvgContainerMobile} className="lg:hidden mx-auto flex items-center">
                    <div className="lg:hidden block w-6/12"></div>
                    <img className="lg:w-full w-4/12 mx-auto" src={certificate} alt="About Me" />
                </div>
                <div ref={skillsContainer} className={`flex items-center lg:w-8/12  mx-auto bg-foreground text-text shadow-lg px-10 lg:py-16 md:py-12 py-10`}>
                    <div className="w-full">
                        <h4 className="h4 font-bold mb-3 text-primary">Things I can work with.</h4>
                        <div className=" grid grid-cols-4">
                            <div>Python</div>
                            <div>JavaScript</div>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>Django</div>
                            <div>React</div>
                            <div>NodeJS</div>
                            <div>Express</div>
                            <div>TailwindCSS</div>
                            <div>SQL</div>
                            <div>BootStrap</div>
                            <div>GSAP</div>
                            <div>REST</div>
                            <div>JSON</div>
                            <div>MongoDB</div>
                            <div>React-Query</div>
                            <div>Redux</div>
                            <div>Git</div>
                        </div>
                    </div>
                </div>
                <div ref={skillsSvgContainer} className="lg:flex hidden w-5/12 justify-start items-center">
                    <img className="w-full" src={certificate} alt="About Me" />
                </div>
            </div>
        </div>
    )
}

export default About
