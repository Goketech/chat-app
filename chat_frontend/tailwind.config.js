/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1DA1F2",
				secondary: {
					100: "#E1F5FE",
					200: "#B3E5FC",
				},
			},
		},
	},
	plugins: [],
};
