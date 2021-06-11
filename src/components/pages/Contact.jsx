import React, { useRef, useEffect } from "react";

import { gsap } from 'gsap';

import SectionTitle from '../elements/SectionTitle';
import ContactForm from "../contact/ContactForm";

function Contact() {
	// social links
	let link1 = useRef(null);
	let link2 = useRef(null);
	let link3 = useRef(null);
	let contactForm = useRef(null);

	useEffect(() => {
		gsap.from(contactForm.current, {
			y: "+=25",
			opacity: 0,
			scrollTrigger: {
				trigger: contactForm.current
			}
		})
	}, []);

	const handleLinkClick = () => {
		console.log("link");
	};

	return (
		<div id="contact" className="lg:px-32 md:px-20 px-5 font-cairo mb-32">
            <SectionTitle title={'Contact'}></SectionTitle>
			<div ref={contactForm} className="lg:flex shadow-2xl">
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
							project, want to hire me, have a question for me or
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
							ref={link2}
							href="http://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-twitter text-3xl hover:text-text"></i>
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
				<div className="lg:w-1/2 w-11/12 mx-auto bg-foreground lg:px-10 px-8 py-6 flex flex-col justify-center ">
					<ContactForm></ContactForm>
				</div>
			</div>
		</div>
	);
}

export default Contact;
