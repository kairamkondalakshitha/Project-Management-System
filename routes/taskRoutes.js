const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  updateTaskProgress,
} = require("../controllers/taskController");

// ================= CREATE TASK =================
/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     tags:
 *       - Tasks
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Frontend Login Page
 *               description:
 *                 type: string
 *                 example: Build login page using React
 *               project:
 *                 type: string
 *               assignedTo:
 *                 type: string
 *               priority:
 *                 type: string
 *                 example: High
 *               status:
 *                 type: string
 *                 example: Pending
 *     responses:
 *       201:
 *         description: Task created successfully
 */
router.post(
  "/",
  protect,
  authorizeRoles("Admin", "Manager"),
  createTask
);

// ================= GET ALL TASKS =================
/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get all tasks
 *     tags:
 *       - Tasks
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all tasks
 */
router.get("/", protect, getTasks);

// ================= GET SINGLE TASK =================
/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Get task by ID
 *     tags:
 *       - Tasks
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task details
 */
router.get("/:id", protect, getTask);

// ================= UPDATE TASK =================
/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Update task
 *     tags:
 *       - Tasks
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task updated successfully
 */
router.put(
  "/:id",
  protect,
  authorizeRoles("Admin", "Manager"),
  updateTask
);

// ================= UPDATE TASK PROGRESS =================
/**
 * @swagger
 * /api/tasks/{id}/progress:
 *   put:
 *     summary: Update task progress
 *     tags:
 *       - Tasks
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               progress:
 *                 type: integer
 *                 example: 75
 *     responses:
 *       200:
 *         description: Task progress updated
 */
router.put(
  "/:id/progress",
  protect,
  updateTaskProgress
);

// ================= DELETE TASK =================
/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete task
 *     tags:
 *       - Tasks
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task deleted successfully
 */
router.delete(
  "/:id",
  protect,
  authorizeRoles("Admin", "Manager"),
  deleteTask
);

module.exports = router;