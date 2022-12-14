import React from "react";

import { Stack, Typography } from "@mui/material";

const Project = ({ project: { finished, name, link, description } }) => {
  return (
    <Stack
      component="a"
      href={link}
      direction="row"
      sx={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Typography variant="x-small" width={2 / 5} fontWeight="bold">
        {date(finished)}
      </Typography>
      <Stack width={3 / 5}>
        <Typography variant="x-small" color="primary" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="x-small" fontWeight="bold" color="text.secondary">
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Project;

function date(time) {
  time = new Date(time);
  return `${time.toLocaleString("en-us", {
    month: "short",
  })} ${time.getFullYear()}`;
}
