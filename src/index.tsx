import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "reactflow/dist/style.css";

const container = document.getElementById("app");

if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
