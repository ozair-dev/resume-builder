import React from "react";

import Input from "../Input";

import { Box, Button, Slider, Stack, Typography } from "@mui/material";

const EditSkill = ({ remove, index, control, setValue, watch, errors }) => {
  const removeSkill = () => {
    remove(index);
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
        <Input
          control={control}
          name={`skills.${index}.skill`}
          error={errors?.skills?.[index]?.skill}
          label="skill"
          placeholder="ReactJS"
          variant="standard"
          sx={{ width: 100 }}
        />
        <Slider
          value={watch(`skills.${index}.level`)}
          onChange={(_, v) => setValue(`skills.${index}.level`, v)}
          sx={{ flex: 1 }}
        />
        <Typography>{watch(`skills.${index}.level`)}%</Typography>
      </Stack>
      <Button onClick={removeSkill} color="error" fullWidth sx={{ my: 1 }}>
        Remove
      </Button>
    </Box>
  );
};

export default EditSkill;
