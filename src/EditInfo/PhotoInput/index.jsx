import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import InputAndPreview from "./InputAndPreview";
import Editor from "./Editor";

const Index = (props) => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(props.photo || null);

  return (
    <Box margin="auto">
      <InputAndPreview {...props} setFile={setFile} setOpen={setOpen} />
      <Editor
        {...props}
        file={file}
        setFile={setFile}
        open={open}
        setOpen={setOpen}
      />
    </Box>
  );
};

export default Index;
