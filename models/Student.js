import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  walletAddress: { type: String, required: true, unique: true, index: true }, // Wallet to receive NFT certificate
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profileImage: { type: String }, // Optional profile picture URL
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }], // Courses taken by student
  certificates: [
    { type: mongoose.Schema.Types.ObjectId, ref: "NFTCertificate" },
  ], // NFT certificates earned
});

const Student = mongoose.model("Student", StudentSchema);
export default Student;
