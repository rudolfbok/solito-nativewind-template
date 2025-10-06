const { theme } = require('app/design/tailwind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./app/**/*.{js,jsx,ts,tsx}', // expo-router pages
		'../../packages/**/*.{js,jsx,ts,tsx}', // shared packages
	],
	presets: [require('nativewind/preset')],
	theme: {
		...theme,
	},
};
