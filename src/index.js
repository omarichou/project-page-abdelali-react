import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Parents from "./parents";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";


// PWA
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { ThemeProvider } from "./context/context";
import { HelmetProvider } from "react-helmet-async";







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <HelmetProvider>
    <ThemeProvider>
    <Parents/>
    </ThemeProvider>
  </HelmetProvider>
</React.StrictMode>
);


serviceWorkerRegistration.register();
