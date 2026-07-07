const File = require("../models/File");

// Upload File
const uploadFile = async (req, res) => {
  try {
    const { project, task } = req.body;

    const file = await File.create({
      fileName: req.file.filename,
      filePath: req.file.path,
      uploadedBy: req.user.id,
      project,
      task,
    });

    res.status(201).json({
      success: true,
      message: "File uploaded successfully",
      file,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get All Files
const getFiles = async (req, res) => {

  try {

    const files = await File.find()
      .populate("uploadedBy", "name email")
      .populate("project", "title")
      .populate("task", "title");

    res.status(200).json({
      success: true,
      count: files.length,
      files,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  uploadFile,
  getFiles,
};