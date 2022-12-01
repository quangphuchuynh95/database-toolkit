import { NodeProps } from "@reactflow/core";
import React from "react";
import { Card, Stack, Box, Text, Group } from "@mantine/core";
import { useBuilderStore } from "../../../builder-provider";
import { selectTable } from "../../../builder-provider/builder-provider.selector";

export function TableNode({ data: { uuid } }: NodeProps<{ uuid: string }>) {
  const { name, columns } = useBuilderStore(selectTable(uuid));
  return (
    <Card shadow="sm" p={0}>
      <Box p="xs" bg="blue.5">
        <Text fz="sm" fw={500} color="gray.0">
          {name}
        </Text>
      </Box>
      <Stack spacing="xs" py="xs">
        {columns.map((column) => (
          <Box px="xs" key={column.name}>
            <Group position="apart" spacing="xs">
              <Text fz="sm" fw={500} color="dark.9">
                {column.name}
              </Text>
              <Text fz="sm" fw={300} color="dark.9">
                {column.type}
              </Text>
            </Group>
          </Box>
        ))}
        <Box px="xs">
          <Text fz="sm" fw={500}>
            Add column
          </Text>
        </Box>
      </Stack>
    </Card>
  );
}
