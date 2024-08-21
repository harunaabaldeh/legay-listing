const express = require("express");
const router = express.Router();
const authentication = require("../middlewares/authMiddleware");
const job = require("../controllers/jobs");

//  Fetch all job listings.
router.get("/", job.getAllJobs);

// Create a new job listing.
router.post("/", authentication, job.create);

// apply for a job with authentication
// router.post("/", validationToken, job.create);

//  Fetch a specific job listing by ID.
router.get("/:id", job.getJobById);

// Update a job by ID
router.put("/:id", job.updateJob);

// Delete a job by ID
router.delete("/:id", authentication, job.deleteJob);

module.exports = router;
