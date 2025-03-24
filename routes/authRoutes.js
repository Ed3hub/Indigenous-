import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router();

// Register
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/dashboard", authController.getUser);

export default router;
