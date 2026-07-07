/**
 * @swagger
 * /api/dashboard:
 *   get:
 *     summary: Get dashboard statistics
 *     tags:
 *       - Dashboard
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard data
 */
const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
  getDashboardStats,
} = require("../controllers/dashboardController");

// Dashboard (Admin & Manager only)
router.get(
  "/",
  protect,
  authorizeRoles("Admin", "Manager"),
  getDashboardStats
);

module.exports = router;