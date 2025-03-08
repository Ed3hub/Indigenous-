const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  instructor: { type: String, required: true },
  duration: { type: String }, // Example: "6 weeks"
  image: { type: String }, // Course cover image
  nftMintedCertificates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'NFTCertificate' }] // List of certificates issued
});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
