import mongoose from "mongoose";

export default () => {
  mongoose
    .connect("mongodb://database:27017/coords")
    .then(() => console.log("[DATABASE] Connected Succesfully"))
    .catch((e) => console.error(`[DATABASE] Error when connecting, ${e}`));
};
