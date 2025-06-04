// /controllers/userActivityLogController.js

import UserActivityLog from "../models/UserActivityLog.js";

// Create a new user activity log
export const createUserActivity = async (req, res) => {
  try {
    const { user, activityType, course, details, tokenReward } = req.body;

    const newActivity = new UserActivityLog({
      user,
      activityType,
      course,
      details,
      tokenReward,
    });

    const savedActivity = await newActivity.save();
    res.status(201).json({
      message: "Activity logged successfully",
      activity: savedActivity,
    });
  } catch (error) {
    console.error("Error creating activity log:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all activity logs
export const getAllUserActivities = async (req, res) => {
  try {
    const activities = await UserActivityLog.find()
      .populate("user")
      .populate("course");
    res.status(200).json(activities);
  } catch (error) {
    console.error("Error fetching activities:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get single activity log by ID
export const getUserActivityById = async (req, res) => {
  try {
    const { id } = req.params;
    const activity = await UserActivityLog.findById(id)
      .populate("user")
      .populate("course");
    if (!activity)
      return res.status(404).json({ message: "Activity not found" });
    res.status(200).json(activity);
  } catch (error) {
    console.error("Error fetching activity:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update an activity log by ID
export const updateUserActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedActivity = await UserActivityLog.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedActivity)
      return res.status(404).json({ message: "Activity not found" });
    res
      .status(200)
      .json({ message: "Activity updated", activity: updatedActivity });
  } catch (error) {
    console.error("Error updating activity:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete an activity log by ID
export const deleteUserActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await UserActivityLog.findByIdAndDelete(id);
    if (!deleted)
      return res.status(404).json({ message: "Activity not found" });
    res.status(200).json({ message: "Activity deleted" });
  } catch (error) {
    console.error("Error deleting activity:", error);
    res.status(500).json({ message: "Server error" });
  }
};
