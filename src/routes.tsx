import { BrowserRouter, Route, Routes as RRDRoutes } from "react-router-dom";
import React from "react";
import { Layout } from "./components/layout";
import { LoadingOverlay } from "@mantine/core";
const Index = React.lazy(() => import("./pages/index"));
const ObjectBuilder = React.lazy(
  () => import("./pages/object-builder/object-builder")
);

export function Routes() {
  return (
    <React.Suspense fallback={<LoadingOverlay visible overlayBlur={2} />}>
      <BrowserRouter>
        <RRDRoutes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="object-builder" element={<ObjectBuilder />} />
          </Route>
        </RRDRoutes>
      </BrowserRouter>
    </React.Suspense>
  );
}
