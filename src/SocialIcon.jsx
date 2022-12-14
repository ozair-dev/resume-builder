import React from "react";

import { Box } from "@mui/material";

import { SocialIcon } from "react-social-icons";

const Icon = ({ url, width, height, ...props }) => {
  return (
    <Box
      sx={[
        width &&
          height && {
            "& a": {
              width: width + " !important",
              height: height + " !important",
            },
          },
      ]}
    >
      <SocialIcon url={url} {...props} />
    </Box>
  );
};

export default Icon;
