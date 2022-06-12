import React, { useRef, useEffect } from "react";

import { gsap } from "gsap";

import SectionTitle from "../elements/SectionTitle";
import ProjectCardLeft from "../projects/ProjectCardLeft";
import ProjectCardRight from "../projects/ProjectCardRight";
import CodepenFrames from '../projects/CodepenFrames';

import { ProjectImages } from '../../exports/images';

function Projects() {
	let projectSubtitle = useRef(null);
	let codepenSubtitle = useRef(null);
	let codepenContainer = useRef(null);

	// animation for when card enters view port
	useEffect(() => {
		gsap.from(projectSubtitle.current, {
			y: "+=25",
			opacity: 0,
			scrollTrigger: {
				trigger: projectSubtitle.current,
			},
		});
		gsap.from(codepenSubtitle.current, {
			y: "+=25",
			opacity: 0,
			scrollTrigger: {
				trigger: codepenSubtitle.current,
			},
		});
		gsap.from(codepenContainer.current.children, {
			y: "+=25",
			opacity: 0,
			scrollTrigger: {
				trigger: codepenContainer.current,
			},
			stagger: {
				amount: 0.5,
			},
		});
	}, []);

	return (
		<div id="projects" className="lg:px-32 md:px-20 px-5">
			<SectionTitle title={"Portfolio"}></SectionTitle>
			<h3
				ref={projectSubtitle}
				className="h3 px-5 text-primary font-cairo mb-5 font-bold"
			>
				Projects
			</h3>
            <ProjectCardLeft 
                name={"E-Commerce Website"}
                tech={["Django", "Djangorestframework", "ReactJS", "Redux", "MaterialUI", "TailwindCSS"]}
                info={
                    [
                        "An e-commerce store where users can buy products grouped in different categories",
                        "Users can add or remove products in their cart",
                        "Users can create new orders and add address for their orders"
                ]}
                photos={ProjectImages.ECommerceImages}
            />
			<ProjectCardLeft
				name={"Sorting Visualizer"}
				tech={["ReactJS", "TailwindCSS"]}
				info={[
					"A web app built to visualize classic sorting algorithms.",
					"Algorithms included are Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, Quick Sort and Heap Sort.",
				]}
				photos={ProjectImages.SortImages}
				github={"https://github.com/anukuljoshi/sort-visualizer-v2"}
				live={"https://anukuljoshi.github.io/sort-visualizer-v2/"}
			></ProjectCardLeft>
			<ProjectCardRight
				name={"Twitter Clone"}
				tech={["Django", "ReactJS"]}
				info={[
					"A social network website where users can create posts.",
					"Users can also follow each other and upvote/downvote posts.",
				]}
				photos={ProjectImages.SocialImages}
				github={"https://github.com/anukuljoshi/django-social-club-dev"}
				live={"http://anukuljoshi.pythonanywhere.com"}
			></ProjectCardRight>
			<h3
				ref={codepenSubtitle}
				className="h3 px-5 text-primary font-cairo mb-5 font-bold"
			>
				Components
			</h3>
			<div
				ref={codepenContainer}
				className="w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-5 mb-20"
			>
				<CodepenFrames></CodepenFrames>	
			</div>
		</div>
	);
}

export default Projects;
