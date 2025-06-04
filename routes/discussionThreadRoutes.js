import express from "express";
import {
  createDiscussionThread,
  getAllDiscussionThreads,
  getDiscussionThreadById,
  updateDiscussionThread,
  deleteDiscussionThread,
} from "../controllers/discussionThreadController.js";

const router = express.Router();

router.post("/", createDiscussionThread); // Create
router.get("/", getAllDiscussionThreads); // Read all
router.get("/:id", getDiscussionThreadById); // Read one
router.put("/:id", updateDiscussionThread); // Update
router.delete("/:id", deleteDiscussionThread); // Delete

export default router;
