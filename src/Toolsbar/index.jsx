import React, { useState } from "react";

import { NavLink, Link } from "react-router-dom";

import {
  Box,
  Button,
  Typography,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { grey } from "@mui/material/colors";

import { AiOutlineEdit } from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";
import { VscFilePdf } from "react-icons/vsc";

import { count as templatesCount } from "../Templates";

import ColorPicker from "./ColorPicker";
const Toolsbar = ({ font, setFont, fonts, paper, setPaper, papers }) => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      width={1}
      p={2}
      zIndex={10}
      backgroundColor="white"
      position="absolute"
      borderBottom={1}
      borderColor="primary.main"
      sx={[
        {
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          transition: "transform 0.1s",
          transform: "translateY(-100%)",
          "@media print": {
            display: "none",
          },
        },
        open && {
          transform: "translateY(0%)",
        },
      ]}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        flexWrap="wrap"
        gap={1}
      >
        <Stack spacing={1} bgcolor={grey[200]} p={1} borderRadius={2}>
          <Stack direction="row" gap={4} justifyContent="space-around">
            <Stack>
              <Typography fontWeight="bold" color="text.secondary">
                Change Theme Color
              </Typography>
              <Stack direction="row" spacing={1}>
                <ColorPicker variant={"primary"} />
                <ColorPicker variant={"secondary"} />
              </Stack>
            </Stack>

            <FormControl>
              <InputLabel id="font-select-label">Font</InputLabel>
              <Select
                labelId="font-select-label"
                id="font-select"
                value={font}
                label="Paper"
                onChange={(e) => setFont(e.target.value)}
              >
                {fonts.map((font, i) => (
                  <MenuItem
                    component={Typography}
                    fontFamily={font}
                    key={i}
                    value={font}
                  >
                    {font}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Button color="error" onClick={reset}>
            Reset
          </Button>
        </Stack>

        <FormControl sx={{ width: 100 }}>
          <InputLabel id="paper-select-label">Paper</InputLabel>
          <Select
            labelId="paper-select-label"
            id="paper-select"
            value={paper.name}
            label="Paper"
            onChange={(e) =>
              setPaper(papers.find((p) => p.name === e.target.value))
            }
          >
            {papers.map(({ name, dimensions: { width, height } }) => (
              <MenuItem key={name} value={name}>
                {name} {width}x{height}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Stack
          direction="row"
          spacing={1}
          bgcolor={grey[200]}
          p={1}
          borderRadius={2}
        >
          <Button
            component={Link}
            to="/edit"
            variant="contained"
            sx={{ fontSize: "x-large", minWidth: 0 }}
          >
            <AiOutlineEdit />
          </Button>

          <Button
            onClick={window.print}
            variant="contained"
            sx={{ fontSize: "x-large", minWidth: 0 }}
          >
            <VscFilePdf />
          </Button>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1} mt={2} sx={{ overflowX: "auto" }}>
        {Array(templatesCount)
          .fill(null)
          .map((_, i) => (
            <Typography
              key={i}
              component={NavLink}
              to={`/${i + 1}`}
              className={({ isActive }) => (isActive ? "active" : "")}
              textAlign="center"
              fontSize="x-large"
              color="primary"
              border={2}
              borderRadius={2}
              width={100}
              flexShrink={0}
              sx={{
                "&.active": { color: "white", bgcolor: "primary.main" },
                textDecoration: "none",
              }}
            >
              {i + 1}
            </Typography>
          ))}
      </Stack>

      <Button
        onClick={() => setOpen((p) => !p)}
        sx={[
          {
            fontSize: "x-large",
            bgcolor: "white",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            py: 0,
            minWidth: 0,
            border: 1,
            position: "absolute",
            left: "50%",
            top: "100%",
            transform: "translateX(-50%)",
          },
          open && {
            "& svg": {
              transform: "rotateX(180deg)",
            },
          },
        ]}
      >
        <BsChevronCompactDown />
      </Button>
    </Box>
  );
};

export default Toolsbar;

function reset() {
  localStorage.removeItem("theme");
  localStorage.removeItem("font");
  window.location.reload();
}
