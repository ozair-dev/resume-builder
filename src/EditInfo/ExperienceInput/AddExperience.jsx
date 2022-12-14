import React, { useState } from "react";

import { Box, TextField, Checkbox, Typography, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AddExperience = ({ append }) => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [started, setStarted] = useState(new Date().getTime());
  const [ended, setEnded] = useState(new Date().getTime());
  const [present, setPresent] = useState(false);
  const [responsibilities, setResponsibilities] = useState([""]);

  const appendExperience = () => {
    append({
      title,
      company,
      started,
      ended,
      present,
      location,
      responsibilities: responsibilities.filter(Boolean),
    });
    setTitle("");
    setCompany("");
    setLocation("");
    setStarted(new Date().getTime());
    setEnded(new Date().getTime());
    setPresent(false);
    setResponsibilities([""]);
  };

  const handleResponsibilityChange = (i, e) => {
    setResponsibilities((p) => {
      let n = [...p.slice(0, i), e.target.value, ...p.slice(i + 1)];
      if (n.at(-1)) n = [...n, ""];
      return n;
    });
  };

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
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label="Job Title"
        placeholder="Full Stack Web Developer"
        variant="standard"
        fullWidth
      />
      <TextField
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        label="Company"
        variant="standard"
        fullWidth
      />

      <TextField
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        label="Location"
        variant="standard"
        fullWidth
      />
      <Typography variant="h6" color="text.secondary" mt={1}>
        Responsibilities
      </Typography>

      {responsibilities.map((res, i) => (
        <TextField
          key={i}
          value={res}
          onChange={(e) => handleResponsibilityChange(i, e)}
          variant="standard"
          fullWidth
          placeholder="Enter here"
        />
      ))}
      <Typography color="info.main" fontSize="small">
        Empty fields will be omitted automatically
      </Typography>
      <DatePicker
        value={started}
        onChange={(v) => setStarted(v?._d.getTime())}
        label="Started"
        renderInput={(params) => (
          <TextField {...params} variant="standard" fullWidth sx={{ mt: 2 }} />
        )}
      />

      <DatePicker
        disabled={present}
        value={ended}
        onChange={(v) => setEnded(v?._d.getTime())}
        label="Ended"
        renderInput={(params) => (
          <TextField {...params} variant="standard" fullWidth sx={{ mt: 2 }} />
        )}
      />

      <Box my={1}>
        <Checkbox
          checked={present}
          onChange={(e) => setPresent(e.target.checked)}
        />
        <Typography
          fontSize="large"
          display="inline"
          sx={{ verticalAlign: "middle" }}
        >
          Present
        </Typography>
      </Box>

      <Button onClick={appendExperience} color="success" fullWidth>
        Add
      </Button>
    </Box>
  );
};

export default AddExperience;
