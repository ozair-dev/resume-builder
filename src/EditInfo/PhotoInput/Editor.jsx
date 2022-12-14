import React, { useState, useEffect, useRef } from "react";

import { Modal, Box, Stack, Slider, Button } from "@mui/material";

import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { TiTick } from "react-icons/ti";

import AvatarEditor from "react-avatar-editor";

const Editor = ({ setPhoto, file, open, setOpen }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setScale(1);
  }, [file]);

  const editor = useRef(null);

  const handleClose = () => {
    if (editor.current) {
      const imageDataURL = editor.current.getImageScaledToCanvas().toDataURL();
      setPhoto(imageDataURL);
    }
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box p={1} borderRadius={2} backgroundColor="white" maxHeight="75%">
        <Button
          variant="contained"
          onClick={handleClose}
          sx={{
            display: "block",
            mr: 0,
            p: 0.5,
            minWidth: "fit-content",
            fontSize: "x-large",
            lineHeight: 0,
            my: 0.5,
            ml: "100%",
            transform: "translateX(-100%)",
          }}
        >
          <TiTick />
        </Button>
        <AvatarEditor
          ref={editor}
          image={file}
          width={300}
          height={300}
          border={10}
          scale={scale}
          style={{ cursor: "move" }}
        />
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          sx={{ "& > .icon": { fontSize: "xx-large" } }}
        >
          <CgMathMinus className="icon" />
          <Slider
            value={scale}
            onChange={(_, n) => setScale(n)}
            min={1}
            max={5}
            step={0.01}
          />
          <CgMathPlus className="icon" />
        </Stack>
      </Box>
    </Modal>
  );
};

export default Editor;
