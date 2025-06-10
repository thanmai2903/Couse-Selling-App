const express = require("express");
const userRouter = express.Router();
const { userModel } = require("./db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("./config");
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
userRouter.post("/purchases", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});

module.exports = { userRouter: userRouter };
