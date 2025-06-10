const express = require("express");
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, courseModel } = require("./db");
const courseRouter = express.Router();
courseRouter.post("/purchase", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const courseId = req.body.courseId;
  await purchaseModel.create({
    userId,
    courseId,
  });
  res.json({
    message: "you have bought course successfully",
  });
});
courseRouter.get("/preview", async (req, res) => {
  const courses = await courseModel.find({});
  res.json({
    courses,
  });
});

module.exports = {
  courseRouter: courseRouter,
};
