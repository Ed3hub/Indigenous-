import express from "express";
import app from "./app.js";
import db from "./config/db.js";

db();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
