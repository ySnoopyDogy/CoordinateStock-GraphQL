import { Schema, model } from "mongoose";

interface MapsSchema {
  name: string;
  description: string;
  createdAt: number;
}

const MapsSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, default: "No description Given" },
  createdTimestamp: { type: Number, default: Date.now() },
});

export default model<MapsSchema>("Maps", MapsSchema);
