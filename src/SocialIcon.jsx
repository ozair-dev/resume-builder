import React from "react";

import { Box } from "@mui/material";

import { SocialIcon } from "react-social-icons";

const Icon = ({
  url,
  network,
  bgColor,
  fgColor,
  label,
  className,
  defaultSVG,
  style,
  width,
  height,
  ...props
}) => {
  console.log({ width, height, props });
  return (
    <Box
      {...props}
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
      <SocialIcon
        {...{
          url,
          network,
          bgColor,
          fgColor,
          label,
          className,
          defaultSVG,
          style,
        }}
      />
    </Box>
  );
};

export default Icon;
