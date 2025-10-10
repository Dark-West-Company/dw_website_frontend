import fontFamily from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

import { useColors } from './src/lib/useColors';
const { generateBackgroundColors, generateColors } = useColors();

const pitchBlack = '#0D0D0D'; // almost black

const baseBackgroundColor = '#0D0B09'; // very dark brown

const basePrimaryColor = '#2b2621'; // dark brown
const baseSecondaryColor = '#1f2523'; // dark grayish green

const errorColor = '#7a4438'; // dried blood red
const successColor = '#5a6847'; // sickly muted green
const infoColor = '#4a6662'; // muted teal

// const textPrimaryColor = '#c9b35f'; // muted gold, original glowy yellow color
const textPrimaryColor = '#9bb5c4'; // muted light gold
const textSecondaryColor = '#b2a490'; // muted light cream

// const creamColor = '#EDECE5'; // light cream

// const greenBackgroundColor = '#0b3613'; // very dark green
// const greenDarkColor = '#516130'; // dark green

// const greenBackgroundColor = '#191F1B'; // very dark green 140
// const greenDarkColor = '#364025'; // dark green 82
// const greenMediumColor = '#516130'; // medium green 80
// const greenLightColor = '#8B8F30'; // light green 63

// const blueBackgroundColor = '#123150'; // very dark blue
// const blueDarkColor = '#385874'; // dark blue
// const blueMediumColor = '#7c94AF'; // medium blue
// const blueLightColor = '#C2E8EE'; // light blue

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
      primary: generateColors(pitchBlack, basePrimaryColor, primaryOverlayOpacity),
      secondary: generateColors(pitchBlack, baseSecondaryColor, secondaryOverlayOpacity),
      background: generateBackgroundColors(baseBackgroundColor),

      // cream: generateColors(baseBackgroundColor, creamColor, secondaryOverlayOpacity),

      // 'background-green': generateBackgroundColors(greenBackgroundColor),
      // 'dark-green': generateColors(greenBackgroundColor, greenDarkColor, primaryOverlayOpacity),
      // 'medium-green': generateColors(greenBackgroundColor, greenMediumColor, primaryOverlayOpacity),
      // 'light-green': generateColors(greenBackgroundColor, greenLightColor, primaryOverlayOpacity),
      // 'background-blue': generateBackgroundColors(blueBackgroundColor),
      // 'dark-blue': generateColors(blueBackgroundColor, blueDarkColor, primaryOverlayOpacity),
      // 'medium-blue': generateColors(blueBackgroundColor, blueMediumColor, primaryOverlayOpacity),
      // 'light-blue': generateColors(blueBackgroundColor, blueLightColor, primaryOverlayOpacity),

      error: generateColors(pitchBlack, errorColor, primaryOverlayOpacity),
      success: generateColors(pitchBlack, successColor, primaryOverlayOpacity),
      info: generateColors(pitchBlack, infoColor, secondaryOverlayOpacity),

      tprimary: generateColors(pitchBlack, textPrimaryColor, primaryOverlayOpacity),
      tsecondary: generateColors(pitchBlack, textSecondaryColor, primaryOverlayOpacity),

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
          DEFAULT: generateColors(baseBackgroundColor, basePrimaryColor, primaryOverlayOpacity)[0],
          foreground: generateColors(baseBackgroundColor, basePrimaryColor, primaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, basePrimaryColor, primaryOverlayOpacity),
        },
        secondary: {
          DEFAULT: generateColors(baseBackgroundColor, baseSecondaryColor, secondaryOverlayOpacity)[0],
          foreground: generateColors(baseBackgroundColor, baseSecondaryColor, secondaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, baseSecondaryColor, secondaryOverlayOpacity),
        },

        error: {
          DEFAULT: generateColors(baseBackgroundColor, errorColor, primaryOverlayOpacity)[0],
          foreground: generateColors(baseBackgroundColor, errorColor, primaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, errorColor, primaryOverlayOpacity),
        },
        success: {
          DEFAULT: generateColors(baseBackgroundColor, successColor, primaryOverlayOpacity)[0],
          foreground: generateColors(baseBackgroundColor, successColor, primaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, successColor, primaryOverlayOpacity),
        },
        info: {
          DEFAULT: generateColors(baseBackgroundColor, infoColor, secondaryOverlayOpacity)[0],
          foreground: generateColors(baseBackgroundColor, infoColor, secondaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, infoColor, secondaryOverlayOpacity),
        },

        tprimary: {
          DEFAULT: generateColors(baseBackgroundColor, textPrimaryColor, primaryOverlayOpacity)[0],
          foreground: generateColors(baseBackgroundColor, textPrimaryColor, primaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, textPrimaryColor, primaryOverlayOpacity),
        },
        tsecondary: {
          DEFAULT: generateColors(baseBackgroundColor, textSecondaryColor, primaryOverlayOpacity)[0],
          foreground: generateColors(baseBackgroundColor, textSecondaryColor, primaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, textSecondaryColor, primaryOverlayOpacity),
        },

        // cream: {
        //   DEFAULT: generateColors(baseBackgroundColor, creamColor, secondaryOverlayOpacity)[500],
        //   foreground: generateColors(baseBackgroundColor, creamColor, secondaryOverlayOpacity),
        //   ...generateColors(baseBackgroundColor, creamColor, secondaryOverlayOpacity),
        // },

        // greenBackground: generateBackgroundColors(greenBackgroundColor),
        // 'dark-green': {
        //   DEFAULT: generateColors(greenBackgroundColor, greenDarkColor, primaryOverlayOpacity)[500],
        //   foreground: generateColors(greenBackgroundColor, greenDarkColor, primaryOverlayOpacity),
        //   ...generateColors(greenBackgroundColor, greenDarkColor, primaryOverlayOpacity),
        // },
        // 'medium-green': {
        //   DEFAULT: generateColors(greenBackgroundColor, greenMediumColor, primaryOverlayOpacity)[500],
        //   foreground: generateColors(greenBackgroundColor, greenMediumColor, primaryOverlayOpacity),
        //   ...generateColors(greenBackgroundColor, greenMediumColor, primaryOverlayOpacity),
        // },
        // 'light-green': {
        //   DEFAULT: generateColors(greenBackgroundColor, greenLightColor, primaryOverlayOpacity)[500],
        //   foreground: generateColors(greenBackgroundColor, greenLightColor, primaryOverlayOpacity),
        //   ...generateColors(greenBackgroundColor, greenLightColor, primaryOverlayOpacity),
        // },
        // 'background-blue': generateBackgroundColors(blueBackgroundColor),
        // 'dark-blue': {
        //   DEFAULT: generateColors(blueBackgroundColor, blueDarkColor, primaryOverlayOpacity)[500],
        //   foreground: generateColors(blueBackgroundColor, blueDarkColor, primaryOverlayOpacity),
        //   ...generateColors(blueBackgroundColor, blueDarkColor, primaryOverlayOpacity),
        // },
        // 'medium-blue': {
        //   DEFAULT: generateColors(blueBackgroundColor, blueMediumColor, primaryOverlayOpacity)[500],
        //   foreground: generateColors(blueBackgroundColor, blueMediumColor, primaryOverlayOpacity),
        //   ...generateColors(blueBackgroundColor, blueMediumColor, primaryOverlayOpacity),
        // },
        // 'light-blue': {
        //   DEFAULT: generateColors(blueBackgroundColor, blueLightColor, primaryOverlayOpacity)[500],
        //   foreground: generateColors(blueBackgroundColor, blueLightColor, primaryOverlayOpacity),
        //   ...generateColors(blueBackgroundColor, blueLightColor, primaryOverlayOpacity),
        // },

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
    function ({ addBase, theme }: any) {
      function extractColorVars(colorObj: any, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars: any = typeof value === 'string' ? { [`--color${colorGroup}-${colorKey}`]: value } : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
    function ({ addComponents, theme }: any) {
      const colors = theme('colors');
      const buttonClasses: Record<string, any> = {};

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
