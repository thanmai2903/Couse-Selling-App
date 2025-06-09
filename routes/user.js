const express = require("express");
const userRouter = express.Router();

userRouter.post("/signup", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});
userRouter.post("/signin", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});
userRouter.post("/purchases", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});

module.exports = { userRouter: userRouter };
