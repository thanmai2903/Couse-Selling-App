const { userRouter, Router } = require("express");

const userRouter = Router();
app.post("/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});
app.post("/signin", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});
app.post("/purchases", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

module.exports = { userRouter: userRouter };
