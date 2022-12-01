import React from "react";
import { Outlet } from "react-router-dom";
import { AppShell, Header } from "@mantine/core";
import { SideBar } from "./components/side-bar/side-bar";

export function Layout() {
  return (
    <AppShell
      padding={0}
      navbar={<SideBar />}
      header={<Header height={0}>{/* Header content */}</Header>}
    >
      <Outlet />
    </AppShell>
  );
}
