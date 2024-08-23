const express = require("express");
const router = express.Router();
const application = require("../controllers/application");
const authenticate = require("../middlewares/authMiddleware");

// Fetch all applications for a specific job
router.get("/:jobId", application.getAllApplications);

// Submit an application for a specific job
router.post("/:jobId", authenticate, application.submitApplication);

module.exports = router;
