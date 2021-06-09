import React, { useRef } from "react";

import ContactForm from "../contact/ContactForm";

function Contact() {
	let sectionHeader = useRef();

	// social links
	let link1 = useRef(null);
	let link2 = useRef(null);
	let link3 = useRef(null);

	const handleLinkClick = () => {
		console.log("link");
	};
	return (
		<div id="contact" className="lg:px-32 md:px-20 px-8 font-cairo">
			<h1
				id="aboutHeader"
				ref={sectionHeader}
				className={`lg:text-8xl md:text-7xl text-6xl font-cairo font-black text-primary mb-10`}
			>
				Contact
			</h1>
			<div className="lg:flex mb-20">
				<div className="lg:w-1/2 w-11/12 mx-auto bg-primary lg:px-10 px-8 py-10 flex flex-col justify-center items-center">
					<h4 className="lg:text-5xl text-4xl font-bold text-bluebg lg:mb-5 mb-3">
						Get in touch
					</h4>
					<div className="text-text text-center lg:mb-5 mb-3">
						{/* <p className="mb-2">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur veritatis vel optio beatae aspernatur dolores praesentium ex sed, iure labore voluptatibus modi molestiae adipisci consectetur.
						</p>
						<p className="">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias harum, illo enim debitis veritatis temporibus dolorum facilis sapiente tempora. Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
						</p> */}
						<p className="mb-2">
							If you are interested in working together on a
							project, want to hire me, have a quesion for me or
							just want to say hi!,
						</p>
						<p className="">
							Feel free to drop me a message using the contact
							form or send a mail to{" "}
							<strong className="text-bluebg">
								anukuljoshi1@gmail.com
							</strong>{" "}
							or use one of my social media to connect with me.
						</p>
					</div>
					<div className="w-full flex justify-center items-center gap-5 text-bluebg">
						<a
							ref={link1}
							href="http://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-twitter text-3xl hover:text-text"></i>
						</a>
						<a
							ref={link2}
							href="http://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i
								className="fab fa-linkedin-in text-3xl hover:text-text"
								onClick={handleLinkClick}
							></i>
						</a>
						<a
							ref={link3}
							href="http://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-instagram text-3xl hover:text-text"></i>
						</a>
					</div>
				</div>
				<div className="lg:w-1/2 w-11/12 mx-auto bg-foreground lg:px-10 px-8 py-10 flex flex-col justify-center ">
					<ContactForm></ContactForm>
				</div>
			</div>
		</div>
	);
}

export default Contact;
