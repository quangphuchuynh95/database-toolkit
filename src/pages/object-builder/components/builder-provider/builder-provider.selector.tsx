import { BuilderState } from "./builder-provider.store";
import { Node } from "reactflow";

export const selectNodes = (state: BuilderState) =>
  state.tablesPosition.map(
    (item): Node<{ uuid: string }> => ({
      id: item.uuid,
      position: item.position,
      type: "table",
      data: {
        uuid: item.uuid,
      },
    })
  );

export const selectTable = (uuid: string) => (state: BuilderState) => {
  const table = state.tables.find((table) => table.uuid === uuid);
  if (!table) {
    throw new Error("Table uuid is not exist");
  }
  return table;
};
