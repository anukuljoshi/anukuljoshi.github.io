import React, { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";

function ProjectCard(props) {
	const { name, tech, info, photos, github, live } = props;
	let numPhotos = photos.length;
	let [imageIndex, setImageIndex] = useState(0);
	let [direction, setDirection] = useState(0);

	let imageList = useRef(null);
	let tl = useRef();

	const prevSlide = () => {
		let newImageIndex = imageIndex - 1;
		if (newImageIndex === -1) {
			newImageIndex = numPhotos - 1;
		}
		setImageIndex(newImageIndex);
		setDirection(-1);
	};

	const nextSlide = () => {
		let newImageIndex = imageIndex + 1;
		if (newImageIndex === numPhotos) {
			newImageIndex = 0;
		}
		setImageIndex(newImageIndex);
		setDirection(1);
	};

	useEffect(() => {
		tl.current = gsap.timeline();
		for (let i = 0; i < numPhotos; i++) {
			tl.current.set(imageList.current.children[i], {
				xPercent: i * 100,
				modifiers: {
					xPercent: gsap.utils.wrap(-100, (numPhotos - 1) * 100),
				},
			});
		}
	}, [numPhotos]);

	useEffect(() => {
		let prevIndex = imageIndex - 1;
		if (prevIndex < 0) {
			prevIndex = numPhotos - 1;
		}
		let nextIndex = imageIndex + 1;
		if (nextIndex >= numPhotos) {
			nextIndex = 0;
		}
		if (direction === -1) {
			tl.current.addLabel("startSlideLeft");
			tl.current.fromTo(
				imageList.current.children[imageIndex],
				{
					duration: 0,
					scale: 0.75,
				},
				{
					duration: 0.5,
					scale: 1,
				},
				"startSlideLeft"
			);
			tl.current.fromTo(
				imageList.current.children[nextIndex],
				{
					duration: 0,
					scale: 1,
				},
				{
					duration: 0.5,
					scale: 0.75,
				},
				"startSlideLeft"
			);
			tl.current.to(
				imageList.current.children,
				{
					duration: 0.5,
					xPercent: "+=100",
					modifiers: {
						xPercent: gsap.utils.wrap(-100, (numPhotos - 1) * 100),
					},
				},
				"startSlideLeft"
			);
		}
		if (direction === 1) {
			tl.current.addLabel("startSlideRight");
			tl.current.fromTo(
				imageList.current.children[imageIndex],
				{
					duration: 0,
					scale: 0.75,
				},
				{
					duration: 0.5,
					scale: 1,
				},
				"startSlideRight"
			);
			tl.current.fromTo(
				imageList.current.children[prevIndex],
				{
					duration: 0,
					scale: 1,
				},
				{
					duration: 0.5,
					scale: 0.75,
				},
				"startSlideRight"
			);
			tl.current.to(
				imageList.current.children,
				{
					duration: 0.5,
					xPercent: "-=100",
					modifiers: {
						xPercent: gsap.utils.wrap((numPhotos - 2) * 100, -200),
					},
				},
				"startSlideRight"
			);
		}
		return () => {
			setDirection(0);
		};
	}, [imageIndex, direction, numPhotos]);

	const photoSliderElement = photos.map((photo, index) => {
		return (
            <div className="absolute h-full w-full" 
            key={index}>
                <img
                    className="h-full mx-auto"
                    src={photo}
                    key={index}
                    alt={`${name}_${index}`}
                />
            </div>
		);
	});

	return (
		<div className="w-11/12 mx-auto lg:h-72 lg:flex lg:gap-5 mb-16">
			<div className="lg:w-5/12 w-full h-full relative">
				<div
					onClick={prevSlide}
					className="z-10 absolute bottom-0 left-0 h-1/6 flex items-center cursor-pointer  text-3xl bg-gray-500 opacity-70 text-gray-200 px-2"
				>
					<i className="fa fa-angle-left"></i>
				</div>
				<div
					onClick={nextSlide}
					className="z-10 absolute bottom-0 right-0 h-1/6 flex items-center cursor-pointer  text-3xl bg-gray-500 opacity-70 text-gray-200 px-2"
				>
					<i className="fa fa-angle-right"></i>
				</div>
				<div ref={imageList} className="relative h-72 lg:h-full overflow-hidden shadow-lg hover:shadow-2xl">
					{photoSliderElement}
				</div>
			</div>
			<div className="lg:w-7/12 w-full h-full text-text lg:px-10 py-8 flex flex-col justify-center items-end font-cairo">
                <div className="mb-3 text-right">
                    <h3 className="h3 font-cairo font-bold text-primary">{name}</h3>
                    <div className="text-xl font-bold font-cairo text-secondary flex gap-3 justify-end"> 
                        {
                            tech.map((item, index) => {
                                return (
                                    <span className="mb-1" key={index}>{item}</span>
                                )
                            }) 
                        }
                    </div>
                </div>
                <div id="project-desc" className="z-10 py-5 px-5 mb-5 bg-foreground rounded-md text-right shadow-lg hover:shadow-2xl">
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
		</div>
	);
}

export default ProjectCard;
