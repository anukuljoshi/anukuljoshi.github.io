import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";

import ImageSlider from '../elements/ImageSlider';

function ProjectCardRight(props) {
	const { name, tech, info, photos, github, live } = props;

	let projectCard = useRef(null);


	// animation for when card enters view port
	useEffect(() => {
		gsap.from(projectCard.current, {
			y: "+=25",
			opacity: 0,
			scrollTrigger: {
				trigger: projectCard.current
			}
		})
	}, [])

	return (
		<div ref={projectCard} className="w-11/12 mx-auto lg:h-72 lg:flex lg:gap-5 mb-16">
			<div className="lg:hidden lg:w-5/12 w-full h-full relative">
				<ImageSlider photos={photos} name={name}></ImageSlider>
			</div>
			<div className="lg:w-7/12 w-full h-full text-text lg:px-10 flex flex-col py-8 lg:py-0 lg:justify-end justify-center items-start font-cairo">
                <div className="mb-3">
                    <h3 className="h3 font-cairo font-bold text-primary">{name}</h3>
                    <div className="text-xl font-bold font-cairo text-secondary flex gap-3"> 
                        {
                            tech.map((item, index) => {
                                return (
                                    <span className="mb-1" key={index}>{item}</span>
                                )
                            }) 
                        }
                    </div>
                </div>
                <div id="project-desc" className="z-10 py-5 px-5 mb-5 bg-foreground rounded-md shadow-lg hover:shadow-2xl">
                    {
                        info.map((item, index) => {
                            return (
                                <p className="mb-1" key={index}>{item}</p>
                            )
                        })
                    }
                </div>
                <div className="flex justify-end gap-5">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <button className="px-2 py-1 bg-text text-gray-600 shadow-lg"><i className="fab fa-github"></i> Source Code</button>
                    </a>
                    <a href={live} target="_blank" rel="noopener noreferrer">
                        <button className="px-2 py-1 bg-text text-gray-600 shadow-lg"><i className="fa fa-globe"></i> Live Demo</button>
                    </a>
                </div>
			</div>
            <div className="lg:block hidden lg:w-5/12 w-full h-full relative">
				<ImageSlider photos={photos} name={name}></ImageSlider>
			</div>
		</div>
	);
}

export default ProjectCardRight;
