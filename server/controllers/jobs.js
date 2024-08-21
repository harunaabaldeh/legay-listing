const db = require("../models");
const Jobs = db.Jobs;

exports.getAllJobs = async (req, res) => {
  const jobs = await Jobs.findAll();
  if (!jobs) {
    return res.json({ message: "job does not exits" });
  }
  res.json(jobs);
};

exports.create = async (req, res) => {
  const createJobRequest = req.body;
  const userId = req.user.id;

  await Jobs.create({
    ...createJobRequest,
    userId,
  });
  res.json(createJobRequest);
};

exports.getJobById = async (req, res) => {
  const id = req.params.id;
  const job = await Jobs.findByPk(id);
  if (!job) {
    return res.json({ message: "job does not exits" });
  }
  res.json(job);
};

exports.updateJob = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const job = await Jobs.findByPk(id);
    if (!job) {
      return res.status(404).json({ message: "Job does not exist" });
    }
    await job.update(updatedData);
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const id = req.params.id;
    const job = await Jobs.findByPk(id);
    const requestUserId = req.user.id;

    if (job.userId !== requestUserId) {
      return res.json({
        message: "You cannot delete jobs created by others",
      });
    }

    if (!job) {
      return res.status(404).json({ message: "Job does not exist" });
    }
    await job.destroy();
    res.json({ message: "Job deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "There was a problem while deleting the job", error });
  }
};
