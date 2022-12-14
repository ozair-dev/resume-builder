import React from "react";

import { Stack, Typography } from "@mui/material";

const Education = ({
  edu: { started, ended, present, studyProgram, institute },
}) => {
  return (
    <Stack direction="row">
      <Typography variant="x-small" fontWeight="bold" width={2 / 5}>
        {new Date(started).getFullYear()} -{" "}
        {present ? "Present" : new Date(ended).getFullYear()}
      </Typography>
      <Stack width={3 / 5}>
        <Typography variant="x-small" color="primary" fontWeight="bold">
          {studyProgram}
        </Typography>
        <Typography color="text.secondary" fontWeight="bold" variant="x-small">
          {institute}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Education;
