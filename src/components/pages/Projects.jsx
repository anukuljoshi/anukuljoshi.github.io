import React, { useEffect, useRef } from 'react';

import ProjectCard from '../projects/ProjectCard';

import Sort from '../../images/projects/sort/main.png';
import Bubble from '../../images/projects/sort/bubble.png';
import Merge from '../../images/projects/sort/merge.png';

function Projects() {
    let sectionHeader = useRef();

    return (
        <div id="projects" className="lg:px-32 md:px-20 px-8">
            <h1 
                id="aboutHeader" 
                ref={sectionHeader}
                className={`lg:text-8xl md:text-7xl text-6xl font-cairo font-black text-primary lg:mb-16 mb-10`}
            >
                Projects
            </h1>
            <ProjectCard name={'Sorting Visualizer'} photos={[Sort, Bubble, Merge]}></ProjectCard>
        </div>
    )
}

export default Projects
