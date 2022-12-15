import { Stack, Button, InputAdornment } from "@mui/material";
import React from "react";

import Input from "../Input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineDelete } from "react-icons/ai";

const EditInterest = ({ remove, watch, index, control, errors }) => {
  return (
    <Stack direction="row" spacing={1} width={1}>
      <Input
        variant="standard"
        placeholder="icon"
        control={control}
        name={`interests.${index}.icon`}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{ color: "primary.main", fontSize: "large" }}
            >
              <FontAwesomeIcon
                icon={watch(`interests.${index}.icon`) || "fa-solid fa-book"}
              />
            </InputAdornment>
          ),
        }}
        sx={{ width: 150 }}
      />
      <Input
        variant="standard"
        placeholder="Reading"
        control={control}
        name={`interests.${index}.interest`}
        error={errors?.interests?.[index].interest}
        fullWidth
      />
      <Button
        onClick={() => remove(index)}
        color="error"
        sx={{ minWidth: "fit-content", fontSize: "large" }}
      >
        <AiOutlineDelete />
      </Button>
    </Stack>
  );
};

export default EditInterest;
