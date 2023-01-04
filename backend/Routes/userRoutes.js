const express = require("express");
const User = require("../Models/user_model");
const userRouter = express.Router();

userRouter.post("/signup", (req, res) => {
  console.log("Routes Post Method");
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Email = req.body.Email;
  const Password = req.body.Password;

  const newUser = new User({
    FirstName,
    LastName,
    Email,
    Password,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

userRouter.get("/getUsersData", (req, res) => {
  User.find()
    .then((us) => {
      res.json(us);
    })
    .catch((err) => {
      res.json("Error has occured while fetching UsersData");
    });
});

userRouter.post("/login", async (req, res) => {
  const Email = req.body.Email;
  const Password = req.body.Password;

  const email = await User.find({ Email: Email });
  const password = await User.find({ Password: Password });

  if (email && password) {
    res.send("OK");
  } else {
    res.send("ERROR");
  }
});

module.exports = userRouter;
