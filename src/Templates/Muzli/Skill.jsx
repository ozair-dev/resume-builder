import React from "react";

import { Stack, Box, Typography } from "@mui/material";

const Skill = ({ skill: { skill, level } }) => {
  return (
    <Stack direction="row" alignItems="center" color="white" spacing={0.5}>
      <Typography variant="x-small" width={0.4}>
        {skill}
      </Typography>
      <Box height="0.5vw" flex={1} bgcolor="secondary.main" borderRadius="1vw">
        <Box width={level / 100} height={1} bgcolor="primary.main" />
      </Box>
      <Typography variant="xx-small" color="white">
        {level}%
      </Typography>
    </Stack>
  );
};

export default Skill;
