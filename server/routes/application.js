const express = require("express");
const router = express.Router();
const { Applications } = require("../models");
const application = require("../controllers/application");

// Fetch all applications for a specific job
router.get("/:job_id/applications", application.getAllApplications);

// Submit an application for a specific job
router.post("/:job_id/applications", application.create);

module.exports = router;
