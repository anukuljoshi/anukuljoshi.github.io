import React from "react";

function ContactForm() {
	return (
		<form action="" className="font-cairo">
			<div className="mb-3">
				<label className="text-text text-sm block mb-1" htmlFor="name">
					Name
				</label>
				<input
					className="bg-gray-300 w-full px-3 py-1 text-lg text-foreground font-semibold"
					type="text"
					name="name"
					id="name"
					placeholder="your name"
				/>
			</div>
			<div className="mb-3">
				<label className="text-text text-sm block mb-1" htmlFor="email">
					Email
				</label>
				<input
					className="bg-gray-300 w-full px-3 py-1 text-lg text-foreground font-semibold"
					type="email"
					name="email"
					id="email"
					placeholder="yourname@example.com"
				/>
			</div>
			<div className="mb-3">
				<label
					className="text-text text-sm block mb-1"
					htmlFor="message"
				>
					Message
				</label>
				<textarea
					className="bg-gray-300 w-full px-3 py-1 text-lg text-foreground font-semibold"
					name="message"
					id="message"
					cols="30"
					rows="5"
					placeholder="Your message..."
				></textarea>
			</div>
			<div className="text-center">
				<button
					type="submit"
					className="px-3 py-1 border-2 border-text font-semibold text-text bg-foreground hover:text-foreground hover:bg-text cursor-pointer"
				>
					<i className="fa fa-paper-plane pr-3"></i>Send
				</button>
			</div>
		</form>
	);
}

export default ContactForm;
