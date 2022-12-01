import React from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  XYPosition,
} from "reactflow";

import { TableNode } from "./components/table-node/table-node";
import { useBuilderStore } from "../builder-provider";
import shallow from "zustand/shallow";
import { NodePositionChange } from "@reactflow/core/dist/esm/types/changes";
import { selectNodes } from "../builder-provider/builder-provider.selector";

const nodeTypes = {
  table: TableNode,
};
export interface BuilderBoardProps {}

export function BuilderBoard({}: BuilderBoardProps) {
  const nodes = useBuilderStore(selectNodes, shallow);
  const setTablesPosition = useBuilderStore((state) => state.setTablesPosition);
  return (
    <ReactFlow
      nodes={nodes}
      onNodesChange={(changes) => {
        setTablesPosition(
          changes
            .filter(
              (change): change is NodePositionChange =>
                change.type === "position"
            )
            .map((change) => ({
              uuid: change.id,
              position: change.position as XYPosition,
            }))
        );
        changes.forEach((change) => {
          if (change.type === "position") {
            console.log(change.position);
          }
        });
      }}
      nodeTypes={nodeTypes}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
}
