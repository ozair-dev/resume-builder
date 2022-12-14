import React from "react";

import { Stack, Typography, List, ListItem } from "@mui/material";

const Experience = ({
  exp: { started, ended, present, title, company, location, responsibilities },
}) => {
  return (
    <Stack direction="row">
      <Typography variant="x-small" fontWeight="bold" pr={1} width={2 / 5}>
        {date(started)} - {present ? "Present" : date(ended)}
      </Typography>
      <Stack width={3 / 5}>
        <Typography variant="x-small" color="primary" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="x-small" fontWeight="bold" color="text.secondary">
          {company}, {location}
        </Typography>
        {responsibilities?.map((res, i) => (
          <Stack key={i} direction="row" spacing={0.5}>
            <Typography variant="x-small" color="text.secondary">
              -
            </Typography>
            <Typography variant="x-small" color="text.secondary">
              {res}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Experience;

function date(time) {
  time = new Date(time);
  return `${time.toLocaleString("en-us", {
    month: "short",
  })} ${time.getFullYear()}`;
}
