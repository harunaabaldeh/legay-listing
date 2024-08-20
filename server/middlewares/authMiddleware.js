const jwt = require("jsonwebtoken");
require("dotenv").config();
const db = require("../models");
const Users = db.Users;

const authenticate = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Please authenticate! JTW is missing" });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, "super_secret_token");
    const user = await Users.findByPk(decoded.id);

    if (!user) {
      return res.json({
        message: "Please authenticate! Could not find user",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "An error occurred during authentication" });
  }
};

module.exports = authenticate;
