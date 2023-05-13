import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      100: "#6699CC",
      200: "#2E8BC0",
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
