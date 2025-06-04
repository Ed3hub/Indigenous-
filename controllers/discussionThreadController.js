// /controllers/discussionThreadController.js

import DiscussionThread from "../models/DiscussionThread.js";

// Create a new discussion thread
export const createDiscussionThread = async (req, res) => {
  try {
    const { course, user, title, content, web3Interactions } = req.body;

    const newThread = new DiscussionThread({
      course,
      user,
      title,
      content,
      web3Interactions,
    });

    const savedThread = await newThread.save();
    res
      .status(201)
      .json({ message: "Discussion thread created", thread: savedThread });
  } catch (error) {
    console.error("Error creating discussion thread:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all discussion threads
export const getAllDiscussionThreads = async (req, res) => {
  try {
    const threads = await DiscussionThread.find()
      .populate("course")
      .populate("user")
      .sort({ createdAt: -1 });

    res.status(200).json({ threads });
  } catch (error) {
    console.error("Error fetching discussion threads:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single discussion thread by ID
export const getDiscussionThreadById = async (req, res) => {
  try {
    const { id } = req.params;

    const thread = await DiscussionThread.findById(id)
      .populate("course")
      .populate("user");

    if (!thread) {
      return res.status(404).json({ message: "Discussion thread not found" });
    }

    res.status(200).json({ thread });
  } catch (error) {
    console.error("Error fetching discussion thread:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a discussion thread
export const updateDiscussionThread = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, web3Interactions } = req.body;

    const updatedThread = await DiscussionThread.findByIdAndUpdate(
      id,
      { title, content, web3Interactions },
      { new: true }
    );

    if (!updatedThread) {
      return res.status(404).json({ message: "Discussion thread not found" });
    }

    res
      .status(200)
      .json({ message: "Discussion thread updated", thread: updatedThread });
  } catch (error) {
    console.error("Error updating discussion thread:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a discussion thread
export const deleteDiscussionThread = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedThread = await DiscussionThread.findByIdAndDelete(id);

    if (!deletedThread) {
      return res.status(404).json({ message: "Discussion thread not found" });
    }

    res.status(200).json({ message: "Discussion thread deleted" });
  } catch (error) {
    console.error("Error deleting discussion thread:", error);
    res.status(500).json({ message: "Server error" });
  }
};
