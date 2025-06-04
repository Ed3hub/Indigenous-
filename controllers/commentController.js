// /controllers/commentController.js

import Comment from "../models/Comment.js"; // Import Comment model
import mongoose from "mongoose";

// Create a new comment
export const createComment = async (req, res) => {
  try {
    const { thread, user, content, web3Interactions } = req.body;

    const newComment = new Comment({
      thread,
      user,
      content,
      web3Interactions,
    });

    const savedComment = await newComment.save();
    res.status(201).json({ message: "Comment created", comment: savedComment });
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all comments
export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate("thread")
      .populate("user")
      .sort({ createdAt: -1 });

    res.status(200).json({ comments });
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single comment by ID
export const getCommentById = async (req, res) => {
  try {
    const { id } = req.params;

    const comment = await Comment.findById(id)
      .populate("thread")
      .populate("user");

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json({ comment });
  } catch (error) {
    console.error("Error fetching comment:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a comment
export const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { content, web3Interactions } = req.body;

    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { content, web3Interactions },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res
      .status(200)
      .json({ message: "Comment updated", comment: updatedComment });
  } catch (error) {
    console.error("Error updating comment:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a comment
export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedComment = await Comment.findByIdAndDelete(id);

    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json({ message: "Comment deleted" });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ message: "Server error" });
  }
};
