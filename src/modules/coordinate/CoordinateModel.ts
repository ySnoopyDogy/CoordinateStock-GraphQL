import { Schema, model } from "mongoose";

type WorldTypes = "OVERWORLD" | "NETHER" | "END";

interface CoordsSchema {
  name: string;
  description: string;
  world: WorldTypes;
  createdTimestamp: number;
  x: number;
  y: number;
  z: number;
}

const CoordinatesSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: "No description Given" },
  world: { type: String, default: "OVERWORLD" },
  createdTimestamp: { type: Number, default: Date.now() },
  x: { type: Number, required: true },
  y: { type: Number, default: 0 },
  z: { type: Number, default: 0, required: true },
});

export default model<CoordsSchema>("Coordinates", CoordinatesSchema);
