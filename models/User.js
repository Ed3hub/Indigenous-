import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  walletAddress: { type: String, default: null },
  avatar: { type: String, default: "" },
  bio: { type: String, default: "" },
});

const User = mongoose.model("User", UserSchema);
export default User;
