import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
// import { flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette"
// Custom implementation of flattenColorPalette to avoid internal import
const flattenColorPalette = (colors: any): any => {
	if (Object(colors) !== colors) {
		return colors;
	}

	return Object.assign(
		{},
		...Object.keys(colors).map((key) => {
			if (colors[key] && typeof colors[key] === 'object' && !Array.isArray(colors[key])) {
				// Recursively flatten nested objects
				const flatObject = flattenColorPalette(colors[key]);
				const mappedObject = Object.keys(flatObject).reduce((acc, nestedKey) => {
					// If the key is DEFAULT, use the parent key
					const newKey = nestedKey === 'DEFAULT' ? key : `${key}-${nestedKey}`;
					acc[newKey] = flatObject[nestedKey];
					return acc;
				}, {} as any);
				return mappedObject;
			} else {
				return { [key]: colors[key] };
			}
		})
	);
};

const svgToDataUri = require("mini-svg-data-uri");

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				blob: 'blob 7s infinite',
				tilt: 'tilt 10s infinite linear'
			},
			fontFamily: {
				garamond: ["var(--font-garamond)"],
			},
			keyframes: {
				tilt: {
					'0%,50%,100%': {
						transform: 'rotate(0deg)'
					},
					'25%': {
						transform: 'rotate(5deg)'
					},
					'75%': {
						transform: 'rotate(-5deg)'
					}
				},
				blob: {
					'0%': {
						backgroundColor: '#fbe2e3'
					},
					'33%': {
						backgroundColor: '#dbd7fb'
					},
					'66%': {
						backgroundColor: '#eed7f8'
					},
					'100%': {
						backgroundColor: '#f8ecd7'
					}
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	plugins: [
		addVariablesForColors,
		require("tailwindcss-animate"),
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					"bg-grid": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					"bg-grid-small": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					"bg-dot": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						)}")`,
					}),
				},
				{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
			);
		},
	],
	darkMode: "class",
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{ts,tsx}"],
//   darkMode: "class",
//   theme: {
//     // rest of the code
//   },
//   plugins: [
//     // rest of the code
//
//   ],
// };

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}

export default config;
