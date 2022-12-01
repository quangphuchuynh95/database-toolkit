import { Group, Navbar, Text, ThemeIcon } from "@mantine/core";
import { IconPhoto } from "@tabler/icons";
import React from "react";
import { SideBarItem } from "./side-bar.styled";

export function SideBar() {
  return (
    <Navbar
      width={{ base: 300 }}
      p="xs"
      withBorder={false}
      sx={(theme) => ({
        boxShadow: theme.shadows.md,
      })}
    >
      <Navbar.Section>{/* Header with logo */}</Navbar.Section>
      <Navbar.Section grow mt="md">
        <SideBarItem to="/">
          <Group>
            <ThemeIcon variant="light">
              <IconPhoto />
            </ThemeIcon>
            <Text>Home</Text>
          </Group>
        </SideBarItem>
        <SideBarItem to="/object-builder">
          <Group>
            <ThemeIcon variant="light">
              <IconPhoto />
            </ThemeIcon>
            <Text>Object builder</Text>
          </Group>
        </SideBarItem>
      </Navbar.Section>
      <Navbar.Section>{/* Footer with user */}</Navbar.Section>
    </Navbar>
  );
}
