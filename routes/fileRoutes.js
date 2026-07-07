const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
  uploadFile,
  getFiles,
} = require("../controllers/fileController");

// Upload File
router.post(
  "/",
  protect,
  upload.single("file"),
  uploadFile
);

// Get All Files
router.get(
  "/",
  protect,
  getFiles
);

module.exports = router;