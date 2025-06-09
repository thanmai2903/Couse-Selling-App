const { courseRouter, Router } = require("express");
const courseRouter = Router();
app.post("/course/purchase", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});
app.post("/course/preview", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
