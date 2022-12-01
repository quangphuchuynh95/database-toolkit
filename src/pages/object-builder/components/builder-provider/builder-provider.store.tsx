import {
  DatabaseTableEntity,
  dummyTableData,
  dummyPositionData,
  TablePositionEntity,
} from "../../../../services/object-builder/object-builder";
import create from "zustand";

export interface BuilderState {
  tables: DatabaseTableEntity[];
  tablesPosition: TablePositionEntity[];
}

export interface BuilderAction {
  setTablesPosition: (tablesPosition: TablePositionEntity[]) => void;
  addTable: () => void;
}

export const useBuilderStore = create<BuilderState & BuilderAction>((set) => ({
  tables: dummyTableData(),
  tablesPosition: dummyPositionData(),
  addTable: () => {
    const uuid = String(Date.now());
    set(({ tablesPosition, tables }) => ({
      tablesPosition: [
        ...tablesPosition,
        {
          uuid,
          position: { x: 0, y: 0 },
        },
      ],
      tables: [
        ...tables,
        {
          uuid,
          name: "new_table",
          columns: [],
        },
      ],
    }));
  },
  setTablesPosition: (newTablesPosition) => {
    set(({ tablesPosition }) => {
      const newPositionMap = new Map(
        newTablesPosition.map(({ uuid, position }) => [uuid, position])
      );
      return {
        tablesPosition: tablesPosition.map((item) => {
          if (!newPositionMap.has(item.uuid)) {
            return item;
          }
          return {
            uuid: item.uuid,
            position: newPositionMap.get(item.uuid) || item.position,
          };
        }),
      };
    });
  },
}));
