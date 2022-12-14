import { Box, Button } from "@mui/material";
import React from "react";

import { grey } from "@mui/material/colors";

import { AiTwotoneCamera } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

const InputAndPreview = ({ photo, setFile, setOpen }) => {
  return (
    <Box
      width={150}
      height={150}
      margin="auto"
      border={1}
      borderColor={grey[300]}
      borderRadius="50%"
      position="relative"
      sx={{
        "& > .photo-placeholder, img": {
          width: 1,
          height: 1,
          borderRadius: "50%",
          color: "primary.light",
        },
      }}
    >
      {photo ? (
        <img src={photo} onClick={() => setOpen(true)} />
      ) : (
        <FaUserAlt className="photo-placeholder" />
      )}
      <label>
        <Button
          component="span"
          variant="contained"
          sx={{
            position: "absolute",
            p: 0.75,
            minWidth: "fit-content",
            fontSize: "larger",
            borderRadius: "50%",
            bottom: 0,
            right: 0,
            transform: "translate(-8px, -8px)",
          }}
        >
          <AiTwotoneCamera />
        </Button>
        <input
          type="file"
          onChange={(e) => (
            setFile(e.target.files[0]), (e.target.value = ""), setOpen(true)
          )}
          accept="image/*"
          hidden
        />
      </label>
    </Box>
  );
};

export default InputAndPreview;
