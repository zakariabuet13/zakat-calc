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
import { Provider } from "react-redux";
import { store } from "./redux/store";

const theme = createTheme({
  typography: {
    fontFamily: "Kalpurush, Roboto, Helvetica, Arial, sans-serif",
    fontSize: 15,

    h5: {
      "@media (max-width:600px)": {
        fontSize: "1.4rem",
      },
    },
    h6: {
      "@media (max-width:600px)": {
        fontSize: "1.1rem",
      },
    },
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
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: "4px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "2em",
          fontSize: "1rem",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          transform: "translate(14px, 5px) scale(1)",
          "&.Mui-focused": {
            transform: "translate(14px, -9px) scale(0.75)",
          },
          "&.MuiFormLabel-filled": {
            transform: "translate(14px, -9px) scale(0.75)",
          },
        },
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
      <Provider store={store}>
        <CssBaseline />
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
