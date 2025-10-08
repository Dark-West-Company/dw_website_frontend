import fontFamily from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

import { useColors } from './src/lib/useColors';
const { generateBackgroundColors, generateColors } = useColors();

const baseBackgroundColor = '#0A1819'; // very dark cyan
const basePrimaryColor = '#CAE7ED'; // sky blue
const baseSecondaryColor = '#384028'; // dark green

const creamColor = '#EDECE5'; // light cream

const greenBackgroundColor = '#191F1B'; // very dark green
const greenDarkColor = '#364025'; // dark green
const greenMediumColor = '#516130'; // medium green
const greenLightColor = '#8B8F30'; // light green

const blueBackgroundColor = '#123150'; // very dark blue
const blueDarkColor = '#385874'; // dark blue
const blueMediumColor = '#7c94AF'; // medium blue
const blueLightColor = '#C2E8EE'; // light blue

const primaryOverlayOpacity = 0.8;
const secondaryOverlayOpacity = 0.3;
// 981c20 = red
/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    colors: {
      slate: colors.slate,
      red: colors.red,
      primary: generateColors(baseBackgroundColor, basePrimaryColor, primaryOverlayOpacity),
      secondary: generateColors(baseBackgroundColor, baseSecondaryColor, secondaryOverlayOpacity),
      background: generateBackgroundColors(baseBackgroundColor),

      cream: generateColors(baseBackgroundColor, creamColor, secondaryOverlayOpacity),

      'background-green': generateBackgroundColors(greenBackgroundColor),
      'dark-green': generateColors(greenBackgroundColor, greenDarkColor, primaryOverlayOpacity),
      'medium-green': generateColors(greenBackgroundColor, greenMediumColor, primaryOverlayOpacity),
      'light-green': generateColors(greenBackgroundColor, greenLightColor, primaryOverlayOpacity),
      'background-blue': generateBackgroundColors(blueBackgroundColor),
      'dark-blue': generateColors(blueBackgroundColor, blueDarkColor, primaryOverlayOpacity),
      'medium-blue': generateColors(blueBackgroundColor, blueMediumColor, primaryOverlayOpacity),
      'light-blue': generateColors(blueBackgroundColor, blueLightColor, primaryOverlayOpacity),

      zinc: colors.zinc,
      white: colors.white,
      black: colors.black,
      green: colors.green,
      orange: colors.orange,
      blue: colors.blue,
      sky: colors.sky,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      teal: colors.teal,
      yellow: colors.yellow,
    },
    extend: {
      colors: {
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        // ring: 'hsl(var(--ring) / <alpha-value>)',
        background: generateBackgroundColors(baseBackgroundColor),
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: generateColors(baseBackgroundColor, basePrimaryColor, primaryOverlayOpacity)[500],
          foreground: generateColors(baseBackgroundColor, basePrimaryColor, primaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, basePrimaryColor, primaryOverlayOpacity),
        },
        secondary: {
          DEFAULT: generateColors(baseBackgroundColor, baseSecondaryColor, secondaryOverlayOpacity)[500],
          foreground: generateColors(baseBackgroundColor, baseSecondaryColor, secondaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, baseSecondaryColor, secondaryOverlayOpacity),
        },

        cream: {
          DEFAULT: generateColors(baseBackgroundColor, creamColor, secondaryOverlayOpacity)[500],
          foreground: generateColors(baseBackgroundColor, creamColor, secondaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, creamColor, secondaryOverlayOpacity),
        },

        greenBackground: generateBackgroundColors(greenBackgroundColor),
        'dark-green': {
          DEFAULT: generateColors(greenBackgroundColor, greenDarkColor, primaryOverlayOpacity)[500],
          foreground: generateColors(greenBackgroundColor, greenDarkColor, primaryOverlayOpacity),
          ...generateColors(greenBackgroundColor, greenDarkColor, primaryOverlayOpacity),
        },
        'medium-green': {
          DEFAULT: generateColors(greenBackgroundColor, greenMediumColor, primaryOverlayOpacity)[500],
          foreground: generateColors(greenBackgroundColor, greenMediumColor, primaryOverlayOpacity),
          ...generateColors(greenBackgroundColor, greenMediumColor, primaryOverlayOpacity),
        },
        'light-green': {
          DEFAULT: generateColors(greenBackgroundColor, greenLightColor, primaryOverlayOpacity)[500],
          foreground: generateColors(greenBackgroundColor, greenLightColor, primaryOverlayOpacity),
          ...generateColors(greenBackgroundColor, greenLightColor, primaryOverlayOpacity),
        },
        'background-blue': generateBackgroundColors(blueBackgroundColor),
        'dark-blue': {
          DEFAULT: generateColors(blueBackgroundColor, blueDarkColor, primaryOverlayOpacity)[500],
          foreground: generateColors(blueBackgroundColor, blueDarkColor, primaryOverlayOpacity),
          ...generateColors(blueBackgroundColor, blueDarkColor, primaryOverlayOpacity),
        },
        'medium-blue': {
          DEFAULT: generateColors(blueBackgroundColor, blueMediumColor, primaryOverlayOpacity)[500],
          foreground: generateColors(blueBackgroundColor, blueMediumColor, primaryOverlayOpacity),
          ...generateColors(blueBackgroundColor, blueMediumColor, primaryOverlayOpacity),
        },
        'light-blue': {
          DEFAULT: generateColors(blueBackgroundColor, blueLightColor, primaryOverlayOpacity)[500],
          foreground: generateColors(blueBackgroundColor, blueLightColor, primaryOverlayOpacity),
          ...generateColors(blueBackgroundColor, blueLightColor, primaryOverlayOpacity),
        },

        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      // fontFamily: {
      //   sans: [...fontFamily.sans],
      // },
    },
  },
  safelist: ['logo-button', 'dark', 'neutral', 'light', 'nav-button'],
  plugins: [
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars = typeof value === 'string' ? { [`--color${colorGroup}-${colorKey}`]: value } : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
    function ({ addComponents, theme }) {
      const colors = theme('colors');
      const buttonClasses = {};

      Object.keys(colors).forEach((color) => {
        buttonClasses[`button.${color}`] = {
          color: `var(--color-${color}-500)`,
        };
        buttonClasses[`button.${color}:hover`] = {
          color: `var(--color-background-900)`,
          backgroundColor: `var(--color-${color}-500)`,
        };
      });

      addComponents(buttonClasses);
    },
  ],
};

export default config;
