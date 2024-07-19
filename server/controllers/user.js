const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const db = require("../models");
const Users = db.Users;

exports.register = async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("SUCCESS");
  });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });
  if (!user) {
    res.json({ error: "User does not exist" });
  } else {
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({ error: "Wrong username or password" });
      }

      const accessToken = sign(
        { username: user.username, id: user.id },
        "super_secret_token"
      );

      res.json(accessToken);
    });
  }
};
