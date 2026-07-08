const projectValidation = require("../validations/projectValidation");
const validationMiddleware = require("../middleware/validationMiddleware");
const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
  addMember,
} = require("../controllers/projectController");

// ================= CREATE PROJECT =================
/**
 * @swagger
 * /api/projects:
 *   post:
 *     summary: Create a new project
 *     tags:
 *       - Projects
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
 *                 example: College ERP System
 *               description:
 *                 type: string
 *                 example: Student management portal
 *               priority:
 *                 type: string
 *                 example: High
 *               status:
 *                 type: string
 *                 example: Pending
 *               dueDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Project created successfully
 */
router.post(
  "/",
  protect,
  authorizeRoles("Admin", "Manager"),
  projectValidation,
  validationMiddleware,
  createProject
);
// ================= GET ALL PROJECTS =================
/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Get all projects
 *     tags:
 *       - Projects
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all projects
 */
router.get("/", protect, getProjects);

// ================= GET SINGLE PROJECT =================
/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *     summary: Get project by ID
 *     tags:
 *       - Projects
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
 *         description: Project details
 */
router.get("/:id", protect, getProject);

// ================= UPDATE PROJECT =================
/**
 * @swagger
 * /api/projects/{id}:
 *   put:
 *     summary: Update project
 *     tags:
 *       - Projects
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
 *         description: Project updated successfully
 */
router.put(
  "/:id",
  protect,
  authorizeRoles("Admin", "Manager"),
  updateProject
);

// ================= DELETE PROJECT =================
/**
 * @swagger
 * /api/projects/{id}:
 *   delete:
 *     summary: Delete project
 *     tags:
 *       - Projects
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
 *         description: Project deleted successfully
 */
router.delete(
  "/:id",
  protect,
  authorizeRoles("Admin"),
  deleteProject
);

// ================= ADD MEMBER =================
router.put(
  "/:id/add-member",
  protect,
  authorizeRoles("Admin", "Manager"),
  addMember
);

module.exports = router;