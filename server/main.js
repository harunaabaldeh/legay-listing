const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

const db = require("./models");

// routes
const jobsRouter = require("./routes/jobs");
app.use("/jobs", jobsRouter);

const applicationsRouter = require("./routes/application");
app.use("/applications", applicationsRouter);

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
  });
});
