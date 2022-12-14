import React, { useState, useEffect, useContext } from "react";
import { Box, CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

import Toolsbar from "./Toolsbar";
import { themeContext } from "./ThemeContext";

import fonts from "./fonts";
import papers from "./papers";

fonts.forEach((href) =>
  document.head.append(
    Object.assign(document.createElement("link"), {
      rel: "stylesheet",
      href,
    })
  )
);

const Home = () => {
  const { theme } = useContext(themeContext);
  const [font, setFont] = useState(
    localStorage.getItem("font") || "Roboto Mono"
  );

  const [paper, setPaper] = useState({
    name: "A4",
    dimensions: { width: 210, height: 297 },
  });

  const {
    dimensions: { width, height },
  } = paper;

  useEffect(() => {
    localStorage.setItem("font", font);
  }, [font]);

  return !localStorage.getItem("info") ? (
    <Navigate to="/edit" replace />
  ) : (
    <Box
      backgroundColor="white"
      width="100vw"
      height={100 * (height / width) + "vw"}
      overflow="hidden"
      sx={{ "@media print": { height: "100vh" } }}
    >
      <Toolsbar
        {...{ font, setFont, fonts: getFonts(fonts), paper, papers, setPaper }}
      />
      <CssBaseline />
      <ThemeProvider
        theme={createTheme(theme, {
          components: {
            MuiTypography: {
              styleOverrides: {
                root: {
                  fontFamily: font,
                  wordBreak: "break-word",
                  lineHeight: "normal",
                },
              },
            },
          },
          spacing: (factor) => factor * 1.7 + "vw",
          typography: {
            "xx-small": {
              fontSize: 9 * (3.57 / 16) + "vw",
            },
            "x-small": {
              fontSize: 10 * (3.57 / 16) + "vw",
            },
            small: {
              fontSize: 13 * (3.57 / 16) + "vw",
            },
            medium: {
              fontSize: "3.57vw",
            },
            large: {
              fontSize: 18 * (3.57 / 16) + "vw",
            },
            "x-large": {
              fontSize: 24 * (3.57 / 16) + "vw",
            },
            "xx-large": {
              fontSize: 32 * (3.57 / 16) + "vw",
            },
          },
        })}
      >
        <Outlet />
      </ThemeProvider>
    </Box>
  );
};

export default Home;

function getFonts(fonts) {
  return fonts
    .map((url) =>
      new URL(url).searchParams
        .getAll("family")
        .map((font) => font.slice(0, font.indexOf(":")))
    )
    .flat();
}
