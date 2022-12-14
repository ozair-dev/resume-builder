import React, { useContext, useRef, useState } from "react";

import { Typography, Box, Stack, Popover } from "@mui/material";

import { colors } from "@mui/material";

import { themeContext } from "../ThemeContext";

const ColorPicker = ({ variant }) => {
  const [open, setOpen] = useState(false);

  const { setTheme } = useContext(themeContext);

  const anchorEl = useRef();

  const handleColorChange = (color) => {
    setOpen(false);
    setTheme({
      palette: {
        [variant]: {
          main: colors[color][500],
          dark: colors[color][800],
          light: colors[color][100],
          contrastText: "#fff",
        },
      },
    });
  };

  return (
    <Stack>
      <Typography fontSize="small" textTransform="capitalize">
        {variant}
      </Typography>
      <Box
        ref={anchorEl}
        onClick={() => setOpen((p) => !p)}
        width={50}
        height={20}
        borderRadius={1}
        bgcolor={`${variant}.main`}
        sx={{ cursor: "pointer" }}
      ></Box>
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={anchorEl.current}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ maxHeight: "50vh" }}
        // PaperProps={{
        //   style: {
        //     maxHeight: 100,
        //   },
        // }}
      >
        {Object.keys(colors).map((color) => (
          <Box
            onClick={() => handleColorChange(color)}
            key={color}
            sx={{
              my: 0.1,
              width: 50,
              height: 20,
              bgcolor: colors[color][500],
            }}
          ></Box>
        ))}
      </Popover>
    </Stack>
  );
};

export default ColorPicker;
