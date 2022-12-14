import { Stack, Typography } from "@mui/material";
import React from "react";

const Heading = ({ children, Icon }) => {
  return (
    <Stack direction="row" mt={3} mb={2} alignItems="center">
      <Typography
        component="span"
        variant="small"
        lineHeight="0"
        color="white"
        p="0.9vw"
        bgcolor="primary.main"
        borderRadius="50%"
        mr={0.5}
      >
        <Icon />
      </Typography>
      <Typography
        variant="small"
        fontWeight="bold"
        color="primary"
        borderBottom="1px solid"
        width={1}
      >
        {children}
      </Typography>
    </Stack>
  );
};

export default Heading;
