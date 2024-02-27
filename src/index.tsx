import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Kalpurush from "./fonts/kalpurush.ttf";
import router from "./router";
import { RouterProvider } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Kalpurush, Roboto, Helvetica, Arial, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        styleOverrides: `
          @font-face {
            font-family: 'Kalpurush';
            src: url(${Kalpurush}) format('truetype');
          },
          body: {
            backgroundColor: "#f1f1fd",
          },
        `,
      },
    },
  },
  palette: {
    primary: {
      main: "#25428d",
    },
    secondary: {
      main: "#c8d9ed",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
