import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: () => Date.now() },
  role: { type: String, default: "USER" },
});

const User_RealState =
  models.User_RealState || model("User_RealState", userSchema);

export default User_RealState;
