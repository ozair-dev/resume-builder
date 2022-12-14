import React from "react";

import { Typography, Stack } from "@mui/material";

const Contact = ({ Icon, children, ...props }) => {
  return (
    <Stack
      direction="row"
      spacing={0.5}
      alignItems="center"
      sx={{ textDecoration: "none" }}
      {...props}
    >
      <Typography
        variant="small"
        p={0.25}
        color="white"
        bgcolor="primary.main"
        borderRadius="50%"
        lineHeight="0"
      >
        {<Icon />}
      </Typography>
      <Typography variant="x-small" color="white">
        {children}
      </Typography>
    </Stack>
  );
};

export default Contact;
