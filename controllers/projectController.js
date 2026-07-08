const Project = require("../models/Project");
const User = require("../models/User");
const Activity = require("../models/Activity");

// ================= CREATE PROJECT =================
const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      status,
      priority,
      dueDate,
    } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Project title is required",
      });
    }

    const project = await Project.create({
      title,
      description,
      status,
      priority,
      dueDate,
      createdBy: req.user.id,
    });

    // Debug logs
    console.log("Project Created:", project._id);

    // Activity Log
    await Activity.create({
      action: "Created Project",
      user: req.user.id,
      project: project._id,
    });

    console.log("Activity Created Successfully");

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET ALL PROJECTS =================
const getProjects = async (req, res) => {
  try {
    const { search, status, page = 1, limit = 5 } = req.query;

    let query = {};

    if (search) {
      query.title = {
        $regex: search,
        $options: "i",
      };
    }

    if (status) {
      query.status = status;
    }

    const projects = await Project.find(query)
      .populate("createdBy", "name email role")
      .skip((page - 1) * Number(limit))
      .limit(Number(limit));

    const total = await Project.countDocuments(query);

    res.status(200).json({
      success: true,
      totalProjects: total,
      currentPage: Number(page),
      totalPages: Math.ceil(total / limit),
      projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET SINGLE PROJECT =================
const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate("createdBy", "name email role")
      .populate("members", "name email role");

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= UPDATE PROJECT =================
const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    await Activity.create({
      action: "Updated Project",
      user: req.user.id,
      project: project._id,
    });

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= DELETE PROJECT =================
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    await Activity.create({
      action: "Deleted Project",
      user: req.user.id,
      project: project._id,
    });

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= ADD MEMBER =================
const addMember = async (req, res) => {
  try {
    const { userId } = req.body;

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (project.members.includes(userId)) {
      return res.status(400).json({
        success: false,
        message: "User already added",
      });
    }

    project.members.push(userId);

    await project.save();

    await Activity.create({
      action: "Added Member",
      user: req.user.id,
      project: project._id,
    });

    res.status(200).json({
      success: true,
      message: "Member added successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
  addMember,
};