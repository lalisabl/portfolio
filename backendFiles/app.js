const express = require("express");
const mongoose = require("mongoose");
const DB = process.env.DB_URL;
const cors = require("cors");
const userFeedbackRoute = require("./routers/userFeedbackRoute");
const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });
//   middlewares
app.use("/api/v1/feedback", userFeedbackRoute);
module.exports = app;
