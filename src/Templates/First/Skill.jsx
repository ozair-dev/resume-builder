import React from "react";

import { Stack, Typography, Box } from "@mui/material";

const Skill = ({ skill: { skill, level } }) => {
  return (
    <Stack direction="row" alignItems="center">
      <Typography variant="x-small" fontWeight="bold" width={2 / 5}>
        {skill}
      </Typography>
      <Stack direction="row" width={3 / 5} justifyContent="space-between">
        {Array(15)
          .fill(null)
          .map((_, i) => (
            <Box
              key={i}
              width="1.3vw"
              height="1.3vw"
              backgroundColor={
                level >= (i * 10 + 5) / 1.5 ? "primary.main" : "text.primary"
              }
              borderRadius="50%"
            ></Box>
          ))}
      </Stack>
    </Stack>
  );
};

export default Skill;
