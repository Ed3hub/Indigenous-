const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       required:
 *         - title
 *         - instructor
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the course
 *           readOnly: true
 *         title:
 *           type: string
 *           description: The title of the course
 *         description:
 *           type: string
 *           description: A brief description of the course
 *         instructor:
 *           type: string
 *           format: objectId
 *           description: The ID of the instructor (references User schema)
 *         category:
 *           type: string
 *           description: The category of the course
 *           default: "General"
 *         price:
 *           type: number
 *           default: 0
 *           minimum: 0
 *           description: The price of the course (default is free)
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the course was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the course was last updated
 */

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    instructor: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
    category: { type: String, trim: true, default: "General" },
    price: { type: Number, default: 0, min: 0 }
  },
  { timestamps: true } 
);


courseSchema.index({ title: 1 });
courseSchema.index({ category: 1 });

module.exports = mongoose.model("Course", courseSchema);
