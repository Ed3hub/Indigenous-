
import express from "express";
import authController from "../controllers/authController.js";
import authenticateToken from "../middleware/authMiddleware.js"; 

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);

router.get("/dashboard", authenticateToken, authController.getUser); 

export default router;

