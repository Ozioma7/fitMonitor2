// backend/controllers/activityController.js
const Activity = require('../models/Activity');

// Log an activity
exports.logActivity = async (req, res) => {
  const { type, name, description, duration } = req.body;
  const user = req.user; // Assuming you have authenticated and set the user ID in the request

  try {
    const newActivity = new Activity({
      type,
      name,
      description,
      duration,
      user
    });

    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all activities for a user
exports.getActivities = async (req, res) => {
  const user = req.user;

  try {
    const activities = await Activity.find({ user });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
