import express from "express";
// import connectDB from "./config/db";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

import adminRoutes from "./routes/adminRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import discussionThreadRoutes from "./routes/discussionThreadRoutes.js";
import nftCertificationRoutes from "./routes/nftCertificationRoutes.js";
import userActivityRoutes from "./routes/userActivityLogRoutes.js";

import errorHandler from "./middleware/errorHandler.js";

// Middleware
app.use(cors());
app.use(express.json());
// Error Handler
app.use(errorHandler);

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/discussion-threads", discussionThreadRoutes);
app.use("/api/nft-certifications", nftCertificationRoutes);
app.use("/admin/activities", userActivityRoutes);
// app.use("api");

export default app;
