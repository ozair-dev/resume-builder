import React, { useState } from "react";

import {
  Box,
  Button,
  TextField,
  Slider,
  Stack,
  Typography,
} from "@mui/material";

const AddSkill = ({ append }) => {
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState(50);
  const appendSkill = () => {
    append({ skill, level });
    setSkill("");
    setLevel(50);
  };
  return (
    <Box
      width={1}
      border={1}
      borderColor="primary.main"
      p={1}
      borderRadius={2}
      my={1}
    >
      <Stack direction="row" spacing={3} alignItems="flex-end">
        <TextField
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          label="skill"
          placeholder="ReactJS"
          variant="standard"
          sx={{ width: 100 }}
        />
        <Slider
          value={level}
          onChange={(_, v) => setLevel(v)}
          sx={{ flex: 1 }}
        />
        <Typography>{level}%</Typography>
      </Stack>
      <Button onClick={appendSkill} color="success" fullWidth sx={{ my: 1 }}>
        Add
      </Button>
    </Box>
  );
};

export default AddSkill;
