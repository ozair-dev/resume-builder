import React from "react";

import Input from "../Input";

import { Box, TextField, Checkbox, Typography, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AddExperience = ({ remove, control, index, watch, setValue, errors }) => {
  return (
    <Box
      width={1}
      sx={{ "& .MuiFormControl-root": { my: 1 } }}
      border={1}
      borderColor="primary.main"
      p={1}
      borderRadius={2}
      my={1}
    >
      <Input
        control={control}
        name={`experiences.${index}.title`}
        error={errors?.experiences?.[index]?.title}
        label="Job Title"
        placeholder="Full Stack Web Developer"
        variant="standard"
        fullWidth
      />
      <Input
        control={control}
        name={`experiences.${index}.company`}
        error={errors?.experiences?.[index]?.company}
        label="Company"
        variant="standard"
        fullWidth
      />

      <Input
        control={control}
        name={`experiences.${index}.location`}
        error={errors?.experiences?.[index]?.location}
        label="Location"
        variant="standard"
        fullWidth
      />
      {!!watch(`experiences.${index}.responsibilities`)?.length && (
        <>
          <Typography variant="h6" color="text.secondary" mt={1}>
            Responsibilities
          </Typography>

          {watch(`experiences.${index}.responsibilities`).map((res, i) => (
            <Input
              key={i}
              control={control}
              name={`experiences.${index}.responsibilities.${i}`}
              error={errors?.experiences?.[index]?.responsibilities?.[i]}
              variant="standard"
              fullWidth
              placeholder="Enter here"
            />
          ))}
        </>
      )}
      <DatePicker
        value={watch(`experiences.${index}.started`)}
        onChange={(v) =>
          setValue(`experiences.${index}.started`, v?._d.getTime(), {
            shouldValidate: true,
          })
        }
        label="Started"
        renderInput={(params) => (
          <TextField
            {...params}
            error={!!errors?.experiences?.[index]?.started}
            helperText={errors?.experiences?.[index]?.started?.message}
            variant="standard"
            fullWidth
            sx={{ mt: 2 }}
          />
        )}
      />

      <DatePicker
        disabled={watch(`experiences.${index}.present`)}
        value={watch(`experiences.${index}.ended`)}
        onChange={(v) =>
          setValue(`experiences.${index}.ended`, v?._d.getTime(), {
            shouldValidate: true,
          })
        }
        label="Ended"
        renderInput={(params) => (
          <TextField
            {...params}
            error={!!errors?.experiences?.[index]?.ended}
            helperText={errors?.experiences?.[index]?.ended?.message}
            variant="standard"
            fullWidth
            sx={{ mt: 2 }}
          />
        )}
      />

      <Box my={1}>
        <Checkbox
          checked={watch(`experiences.${index}.present`)}
          onChange={(e) =>
            setValue(`experiences.${index}.present`, e.target.checked)
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

      <Button onClick={() => remove(index)} color="error" fullWidth>
        Remove
      </Button>
    </Box>
  );
};

export default AddExperience;
