export type WorldTypes = "OVERWORLD" | "NETHER" | "END";

export interface CoordsSchema {
  name: string;
  description: string;
  world: WorldTypes;
  createdTimestamp: number;
  x: number;
  y: number;
  z: number;
}
