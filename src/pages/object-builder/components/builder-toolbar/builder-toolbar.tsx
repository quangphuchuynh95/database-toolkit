import React from "react";
import { Paper, ActionIcon, Group } from "@mantine/core";
import { IconBrowserPlus } from "@tabler/icons";
import { useBuilderStore } from "../builder-provider";

export interface BuilderToolbarProps {}

export function BuilderToolbar({}: BuilderToolbarProps) {
  const addTable = useBuilderStore((state) => state.addTable);
  return (
    <Paper shadow="sm" p="md">
      <Group spacing="sm">
        <ActionIcon onClick={addTable}>
          <IconBrowserPlus />
        </ActionIcon>
      </Group>
    </Paper>
  );
}
