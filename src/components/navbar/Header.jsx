import React from "react";

function Header(props) {
	const { sidebarVisible, setSidebarVisible } = props;

	let navToggle = () => {
		setSidebarVisible(!sidebarVisible);
		document.body.classList.toggle('lock-scroll');
	}
	
	return (
		<header className="fixed top-5 right-5 z-50">
			<div
				onClick={navToggle}
				className={`flex flex-col items-center justify-evenly w-12 h-12 bg-transparent cursor-pointer`}
			>
				<span
					className={`duration-500 w-11 h-2  ${
						sidebarVisible ? "transform origin-top-left rotate-45 bg-bluebg" : "bg-primary"
					}`}
				></span>
				<span
					className={`w-11 h-2 ${
						sidebarVisible ? "w-0 h-0 opacity-0" : "bg-primary"
					}`}
				></span>
				<span
					className={`duration-500 w-11 h-2 ${
						sidebarVisible ? "transform origin-bottom-left -rotate-45 bg-bluebg" : "bg-primary"
					}`}
				></span>
			</div>
		</header>
	);
}

export default Header;
