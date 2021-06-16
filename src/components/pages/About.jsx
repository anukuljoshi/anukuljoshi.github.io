import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

import certificate from '../../svgs/undraw_certificate.svg';
import working from '../../svgs/undraw_working_from_anywhere.svg';

import { tech } from '../../exports/constants';

import SectionTitle from '../elements/SectionTitle';


function About() {
    let desc = useRef(null);
    let skills = useRef(null);
    let descriptionSvgContainer = useRef(null);
    let descriptionSvgContainerMobile = useRef(null);
    let descriptionContainer = useRef(null);
    let skillsSvgContainer = useRef(null);
    let skillsSvgContainerMobile = useRef(null);
    let skillsContainer = useRef(null);

    useEffect(() => {
        gsap.from(desc.current, {
            y: "+=25",
            opacity: 0,
            scrollTrigger: {
                trigger: desc.current
            }
        });
        gsap.from(skills.current, {
            y: "+=25",
            opacity: 0,
            scrollTrigger: {
                trigger: skills.current
            }
        })
    }, []);

    return (
        <div id="about" className={`lg:px-32 md:px-20 px-5`}>
            <SectionTitle title={'About Me'}></SectionTitle>
            <div ref={desc} className={`lg:flex gap-10 block lg:px-10 px-5 lg:mb-40 mb-20`}>
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
            <div ref={skills} className={`lg:flex gap-10 block lg:px-10 px-5 lg:mb-40 mb-20`}>
                <div ref={skillsSvgContainerMobile} className="lg:hidden mx-auto flex items-center">
                    <div className="lg:hidden block w-6/12"></div>
                    <img className="lg:w-full w-4/12 mx-auto" src={certificate} alt="About Me" />
                </div>
                <div ref={skillsContainer} className={`flex items-center lg:w-8/12  mx-auto bg-foreground text-text shadow-lg px-10 lg:py-16 md:py-12 py-10`}>
                    <div className="w-full">
                        <h4 className="h4 font-bold mb-3 text-primary">Technologies I have worked with.</h4>
                        <p>
							{
								tech.sort(() => Math.random() -0.5).map((skill, index) => {
									return (
										<span 
											className="font-medium px-1"
											style={{fontSize: `${skill.value*3}px`}} 
											key={index}>{`${skill.name} `}</span>
									)
								})
							}
                        </p>
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
