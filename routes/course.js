const express = require("express");
const courseRouter = express.Router();
courseRouter.post("/purchase", function (req, res) {
  res.json({
    message: "purchase endpoint",
  });
});
courseRouter.get("/preview", function (req, res) {
  res.json({
    message: "preview endpoint",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
