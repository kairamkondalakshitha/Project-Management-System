const Activity = require("../models/Activity");

// Get All Activities
const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find()
      .populate("user", "name email")
      .populate("project", "title")
      .populate("task", "title")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: activities.length,
      activities,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getActivities,
};