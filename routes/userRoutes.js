const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// ================= GET ALL USERS =================
router.get(
  "/",
  protect,
  authorizeRoles("Admin"),
  getUsers
);

// ================= GET SINGLE USER =================
router.get(
  "/:id",
  protect,
  authorizeRoles("Admin"),
  getUser
);

// ================= UPDATE USER =================
router.put(
  "/:id",
  protect,
  authorizeRoles("Admin"),
  updateUser
);

// ================= DELETE USER =================
router.delete(
  "/:id",
  protect,
  authorizeRoles("Admin"),
  deleteUser
);

module.exports = router;