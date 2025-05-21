import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  

  if (!uri) {
    console.error("❌ MONGO_URI is undefined. Check your .env file.");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};

export default connectDB;
