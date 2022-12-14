import React from "react";

import { Stack, Typography } from "@mui/material";

const Heading = ({ Icon, children }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      width={1}
      my={2}
      sx={{
        "& svg": {
          border: "0.22vw solid",
          p: 0.4,
          fontSize: "4.37vw",
          borderRadius: "50%",
          mr: 1,
        },
      }}
    >
      <Icon />
      <Typography variant="small" fontWeight="600">
        {children}
      </Typography>
    </Stack>
  );
};

export default Heading;
