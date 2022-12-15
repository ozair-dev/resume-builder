import React from "react";

import Input from "../Input";

import { Stack, Button } from "@mui/material";

import { AiOutlineDelete } from "react-icons/ai";

import { SocialIcon } from "react-social-icons";

const EditSocial = ({ remove, index, watch, control, errors }) => {
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
        url={watch(`socials.${index}`) || "https://www.github.com/johndoe"}
        bgColor="transparent"
      />

      <Input
        control={control}
        error={errors?.socials?.[index]}
        name={`socials.${index}`}
        placeholder="https://www.twitter.com"
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

export default EditSocial;
