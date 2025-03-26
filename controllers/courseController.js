const Course = require("../models/Course");

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Fetch all courses
 *     description: Retrieves a list of all available courses with instructor details.
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: List of courses retrieved successfully
 *       500:
 *         description: Internal server error
 */
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("instructor", "fullName email");
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Create a new course
 *     description: Allows an authenticated instructor to create a new course.
 *     tags: [Courses]
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
 *       500:
 *         description: Internal server error
 */
exports.createCourse = async (req, res) => {
  try {
    const { title, description, category, price } = req.body;
    const newCourse = new Course({ title, description, category, price, instructor: req.user.userId });
    await newCourse.save();
    res.status(201).json({ message: "Course created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
