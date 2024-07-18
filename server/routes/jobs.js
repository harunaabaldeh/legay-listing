const express = require("express");
const router = express.Router();
const { Jobs } = require("../models");
const { validationToken } = require("../middlewares/auth_middleware");

//  Fetch all job listings.
router.get("/", async (req, res) => {
  const jobs = await Jobs.findAll();
  res.json(jobs);
});

// Create a new job listing.
router.post("/", async (req, res) => {
  const job = req.body;
  console.log(job);
  await Jobs.create(job);
  res.json(job);
});

//  Fetch a specific job listing by ID.
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const job = await Jobs.findByPk(id);
  if (!job) {
    return res.json({ message: "job does not exits" });
  }
  res.json(job);
});

// Update a job by ID
router.put("/:id", async (req, res) => {
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
});

// Delete a job by ID
router.delete("/:id", async (req, res) => {
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
});

module.exports = router;
