import React from "react";

import Input from "../Input";

import { Box, TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const EditProject = ({ remove, index, control, watch, setValue, errors }) => {
  return (
    <Box
      sx={{ "& .MuiFormControl-root": { my: 1 } }}
      border={1}
      borderColor="primary.main"
      p={1}
      borderRadius={2}
      my={1}
    >
      <Input
        control={control}
        name={`projects.${index}.name`}
        error={errors?.projects?.[index]?.name}
        label="Name"
        placeholder="Project's name"
        variant="standard"
        fullWidth
      />
      <Input
        control={control}
        name={`projects.${index}.description`}
        error={errors?.projects?.[index]?.description}
        label="Description"
        variant="standard"
        fullWidth
      />
      <Input
        control={control}
        name={`projects.${index}.link`}
        label="Link"
        variant="standard"
        fullWidth
      />
      <DatePicker
        value={new Date(watch(`projects.${index}.finished`))}
        onChange={(v) =>
          setValue(`projects.${index}.finished`, v?._d.getTime(), {
            shouldValidate: true,
          })
        }
        label="Finished"
        renderInput={(params) => (
          <TextField
            {...params}
            error={!!errors?.projects?.[index]?.finished}
            helperText={errors?.projects?.[index]?.finished?.message}
            variant="standard"
            fullWidth
            sx={{ mt: 2 }}
          />
        )}
      />
      <Button onClick={() => remove(index)} color="error" sx={{ width: 1 }}>
        Remove
      </Button>
    </Box>
  );
};

export default EditProject;
