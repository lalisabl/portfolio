const Feedback = require("../model/userFeedbackModel");
exports.addNewFeedback = async (req, res) => {
  try {
    const newFeedback = await Feedback.create(req.body);
    res.status(201).json({
      status: "success",
      data: newFeedback,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Internal server error!",
    });
  }
};
