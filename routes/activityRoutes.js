/**
 * @swagger
 * /api/activities:
 *   get:
 *     summary: Get activity logs
 *     tags:
 *       - Activities
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Activity list
 */
const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getActivities,
} = require("../controllers/activityController");

router.get("/", protect, getActivities);

module.exports = router;