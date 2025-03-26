const express = require("express");
const { getCourses, createCourse } = require("../controllers/courseController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: Course management routes
 */

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Fetch all courses
 *     tags: [Courses]
 *     description: Retrieves a list of all available courses with instructor details.
 *     responses:
 *       200:
 *         description: List of courses retrieved successfully
 *       500:
 *         description: Internal server error
 */
router.get("/", getCourses);

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Create a new course
 *     tags: [Courses]
 *     description: Allows an authenticated instructor to create a new course.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "JavaScript for Beginners"
 *               description:
 *                 type: string
 *                 example: "A beginner-friendly course on JavaScript."
 *               category:
 *                 type: string
 *                 example: "Programming"
 *               price:
 *                 type: number
 *                 example: 49.99
 *     responses:
 *       201:
 *         description: Course created successfully
 *       401:
 *         description: Unauthorized, authentication required
 *       500:
 *         description: Internal server error
 */
router.post("/", authMiddleware, createCourse);

module.exports = router;
