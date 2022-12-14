import { createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

const themeContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState({
    palette: {
      primary: {
        main: "#00bcd4",
        dark: "#00838f",
        light: "#b2ebf2",
        contrastText: "#fff",
      },
      secondary: {
        main: "#607d8b",
        dark: "#37474f",
        light: "#cfd8dc",
        contrastText: "#fff",
      },
    },
  });

  const modifyTheme = (obj) => {
    const newTheme = createTheme(theme, obj);
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem("theme"));
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <themeContext.Provider
      value={{ theme: createTheme(theme), setTheme: modifyTheme }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContext;
export { themeContext };
