import React, { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';

function ProjectCard(props) {
    const { name, photos } = props;
    let [imageIndex, setImageIndex] = useState(0);
    let [direction, setDirection] = useState(-1);


    let imageList = useRef(null);
    let tl = useRef();

    const prevSlide = () => {
        let newImageIndex = imageIndex - 1
        if(newImageIndex===-1){
            newImageIndex = photos.length-1;
        }
        setImageIndex(newImageIndex);
        setDirection(0);
    }

    const nextSlide = () => {
        console.log(imageIndex)
        let newImageIndex = imageIndex + 1
        if(newImageIndex===photos.length){
            newImageIndex = 0;
        }
        setImageIndex(newImageIndex);
        setDirection(1);
    }
    

    // // set postion for every image on load
    useEffect(() => {
        tl.current = gsap.timeline();
        for(let i=0;i<photos.length;i++){
            tl.current.set(imageList.current.children[i], {
                xPercent: i*100,
                modifiers: {
                    xPercent: gsap.utils.wrap(-100, (photos.length -1)*100)
                }
            });
        }
    }, [photos.length]);

    useEffect(() => {
        let prevIndex = imageIndex - 1;
        let nextIndex = imageIndex + 1;
        if(nextIndex===photos.length){
            nextIndex = 0
        }
        if(prevIndex<0){
            prevIndex = photos.length-1
        }
        if(direction===0){
            tl.current.addLabel('startMoveLeft');
            tl.current.fromTo(imageList.current.children[imageIndex], {
                duration: 0,
                scale: 0.75,
            }, {
                duration: 0.5,
                scale: 1
            }, 'startMoveLeft');
            tl.current.fromTo(imageList.current.children[prevIndex], {
                duration: 0,
                scale: 1,
            }, {
                duration: 0.5,
                scale: 0.75
            }, 'startMoveLeft');
            tl.current.to(imageList.current.children, {
                duration: 0.5,
                xPercent: `+=${100}`,
                ease: "ease",
                modifiers: {
                    xPercent: gsap.utils.wrap(-100, (photos.length -1)*100)
                }
            }, 'startMoveLeft');
        }
        if(direction===1){
            tl.current.addLabel('startMoveRight');
            tl.current.fromTo(imageList.current.children[imageIndex], {
                duration: 0,
                scale: 0.75,
            }, {
                duration: 0.5,
                scale: 1
            }, 'startMoveRight');
            tl.current.fromTo(imageList.current.children[prevIndex], {
                duration: 0,
                scale: 1,
            }, {
                duration: 0.5,
                scale: 0.75
            }, 'startMoveRight');
            tl.current.to(imageList.current.children, {
                duration: 0.5,
                xPercent: `-=100`,
                ease: "ease",
                modifiers: {
                    xPercent: gsap.utils.wrap((photos.length-2)*100, -200)
                }
            }, 'startMoveRight');
        }
    }, [imageIndex ,direction, photos.length]);

    return (
        <div className="w-11/12 mx-auto md:flex gap-3">
            <div className="w-7/12 relative">
                <div ref={imageList} className="flex w-full h-full relative overflow-hidden">
                    {
                        photos.map((photo, index) => {
                            return (
                                <img className="absolute" src={photo} alt={`${name}_${index}`} key={index} />
                            )
                        })
                    }
                </div>
                <button 
                    className="absolute top-1/2 left-0 px-2 py-1 text-6xl text-gray-500 hover:text-gray-300"
                    onClick={prevSlide}
                ><i className="fa fa-angle-left"></i></button>
                <button 
                    className="absolute top-1/2 right-0 px-2 py-1 text-6xl text-gray-500 hover:text-gray-300"
                    onClick={nextSlide}
                ><i className="fa fa-angle-right"></i></button>
            </div>
            <div className="w-5/12 bg-gray-700 text-text px-12 py-14 font-cairo">
                <h1 className="h3 font-cairo font-bold text-primary">{name}</h1>
                <ul className="px-5 py-12 text-lg">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                </ul>
            </div>
        </div>
    )
}

export default ProjectCard;
