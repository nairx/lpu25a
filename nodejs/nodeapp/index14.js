import mongoose from "mongoose";
import express from "express";
const app = express();

mongoose.connect("mongodb://localhost:27017/lpu").then(() => {
  app.listen(8080, () => {
    console.log("Server started");
  });
});

//models > userModel
const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
});
const userModel = mongoose.model("User", userSchema);

app.get("/users", (req, res) => {
  res.json({});
});
