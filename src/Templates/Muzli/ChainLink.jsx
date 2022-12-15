import React from "react";

import { Stack, Box, Typography } from "@mui/material";

const ChainLink = ({ date, main, body, isLast, isSingle, list, ...props }) => {
  return (
    <Stack direction="row" {...props}>
      <Typography
        variant="x-small"
        fontWeight="bold"
        color="text.secondary"
        pr={1}
        width={2 / 6}
      >
        {date}
      </Typography>
      <Stack
        width={4 / 6}
        pl={1}
        pb={isLast ? 0 : 1}
        borderLeft={"0.2vw solid"}
        borderColor={isLast ? "transparent" : "primary.main"}
        position="relative"
      >
        {!isSingle && (
          <Box
            width="1.2vw"
            height="1.2vw"
            borderRadius="50%"
            border={"0.2vw solid"}
            borderColor="primary.main"
            bgcolor="white"
            position="absolute"
            top={0}
            left={0}
            sx={{ transform: "translateX(-60%)" }}
          />
        )}
        <Typography variant="x-small" color="primary.main" fontWeight="bold">
          {main}
        </Typography>
        <Typography variant="xx-small" color="text.secondary" fontWeight="bold">
          {body}
        </Typography>
        {!!list && (
          <Stack>
            {list.map((li, i) => (
              <Stack key={i} direction="row">
                <Typography variant="xx-small" color="text.secondary" mr={0.5}>
                  -
                </Typography>
                <Typography variant="xx-small" color="text.secondary">
                  {li}
                </Typography>
              </Stack>
            ))}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default ChainLink;
