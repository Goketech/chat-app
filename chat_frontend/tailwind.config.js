/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
        orange: {
          '100': '#FFD8B3',
          '200': '#FFB980',
          '300': '#FF984F',
          '400': '#FF7D33',
          '500': '#FF6600', 
          '600': '#E55E00',
          '700': '#CC5500',
          '800': '#B24C00',
          '900': '#993300',
        },
				primary: "#0B468C",
				secondary: {
					100: "#E1F5FE",
					200: "#B3E5FC",
				},
			},
		},
	},
	plugins: [],
};
