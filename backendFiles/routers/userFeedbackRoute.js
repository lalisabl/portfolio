const express = require("express");
const router = express.Router();
const userFeedbackController = require("../controllers/userFeedbackController");
router.post("/", userFeedbackController.addNewFeedback);
module.exports = router;
