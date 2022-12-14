import React from "react";

import { Box, TextField, Checkbox, Typography, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

const AddEducation = ({ append }) => {
  const [studyProgram, setStudyProgram] = useState("");
  const [institute, setInstitute] = useState("");
  const [started, setStarted] = useState(new Date().getTime());
  const [ended, setEnded] = useState(new Date().getTime());
  const [present, setPresent] = useState(false);

  const appendEducation = () => {
    append({ studyProgram, institute, started, ended, present });
    setStudyProgram("");
    setInstitute("");
    setStarted(new Date().getTime());
    setEnded(new Date().getTime());
    setPresent(false);
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
      <TextField
        value={studyProgram}
        onChange={(e) => setStudyProgram(e.target.value)}
        label="Study Program"
        variant="standard"
        placeholder="BS in Computer Science"
        fullWidth
      />

      <TextField
        value={institute}
        onChange={(e) => setInstitute(e.target.value)}
        label="Institute"
        variant="standard"
        placeholder="xyz University of El Dorado, South America"
        fullWidth
      />

      <DatePicker
        value={new Date(started)}
        onChange={(v) => setStarted(v?._d.getTime())}
        label="Started"
        renderInput={(params) => (
          <TextField {...params} variant="standard" fullWidth sx={{ mt: 2 }} />
        )}
      />

      <DatePicker
        disabled={present}
        value={new Date(ended)}
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

      <Button
        onClick={appendEducation}
        color="success"
        size="large"
        fullWidth
        sx={{ my: 1 }}
      >
        Add
      </Button>
    </Box>
  );
};

export default AddEducation;
