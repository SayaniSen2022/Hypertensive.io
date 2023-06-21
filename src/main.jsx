import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/color-mode";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import theme from "./Theme/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <CSSReset />
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>
);
