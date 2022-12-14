import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Heading = ({ Icon, children }) => {
  return (
    <Stack direction="row" my={1} alignItems="center" spacing={0.35}>
      {Icon && (
        <Typography
          variant="medium"
          p={0.3}
          bgcolor="primary.main"
          color="white"
          borderRadius="50%"
          lineHeight={0}
        >
          <Icon />
        </Typography>
      )}
      <Typography color="primary.main" variant="medium" fontWeight="bold">
        {children}
      </Typography>
      <Box bgcolor="secondary.main" p={0.05} flex={1} />
    </Stack>
  );
};

export default Heading;
