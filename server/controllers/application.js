const { Applications } = require("../models");

exports.getAllApplications = async (req, res) => {
  try {
    const jobId = req.params.job_id;
    const applications = await Applications.findAll({
      where: { jobId },
    });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};

exports.create = async (req, res) => {
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
};
