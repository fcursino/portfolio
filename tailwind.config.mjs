/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#042f2e',
				secondary: '#fafafa',
				dark: '#0f172a',
				light: '#ecfeff'
			}
		},
		fontFamily: {
			'sans': ['Noto', 'ui-sans-serif', 'system-ui']
		}
	},
	plugins: [],
}
