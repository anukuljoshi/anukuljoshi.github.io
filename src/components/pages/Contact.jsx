import React, { useRef, useEffect } from "react";

import { gsap } from 'gsap';

import SectionTitle from '../elements/SectionTitle';
import ContactForm from "../elements/ContactForm";
import { linkedin, twitter } from "../../exports/links";

function Contact() {
	// social links
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

	return (
		<div id="contact" className="lg:px-32 md:px-20 px-5 font-cairo mb-32">
            <SectionTitle title={'Contact'}></SectionTitle>
			<div ref={contactForm} className="lg:flex">
				<div className="lg:w-2/3 w-11/12 mx-auto bg-primary lg:px-10 px-8 py-10 flex flex-col justify-center items-center shadow-lg">
					<h4 className="lg:text-5xl text-4xl font-bold text-bluebg lg:mb-5 mb-3">
						Get in touch
					</h4>
					<div className="text-text text-center lg:mb-5 mb-3">
						<p className="mb-2">
							If you are interested in talking with me for a project collaboration, want to hire me or have a question for me,
						</p>
						<p className="">
							Feel free to drop me a message using the contact
							form or send a mail to{" "}
							<strong className="block text-xl text-bluebg">
								anukuljoshi1@gmail.com
							</strong>{" "}
							or connect with me on one of my social media account.
						</p>
					</div>
					<div className="w-full flex justify-center items-center gap-5 text-bluebg">
						<a
							href={linkedin}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-linkedin-in text-3xl hover:text-text"></i>
						</a>
						<a
							href={twitter}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-twitter text-3xl hover:text-text"></i>
						</a>
					</div>
				</div>
				{/* <div className="lg:w-1/2 w-11/12 mx-auto bg-foreground lg:px-10 px-8 py-6 flex flex-col justify-center ">
					<ContactForm></ContactForm>
				</div> */}
			</div>
		</div>
	);
}

export default Contact;
