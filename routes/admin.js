const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("./db");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("./config.js");
const { adminMiddleware } = require("../middleware/admin");
//bcrypt for only signin and signup
//to validate zod used and json web token to create jwt
adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body; // adding zod validation
  //hash password so plaintext password is not storted in db

  await adminModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
  res.json({
    message: "signup admin succeed",
  });
});
adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  //ideally password should be hashed,and hence u cant compare user provided password and database password
  const admin = await adminModel.findOne({
    email: email,
    password: password,
  });
  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_PASSWORD
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
adminRouter.post("/course", adminMiddleware, async (req, res) => {
  const adminId = req.userId;
  const { title, description, imageUrl, price } = req.body;
  await courseModel.create({
    title: title,
    description: description,
    imageUrl: imageUrl,
    price: price,
    adminId: creatorId,
  });
  res.json({
    message: "course created",
    courseId: course._id,
  });
});
adminRouter.put("/course", (req, res) => {
  res.json({
    message: "signup admin",
  });
});
adminRouter.get("/bulk", (req, res) => {
  res.json({
    message: "signup admin",
  });
});
module.exports = {
  adminRouter: adminRouter,
};
