import React from "react";

import { Controller } from "react-hook-form";

import { TextField } from "@mui/material";

function Input({ name, control, error, errors, sx, ...props }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          {...props}
          variant="standard"
          error={!!error || !!errors?.[name]}
          helperText={error?.message || errors?.[name]?.message}
          fullWidth
          sx={sx || { my: 1 }}
        />
      )}
    />
  );
}

export default Input;
