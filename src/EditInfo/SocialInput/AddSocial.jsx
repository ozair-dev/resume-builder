import React, { useState } from "react";

import { Stack, TextField, Button } from "@mui/material";

import { BsCheckLg } from "react-icons/bs";

import { SocialIcon } from "react-social-icons";

const AddSocial = ({ append }) => {
  const [social, setSocial] = useState("");

  const appendSocial = () => {
    append(social);
    setSocial("");
  };

  return (
    <Stack
      direction="row"
      width={1}
      spacing={1}
      alignItems="center"
      sx={{
        "& .social-svg-icon": {
          fill: (theme) => theme.palette.primary.main + " !important",
        },
      }}
    >
      <SocialIcon
        url={social || "https://www.github.com/johndoe"}
        bgColor="transparent"
      />
      <TextField
        value={social}
        onChange={(e) => setSocial(e.target.value)}
        variant="standard"
        fullWidth
        placeholder="https://www.github.com/johndoe"
        sx={{ my: 0.5 }}
      />
      <Button
        onClick={appendSocial}
        color="success"
        sx={{ minWidth: "fit-content" }}
      >
        <BsCheckLg />
      </Button>
    </Stack>
  );
};

export default AddSocial;
