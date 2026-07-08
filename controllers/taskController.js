const sendEmail = require("../utils/sendEmail");
const User = require("../models/User");
const Task = require("../models/Task");
const { getIO } = require("../socket/socket");

// ================= CREATE TASK =================
const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      project,
      assignedTo,
      status,
      priority,
      dueDate,
    } = req.body;

    // Validation
    if (!title || !project) {
      return res.status(400).json({
        success: false,
        message: "Title and Project are required",
      });
    }

    // Create Task
    const task = await Task.create({
      title,
      description,
      project,
      assignedTo,
      status,
      priority,
      dueDate,
      createdBy: req.user.id,
    });

    // Find Assigned User
    const assignedUser = await User.findById(assignedTo);

    if (assignedUser) {
      // Send Email
      await sendEmail(
        assignedUser.email,
        "New Task Assigned",
        `Hello ${assignedUser.name},

A new task has been assigned to you.

Task: ${title}

Please login to the Project Management System to view it.

Regards,
Project Management System`
      );

      console.log("✅ Email Sent Successfully");

      // Real-time Notification
      const io = getIO();

      io.emit("newTask", {
        message: "New Task Assigned",
        title: task.title,
        assignedTo: assignedUser.name,
      });

      console.log("✅ Real-time notification sent");
    }

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET ALL TASKS =================
const getTasks = async (req, res) => {
  try {

    // Search
    const search = req.query.search || "";

    // Filter
    const status = req.query.status;
    const priority = req.query.priority;

    // Pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    // Query Object
    const query = {};

    if (search) {
      query.title = {
        $regex: search,
        $options: "i",
      };
    }

    if (status) {
      query.status = status;
    }

    if (priority) {
      query.priority = priority;
    }

    // Total Records
    const totalTasks = await Task.countDocuments(query);

    // Fetch Tasks
    const tasks = await Task.find(query)
      .populate("assignedTo", "name email")
      .populate("project", "title")
      .populate("createdBy", "name")
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      currentPage: page,
      totalPages: Math.ceil(totalTasks / limit),
      totalTasks,
      count: tasks.length,
      tasks,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET SINGLE TASK =================
const getTask = async (req, res) => {
  try {

    const task = await Task.findById(req.params.id)
      .populate("assignedTo", "name email")
      .populate("project", "title")
      .populate("createdBy", "name email");

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      task,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= UPDATE TASK =================
const updateTask = async (req, res) => {
  try {

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= UPDATE TASK PROGRESS =================
const updateTaskProgress = async (req, res) => {
  try {

    const { progress } = req.body;

    if (progress < 0 || progress > 100) {
      return res.status(400).json({
        success: false,
        message: "Progress must be between 0 and 100",
      });
    }

    let status = "Pending";

    if (progress > 0 && progress < 100) {
      status = "In Progress";
    }

    if (progress === 100) {
      status = "Completed";
    }

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        progress,
        status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task progress updated successfully",
      task,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= DELETE TASK =================
const deleteTask = async (req, res) => {
  try {

    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= EXPORTS =================
module.exports = {
  createTask,
  getTasks,
  getTask,
  updateTask,
  updateTaskProgress,
  deleteTask,
};