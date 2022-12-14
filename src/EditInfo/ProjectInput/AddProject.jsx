import React, { useState } from "react";

import { Box, TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const AddProject = ({ append }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [finished, setFinished] = useState(new Date().getTime());

  const appendProject = () => {
    append({ name, description, link, finished });
    setName("");
    setDescription("");
    setLink("");
    setFinished(new Date().getTime());
  };

  return (
    <Box
      sx={{ "& .MuiFormControl-root": { my: 1 } }}
      border={1}
      borderColor="primary.main"
      p={1}
      borderRadius={2}
      my={1}
    >
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Name"
        placeholder="Project's name"
        variant="standard"
        fullWidth
      />
      <TextField
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        label="Description"
        variant="standard"
        fullWidth
      />
      <TextField
        value={link}
        onChange={(e) => setLink(e.target.value)}
        label="Link"
        variant="standard"
        fullWidth
      />
      <DatePicker
        value={new Date(finished)}
        onChange={(v) => setFinished(v?._d.getTime())}
        label="Finished"
        renderInput={(params) => (
          <TextField {...params} variant="standard" fullWidth sx={{ mt: 2 }} />
        )}
      />
      <Button onClick={appendProject} color="success" sx={{ width: 1 }}>
        Add
      </Button>
    </Box>
  );
};

export default AddProject;
