const { body } = require("express-validator");

const projectValidation = [
  body("title")
    .notEmpty()
    .withMessage("Project title is required"),

  body("description")
    .notEmpty()
    .withMessage("Project description is required"),

  body("status")
    .optional()
    .isIn(["Pending", "In Progress", "Completed"])
    .withMessage("Invalid status"),

  body("priority")
    .optional()
    .isIn(["Low", "Medium", "High"])
    .withMessage("Invalid priority"),
];

module.exports = projectValidation;