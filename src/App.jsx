import React, { useContext } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import { themeContext } from "./ThemeContext";

import Home from "./Home";
import EditInfo from "./EditInfo";

import Templates from "./Templates";

const router = createBrowserRouter([
  {
    path: "/edit",
    element: <EditInfo />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      ...Templates.map((Template, i) => ({
        element: <Template />,
        path: String(i + 1),
      })),
      {
        path: "*",
        element: <Navigate to="/1" replace />,
      },
      {
        path: "",
        element: <Navigate to="/1" replace />,
      },
    ],
  },
]);

const App = () => {
  const { theme } = useContext(themeContext);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      {/* {routes} */}
    </ThemeProvider>
  );
};

export default App;
