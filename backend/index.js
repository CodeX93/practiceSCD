const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const userRouter = require("./Routes/userRoutes");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 3001;

const uri =
  "mongodb+srv://aghashahhyder:1234@cluster0.mn2eumh.mongodb.net/test";
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to db");
});

app.use(cors());
app.use(express.json());
app.use("/saveUser", userRouter);
app.use("/getUsers", userRouter);
app.use("/loginUser", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
