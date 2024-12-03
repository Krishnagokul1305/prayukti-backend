const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const errorHandler = require("./Error/errorHandler");
const AppError = require("./Error/AppError");

app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use("/api/v1/Events", (req, res, next) => {
  res.status(200).json({
    message: "listening to the Events route",
  });
});

app.use("*", (req, res, next) => {
  next(new AppError("route doesn't exist ", 404));
});

app.use(errorHandler);

module.exports = app;
