const express = require("express");
const cors = require("cors");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const connectDB = require("./config/db");
const nftCertificationRoutes = require("./routes/nftCertificationRoutes");
const authRoutes = require("./routes/authRoutes");
// const errorHandler = require("./middleware/errorHandler");

const app = express();


connectDB().catch((err) => {
  console.error("❌ MongoDB Connection Failed:", err.message);
  process.exit(1);
});

//  Middleware
app.use(cors());
app.use(express.json());

// 🔹 Swagger Configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ed3Hub API",
      version: "1.0.0",
      description: "API Documentation for Ed3Hub (Non-Blockchain)",
    },
    servers: [{ url: `http://localhost:${process.env.PORT || 5000}` }],
  },
  apis: ["./routes/*.js", "./controllers/*.js"], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


//  Routes
app.use("/api/nft-certifications", nftCertificationRoutes);
app.use("/api/auth", authRoutes);




//  Error Handler
app.use(require('./middleware/errorHandler'));

module.exports = app;
