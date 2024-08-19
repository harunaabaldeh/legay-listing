const express = require("express");
const router = express.Router();
const auth = require("../controllers/user");

router.post("/register", auth.register);

router.post("/login", auth.login);

router.get("/profile/:userId", auth.profile);

module.exports = router;
