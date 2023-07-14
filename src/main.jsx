import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme.js";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={3} autoHideDuration={2000} >
      <CssBaseline />
      <App />
    </SnackbarProvider>
  </ThemeProvider>
);
