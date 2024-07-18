const express = require("express");
const router = express.Router();
const { Applications } = require("../models");

// Fetch all applications for a specific job
router.get("/:job_id/applications", async (req, res) => {
  try {
    const jobId = req.params.job_id;
    const applications = await Applications.findAll({
      where: { jobId },
    });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
});

// Submit an application for a specific job
router.post("/:job_id/applications", async (req, res) => {
  try {
    const jobId = req.params.job_id;
    const applicationData = req.body;
    const newApplication = await Applications.create({
      ...applicationData,
      jobId,
    });
    res.status(201).json(newApplication);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
});

module.exports = router;
