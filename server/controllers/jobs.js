const { Jobs } = require("../models/job");
exports.getAllJobs = async (req, res) => {
  const id = req.params.id;
  const job = await Jobs.findByPk(id);
  if (!job) {
    return res.json({ message: "job does not exits" });
  }
  res.json(job);
};

exports.create = async (req, res) => {
  const job = req.body;
  await Jobs.create(job);
  res.json(job);
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
    if (!job) {
      return res.status(404).json({ message: "Job does not exist" });
    }
    await job.destroy();
    res.json({ message: "Job deleted" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};
