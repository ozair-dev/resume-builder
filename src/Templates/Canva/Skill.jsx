import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Skill = ({ skill: { skill, level } }) => {
  return (
    <Stack>
      <Typography
        variant="x-small"
        fontWeight="bold"
        color="rgba(255,255,255,0.8)"
      >
        {skill}
      </Typography>
      <Box height="1vw" bgcolor="rgba(255,255,255,0.8)" borderRadius={1}>
        <Box height={1} width={level / 100} bgcolor="primary.main" />
      </Box>
    </Stack>
  );
};

export default Skill;
