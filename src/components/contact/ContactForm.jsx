import React from "react";

function ContactForm() {
	return (
		<form action="" className="font-cairo">
			<div className="mb-3">
				<label 
                    className="text-text block mb-1" 
                    htmlFor="name"
                >
					Name
				</label>
				<input
					className="bg-gray-300 w-full px-3 py-1 text-lg text-foreground font-semibold"
					type="text"
					name="name"
					id="name"
				/>
			</div>
			<div className="mb-3">
				<label 
                    className="text-text block mb-1" 
                    htmlFor="email"
                >Email</label>
				<input
					className="bg-gray-300 w-full px-3 py-1 text-lg text-foreground font-semibold"
					type="email"
					name="email"
					id="email"
				/>
			</div>
			<div className="mb-3">
				<label 
                    className="text-text block mb-1" 
                    htmlFor="message"
                >Message</label>
				<textarea
					className="bg-gray-300 w-full px-3 py-1 text-lg text-foreground font-semibold"
					name="message"
					id="message"
					cols="30"
					rows="5"
				></textarea>
			</div>
		</form>
	);
}

export default ContactForm;
