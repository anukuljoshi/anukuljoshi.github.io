import React, { useRef, useEffect } from "react";

import { gsap } from "gsap";

import SectionTitle from "../elements/SectionTitle";
import ProjectCardLeft from "../projects/ProjectCardLeft";
import ProjectCardRight from "../projects/ProjectCardRight";

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
				name={"Sorting Visualizer"}
				tech={["ReactJS", "TailwindCSS"]}
				info={[
					"A web app built to visualize classic sorting algorithms.",
					"Algorithms included are Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, Quick Sort and Heap Sort.",
				]}
				photos={[Sort, Bubble, Merge]}
				github={"https://github.com/anukuljoshi/sort-visualizer-v2"}
				live={"https://anukuljoshi.github.io/sort-visualizer-v2/"}
			></ProjectCardLeft>
			<ProjectCardRight
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
				<iframe
					height="400"
					style={{ width: "100%" }}
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
				<iframe
					height="400"
					style={{ width: "100%" }}
					scrolling="no"
					title="locked door"
					src="https://codepen.io/anukuljoshi/embed/jOBvGEz?height=431&theme-id=dark&default-tab=result"
					frameborder="no"
					loading="lazy"
					allowtransparency="true"
					allowfullscreen="true"
				>
					See the Pen{" "}
					<a href="https://codepen.io/anukuljoshi/pen/jOBvGEz">
						locked door
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
