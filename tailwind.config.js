module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Circular Std', 'sans-serif'],
			},
			height: (theme) => ({
				'screen/2': '50vh',
				'screen/2.5': '45vh',
				'screen/3': 'calc(100vh / 3)',
				'screen/4': 'calc(100vh / 4)',
				'screen/5': 'calc(100vh / 5)',
			}),
		},
	},
	plugins: [],
};
