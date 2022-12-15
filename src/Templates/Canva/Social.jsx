import React from "react";

import { Typography, Stack } from "@mui/material";

import { SocialIcon } from "react-social-icons";

const Social = ({ url }) => {
  return (
    <Stack
      direction="row"
      spacing={0.5}
      alignItems="center"
      sx={{
        textDecoration: "none",
        "& .social-icon": {
          width: "4vw !important",
          height: "4vw !important",
        },
      }}
    >
      <SocialIcon url={url} />
      <Typography
        component="a"
        href={url}
        variant="x-small"
        color="white"
        sx={{ textDecoration: "none" }}
      >
        {url.replace(/https?:\/\/(www[.])?/, "")}
      </Typography>
    </Stack>
  );
};

export default Social;
