import mongoose from "mongoose";

export default () => {
  mongoose.connect("mongodb://mongodb:27018/db");

  mongoose.connection.once("once", () => {
    console.log("[DATABASE] Connected succesfully");
  });
};
