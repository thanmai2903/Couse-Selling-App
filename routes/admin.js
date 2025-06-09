const { Router } = require("express");
const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
  res.json({
    message: "signup admin",
  });
});
adminRouter.post("/signin", (req, res) => {
  res.json({
    message: "signup admin",
  });
});
adminRouter.post("/course", (req, res) => {
  res.json({
    message: "signup admin",
  });
});
adminRouter.put("/course", (req, res) => {
  res.json({
    message: "signup admin",
  });
});
adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: "signup admin",
  });
});
module.exports = {
  adminRouter: adminRouter,
};
