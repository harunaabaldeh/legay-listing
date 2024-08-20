const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const db = require("../models");
const Users = db.Users;
const Applications = db.Applications;
const Jobs = db.Jobs;

exports.register = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Users.create({ username, password: hashedPassword });
    res
      .status(201)
      .json({ message: "User registered successfully", userId: user.id });
  } catch (error) {
    res.json({ message: "Error registering user" });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required!" });
  }

  try {
    const user = await Users.findOne({ where: { username } });
    if (!user) {
      res.json({ error: "User does not exist" });
    }

    const isPasswordvalid = await bcrypt.compare(password, user.password);
    if (!isPasswordvalid) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    const accessToken = sign(
      { id: user.id, username: user.username },
      "super_secret_token",
      { expiresIn: "1h" }
    );

    res.json({ accessToken: accessToken });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

exports.profile = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await Users.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const applications = await Applications.findAll({
      where: {
        userId: userId,
      },
    });

    const userJobs = await Jobs.findAll({
      where: {
        userId: userId,
      },
    });

    return res.json({
      userData: {
        applications: applications,
        jobs: userJobs,
      },
    });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
