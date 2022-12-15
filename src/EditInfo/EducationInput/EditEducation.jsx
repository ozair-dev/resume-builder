import React from "react";

import { Box, TextField, Checkbox, Typography, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Input from "../Input";

const EditEducation = ({ control, index, watch, setValue, errors, remove }) => {
  return (
    <Box
      width={1}
      border={1}
      borderColor="primary.main"
      p={1}
      borderRadius={2}
      my={1}
    >
      <Input
        control={control}
        name={`educations.${index}.studyProgram`}
        error={errors?.educations?.[index]?.studyProgram}
        label="Study Program"
        variant="standard"
        placeholder="BS in Computer Science"
        fullWidth
      />

      <Input
        control={control}
        name={`educations.${index}.institute`}
        error={errors?.educations?.[index]?.institute}
        label="Institute"
        variant="standard"
        placeholder="xyz University of El Dorado, South America"
        fullWidth
      />

      <DatePicker
        value={new Date(watch(`educations.${index}.started`))}
        onChange={(v) =>
          setValue(`educations.${index}.started`, v?._d.getTime(), {
            shouldValidate: true,
          })
        }
        label="Started"
        renderInput={(params) => (
          <TextField
            {...params}
            error={!!errors?.educations?.[index]?.started}
            helperText={errors?.educations?.[index]?.started?.message}
            variant="standard"
            fullWidth
            sx={{ mt: 2 }}
          />
        )}
      />

      <DatePicker
        disabled={watch(`educations.${index}.present`)}
        value={new Date(watch(`educations.${index}.ended`))}
        onChange={(v) =>
          setValue(`educations.${index}.ended`, v?._d.getTime(), {
            shouldValidate: true,
          })
        }
        label="Ended"
        renderInput={(params) => (
          <TextField
            {...params}
            error={!!errors?.educations?.[index]?.ended}
            helperText={errors?.educations?.[index]?.ended?.message}
            variant="standard"
            fullWidth
            sx={{ mt: 2 }}
          />
        )}
      />

      <Box my={1}>
        <Checkbox
          checked={watch(`educations.${index}.present`)}
          onChange={(e) =>
            setValue(`educations.${index}.present`, e.target.checked)
          }
        />
        <Typography
          fontSize="large"
          display="inline"
          sx={{ verticalAlign: "middle" }}
        >
          Present
        </Typography>
      </Box>

      <Button
        onClick={() => remove(index)}
        color="error"
        size="large"
        fullWidth
        sx={{ my: 1 }}
      >
        Remove
      </Button>
    </Box>
  );
};

export default EditEducation;
