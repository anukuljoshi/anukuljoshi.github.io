import React, { useRef } from "react";

import ProjectCard from "../projects/ProjectCard";

import Sort from "../../images/projects/sort/main.png";
import Bubble from "../../images/projects/sort/bubble.png";
import Merge from "../../images/projects/sort/merge.png";

import DesktopLogin from "../../images/projects/social/desktop_login.png";
import DesktopHome from "../../images/projects/social/desktop_home.png";
import DesktopPost from "../../images/projects/social/desktop_post.png";
import DesktopFollower from "../../images/projects/social/desktop_follower.png";
import DesktopEdit from "../../images/projects/social/desktop_edit.png";
import MobileHome from "../../images/projects/social/mobile_home.png";
import MobilePost from "../../images/projects/social/mobile_post.png";
import MobileFollower from "../../images/projects/social/mobile_follower.png";

function Projects() {
	let sectionHeader = useRef();

	return (
		<div id="projects" className="lg:px-32 md:px-20 px-8">
			<h1
				id="aboutHeader"
				ref={sectionHeader}
				className={`lg:text-8xl md:text-7xl text-6xl font-cairo font-black text-primary mb-10`}
			>
				My Work
			</h1>
			<h3 className="h3 px-5 text-primary font-cairo mb-5 font-bold">
				Projects
			</h3>
			<ProjectCard
				name={"Sorting Visualizer"}
				tech={["ReactJS", "TailwindCSS"]}
				info={[
					"A web app built to visualize classic sorting algorithms.",
					"Algorithms included are Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, Quick Sort and Heap Sort.",
				]}
				photos={[Sort, Bubble, Merge]}
				github={"https://github.com/anukuljoshi/sort-visualizer-v2"}
				live={"https://anukuljoshi.github.io/sort-visualizer-v2/"}
			></ProjectCard>
			<ProjectCard
				name={"Social Club"}
				tech={["Django", "ReactJS"]}
				info={[
					"A social network website where users can create small text posts.",
					"Users can also follow each other and create and upvote/downvote posts.",
				]}
				photos={[
					DesktopHome,
					DesktopLogin,
					DesktopPost,
					DesktopFollower,
					DesktopEdit,
					MobileHome,
					MobilePost,
					MobileFollower,
				]}
				github={"https://github.com/anukuljoshi/sort-visualizer-v2"}
				live={"http://anukuljoshi.pythonanywhere.com"}
			></ProjectCard>
			<h3 className="h3 px-5 text-primary font-cairo mb-5 font-bold">
				Components
			</h3>
			<div className="w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1 mb-20">
				<iframe
					height="265"
					style={{width: '100%'}}
					scrolling="no"
					title="infinite slide v2 (absolute position)"
					src="https://codepen.io/anukuljoshi/embed/JjWBjKM?height=265&theme-id=dark&default-tab=result"
					frameborder="no"
					loading="lazy"
					allowtransparency="true"
					allowfullscreen="true"
				>
					See the Pen{" "}
					<a href="https://codepen.io/anukuljoshi/pen/JjWBjKM">
						infinite slide v2 (absolute position)
					</a>{" "}
					by Anukul Joshi (
					<a href="https://codepen.io/anukuljoshi">@anukuljoshi</a>)
					on <a href="https://codepen.io">CodePen</a>.
				</iframe>
			</div>
		</div>
	);
}

export default Projects;
