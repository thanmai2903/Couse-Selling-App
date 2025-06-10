const express = require("express");
const userRouter = express.Router();
const { userModel } = require("./db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("./config");
const { userMiddleware } = require("../middleware/user");
userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body; // adding zod validation
  //hash password so plaintext password is not storted in db

  await userModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
  res.json({
    message: "signup endpoint",
  });
});
userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  //ideally password should be hashed,and hence u cant compare user provided password and database password
  const user = await userModel.findOne({
    email: email,
    password: password,
  });
  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_PASSWORD
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});
userRouter.post("/purchases", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const purchases = await purchaseModel.find({
    userId,
  });
  res.json({
    purchases,
  });
});

module.exports = { userRouter: userRouter };
