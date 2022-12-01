import { XYPosition } from "reactflow";

export type DataBaseColumnType =
  | "id"
  | "uuid"
  | "short-text"
  | "text"
  | "int"
  | "numeric"
  | "data"
  | "time"
  | "datetime";

export interface DatabaseColumn {
  name: string;
  type: DataBaseColumnType;
}

export interface DatabaseTableEntity {
  uuid: string;
  name: string;
  columns: DatabaseColumn[];
}

export interface TablePositionEntity {
  uuid: string;
  position: XYPosition;
}

export const dummyTableData = (): DatabaseTableEntity[] => [
  {
    uuid: "1",
    name: "table-a",
    columns: [
      {
        name: "name",
        type: "short-text",
      },
      {
        name: "data1",
        type: "int",
      },
      {
        name: "data2",
        type: "int",
      },
      {
        name: "data3",
        type: "int",
      },
      {
        name: "created_at",
        type: "datetime",
      },
      {
        name: "updated_at",
        type: "datetime",
      },
    ],
  },
  {
    uuid: "2",
    name: "table-a",
    columns: [
      {
        name: "name",
        type: "short-text",
      },
      {
        name: "data1",
        type: "int",
      },
      {
        name: "data2",
        type: "int",
      },
      {
        name: "data3",
        type: "int",
      },
      {
        name: "created_at",
        type: "datetime",
      },
      {
        name: "updated_at",
        type: "datetime",
      },
    ],
  },
];

export const dummyPositionData = (): TablePositionEntity[] => [
  {
    uuid: "1",
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    uuid: "2",
    position: {
      x: 0,
      y: 0,
    },
  },
];
