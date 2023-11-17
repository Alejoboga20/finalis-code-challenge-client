/** @type {import('tailwindcss').Config} */

const colors = {
	primary: {
		light: '#EDF1FC',
		main: '#476FF2',
		dark: '#203680',
	},
	neutrals: {
		900: '#1C1C1F',
		800: '#2F3033',
		700: '#6D6E73',
		600: '#84858A',
		500: '#B3B4BA',
		400: '#D0D1D6',
		300: '#E4E5EB',
		200: '#F0F2F7  ',
		100: '#FAFBFC',
		white: '#FFFFFF',
	},
	success: {
		dark: '#006627',
		main: '#009E3D',
		light: '#EDFDF3',
	},
	error: {
		dark: '#5C0500',
		main: '#9E0800',
		light: '#FDEEED',
	},
	warning: {
		dark: '#998000',
		main: '#E0BD00',
		light: '#FDFAEB',
	},
	feedback: {
		alert: '#E07000',
	},
};

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
	theme: {
		extend: {
			colors,
		},
	},
	plugins: [],
};
