import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";

import ThemeProvider from "./ThemeContext";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas as solidIcons } from "@fortawesome/free-solid-svg-icons";
import { far as regularIcons } from "@fortawesome/free-regular-svg-icons";
import { fab as brandIcons } from "@fortawesome/free-brands-svg-icons";

library.add(regularIcons, solidIcons, brandIcons);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
