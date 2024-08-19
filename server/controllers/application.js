const db = require("../models");
const Applications = db.Applications;

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

exports.submitApplication = async (req, res) => {
  try {
    const jobId = req.params.job_id;
    const applicationData = req.body;
    const userId = req.user.id;

    const newApplication = await Applications.create({
      ...applicationData,
      jobId,
      userId,
    });
    res.status(201).json(newApplication);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};
