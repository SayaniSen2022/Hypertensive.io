import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  colors: {
    light: {
      primary: "#000000",
      secondary: "#000000",
    },
    dark: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
  },

  styles: {
    global: {
      body: {
        margin: 0,
        "font-family": "Fira Sans",
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
      },

      code: {
        "font-family":
          "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
      },
    },
  },
};
export default extendTheme(theme);
