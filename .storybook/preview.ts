import type { Preview } from "@storybook/react"
import "styles/globals.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      current: "light",
      darkClass: "dark",
      classTarget: "body",
      stylePreview: true,
    },
  },
}

export default preview
