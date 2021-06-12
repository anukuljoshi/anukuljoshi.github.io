module.exports = {
	purge: {
		enabled: true,
		content: [
			'./src/**/*.jsx',
			'./src/**/*.js',
			'./public/index.html'
		]
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				backdrop: "#252a34",
				foreground: "#112240",
				bluebg: "#0A192F",
				primary: "#ff2e63",
				secondary: "#08d9d6",
				highlight: "#64FFDA",
				text: "#eaeaea",
			},
			fontFamily: {
				aleg: [
					"Alegreya",
					"Helvetica",
					"Verdana",
					"Monospace",
					"Arial",
				],
				cairo: ["Cairo", "Helvetica", "Verdana", "Monospace", "Arial"],
				rubik: ["Rubik", "Helvetica", "Verdana", "Monospace", "Arial"],
				titil: [
					"Titillium Web",
					"Helvetica",
					"Verdana",
					"Monospace",
					"Arial",
				],
				concert: [
					"Concert One",
					"Helvetica",
					"Verdana",
					"Monospace",
					"Arial",
				],
			},
		},
	},
	variants: {
		extend: {
			fontSize: ["hover", "focus"],
		},
	},
	plugins: [],
};
