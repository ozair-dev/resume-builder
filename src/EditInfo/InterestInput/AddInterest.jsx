import { Stack, TextField, Button, InputAdornment } from "@mui/material";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsCheckLg } from "react-icons/bs";

const AddInterest = ({ append }) => {
  const [icon, setIcon] = useState("");
  const [interest, setInterest] = useState("");
  const appendInterest = () => {
    append({ icon, interest });
    setIcon("");
    setInterest("");
  };

  return (
    <Stack direction="row" spacing={1} width={1}>
      <TextField
        variant="standard"
        placeholder="icon"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{ color: "primary.main", fontSize: "large" }}
            >
              <FontAwesomeIcon icon={icon || "fa-solid fa-book"} />
            </InputAdornment>
          ),
        }}
        sx={{ width: 150 }}
      />
      <TextField
        variant="standard"
        placeholder="Reading"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        fullWidth
      />
      <Button
        onClick={appendInterest}
        color="success"
        sx={{ minWidth: "fit-content" }}
      >
        <BsCheckLg />
      </Button>
    </Stack>
  );
};

export default AddInterest;
