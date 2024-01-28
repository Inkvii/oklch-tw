const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")


/** @type {import("tailwindcss").Config} */
const colorsThemePreset = {
  preset: [],
  // darkMode: "class",
  theme: {
    colors: {
      typography: {
        primary: {
          DEFAULT: "oklch(20.18% 0.0444 var(--primary-hue) / <alpha-value>)",
          "dark": "oklch(95.1% 0.0871 var(--primary-hue) / <alpha-value>)",
        },
        body: { DEFAULT: colors.neutral["700"], dark: colors.neutral["200"] },
        header: { DEFAULT: colors.neutral["900"], dark: colors.neutral["50"] },
        caption: { DEFAULT: colors.neutral["500"], dark: colors.neutral["400"] },
      },
      background: {
        DEFAULT: "oklch(88.2% 0.0363 var(--primary-hue) / <alpha-value>)",
        dark: "oklch(20% 0.039 var(--primary-hue) / <alpha-value>)",
      },
      neutral: colors.neutral,
      hue: {
        "50": "oklch(87.32% 0.0776 var(--hue) / <alpha-value>)",
        "100": "oklch(83.56% 0.0973 var(--hue) / <alpha-value>)",
        "200": "oklch(80.01% 0.1254 var(--hue) / <alpha-value>)",
        "300": "oklch(67.57% 0.1254 var(--hue) / <alpha-value>)",
        "400": "oklch(62.97% 0.1254 var(--hue) / <alpha-value>)",
        "500": "oklch(51.08% 0.1017 var(--hue) / <alpha-value>)",
        "600": "oklch(41.54% 0.0827 var(--hue) / <alpha-value>)",
        "700": "oklch(33.18% 0.0659 var(--hue) / <alpha-value>)",
        "800": "oklch(29.27% 0.0581 var(--hue) / <alpha-value>)",
        "900": "oklch(24.14% 0.0477 var(--hue) / <alpha-value>)",
        "950": "oklch(20.58% 0.0407 var(--hue) / <alpha-value>)",
      },
      primary: {
        "50": "oklch(87.32% 0.0776 var(--primary-hue) / <alpha-value>)",
        "100": "oklch(83.56% 0.0973 var(--primary-hue) / <alpha-value>)",
        "200": "oklch(80.01% 0.1254 var(--primary-hue) / <alpha-value>)",
        "300": "oklch(67.57% 0.1254 var(--primary-hue) / <alpha-value>)",
        "400": "oklch(62.97% 0.1254 var(--primary-hue) / <alpha-value>)",
        "500": "oklch(51.08% 0.1017 var(--primary-hue) / <alpha-value>)",
        "600": "oklch(41.54% 0.0827 var(--primary-hue) / <alpha-value>)",
        "700": "oklch(33.18% 0.0659 var(--primary-hue) / <alpha-value>)",
        "800": "oklch(29.27% 0.0581 var(--primary-hue) / <alpha-value>)",
        "900": "oklch(24.14% 0.0477 var(--primary-hue) / <alpha-value>)",
        "950": "oklch(20.58% 0.0407 var(--primary-hue) / <alpha-value>)",
      },
      secondary: {
        "50": "oklch(87.32% 0.0776 var(--secondary-hue) / <alpha-value>)",
        "100": "oklch(83.56% 0.0973 var(--secondary-hue) / <alpha-value>)",
        "200": "oklch(80.01% 0.1254 var(--secondary-hue) / <alpha-value>)",
        "300": "oklch(67.57% 0.1254 var(--secondary-hue) / <alpha-value>)",
        "400": "oklch(62.97% 0.1254 var(--secondary-hue) / <alpha-value>)",
        "500": "oklch(51.08% 0.1017 var(--secondary-hue) / <alpha-value>)",
        "600": "oklch(41.54% 0.0827 var(--secondary-hue) / <alpha-value>)",
        "700": "oklch(33.18% 0.0659 var(--secondary-hue) / <alpha-value>)",
        "800": "oklch(29.27% 0.0581 var(--secondary-hue) / <alpha-value>)",
        "900": "oklch(24.14% 0.0477 var(--secondary-hue) / <alpha-value>)",
        "950": "oklch(20.58% 0.0407 var(--secondary-hue) / <alpha-value>)",

      },
      info: {
        ...colors.neutral,
        dark: colors.neutral,
      },
      success: {
        ...colors.green,
        dark: colors.green,
      },
      danger: {
        ...colors.red,
        dark: colors.rose,
      },
      white: colors.white,
      transparent: colors.transparent,
      current: colors.current,
    },
  },
}

/** @type {import("tailwindcss").Config} */
const customPreset = {
  presets: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--custom-font)"],
      },
      borderColor: {
        DEFAULT: colors.neutral["200"],
      },
      ringOffsetColor: {
        DEFAULT: colors.transparent,
      },
      padding: {
        "page-default": "2rem",
      },
      margin: {
        "page-default": "2rem",
      },
      animation: {
        fadeIn: "fadeIn 200ms ease",
        fadeOut: "fadeOut 200ms ease",
        scaleIn: "scaleIn 200ms ease",
        scaleOut: "scaleOut 200ms ease",
        enterFromLeft: "enterFromLeft 250ms ease",
        enterFromRight: "enterFromRight 250ms ease",
        exitToLeft: "exitToLeft 250ms ease",
        exitToRight: "exitToRight 250ms ease",
        "rolling": "animation-rolling 2s infinite ease-in-out",
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: 0, transform: "translateX(200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: "translateX(-200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: 0, transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
          to: { opacity: 0, transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
    },
  },
}

/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [
    colorsThemePreset,
    customPreset,
  ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("@tailwindcss/container-queries"),
    plugin(function({ addVariant }) {
      addVariant("child", "& > :is(*)")
      addVariant("child-header", "& > :is(h1,h2,h3,h4,h5)")
    }),
    plugin(function({ matchVariant }) {
      matchVariant("not", (value) => `&:not(${value})`)
    }),
    plugin(function({ matchUtilities }) {
      matchUtilities({
        "h-dynamic-screen": value => ({
          height: `${value}dvh`,
        }),
      }, {
        values: {
          0: "0",
          25: "25",
          50: "50",
          75: "75",
          100: "100",
        },
      })
    }),
    plugin(function({ matchUtilities }) {
      matchUtilities({
        "grid-fit": value => ({
          gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))`,
        }),
        "grid-fill": value => ({
          gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
        }),
      }, {
        values: {
          15: "15rem",
          20: "20rem",
          30: "30rem",
          40: "40rem",
        },
      })
    }),
  ],
}
