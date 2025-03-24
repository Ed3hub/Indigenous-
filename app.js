import express from "express";
import db from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
import authRoutes from "./routes/authRoutes.js";
// const nftCertificationRoutes = require("./routes/nftCertificationRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Error Handler
// app.use(require("./middleware/errorHandler"));

export default app;
