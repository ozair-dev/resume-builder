import React from "react";

import { Stack, Typography } from "@mui/material";

const InfoContainer = ({ main, body, date, list, ...props }) => {
  return (
    <Stack {...props}>
      <Typography variant="small" color="primary.main" fontWeight="bold">
        {main}
      </Typography>
      <Typography variant="x-small" color="white">
        {body}
      </Typography>
      {!!list &&
        list.map((li, i) => (
          <Stack key={i} direction="row" spacing={0.5}>
            <Typography variant="x-small" color="white">
              -
            </Typography>
            <Typography variant="x-small" color="white">
              {li}
            </Typography>
          </Stack>
        ))}
      <Typography variant="x-small" color="rgba(255,255,255,0.7)">
        {date}
      </Typography>
    </Stack>
  );
};

export default InfoContainer;
