import { Schema, model } from "mongoose";
import { CoordsSchema } from "../../types";

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
