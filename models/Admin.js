import mongoose from "mongoose";

// Define schema for the Admin model
const AdminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true }, // Store hashed password
  createdAt: { type: Date, default: Date.now },
});

const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;
