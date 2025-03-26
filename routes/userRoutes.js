const express = require("express");
const { body } = require("express-validator");
const { 
  register, 
  login, 
  getUserProfile, 
  updateUserProfile, 
  requestPasswordReset, 
  resetPassword 
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management routes
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user and receive a token
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: User already exists
 */
router.post(
  "/auth/register",
  [
    body("fullName").notEmpty().withMessage("Full name is required"),
    body("email").isEmail().withMessage("Invalid email format"),
    body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
  ],
  register
);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login and receive a token
 *     tags: [Users]
 */
router.post(
  "/auth/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  login
);

/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Get user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 */
router.get("/profile", protect, getUserProfile);

/**
 * @swagger
 * /profile:
 *   put:
 *     summary: Update user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 */
router.put(
  "/profile",
  protect,
  [
    body("fullName").optional().notEmpty().withMessage("Full name cannot be empty"),
    body("email").optional().isEmail().withMessage("Invalid email"),
  ],
  updateUserProfile
);

/**
 * @swagger
 * /forgot-password:
 *   post:
 *     summary: Request password reset
 *     tags: [Users]
 */
router.post(
  "/forgot-password",
  [body("email").isEmail().withMessage("Invalid email")],
  requestPasswordReset
);

/**
 * @swagger
 * /reset-password:
 *   post:
 *     summary: Reset password using token
 *     tags: [Users]
 */
router.post(
  "/reset-password",
  [
    body("token").notEmpty().withMessage("Token is required"),
    body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
  ],
  resetPassword
);

module.exports = router;
