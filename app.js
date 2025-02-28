const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const nftCertificationRoutes = require('./routes/nftCertificationRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/nft-certifications', nftCertificationRoutes);

// Error Handler
app.use(require('./middleware/errorHandler'));

module.exports = app;
