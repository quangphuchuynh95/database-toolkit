import React from "react";
import { Box } from "@mantine/core";
import { BuilderToolbar } from "./components/builder-toolbar/builder-toolbar";
import { BuilderBoard } from "./components/builder-board/builder-board";

export default function ObjectBuilder() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <BuilderToolbar />
      <BuilderBoard />
    </Box>
  );
}
