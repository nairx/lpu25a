import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcrypt";
const app = express();
mongoose.connect("mongodb://localhost:27017/lpu").then(() => {
  app.listen(8080, () => {
    console.log("Server started");
  });
});

//models > userModel
const userSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String },
  },
  { timestamps: true }
);
const userModel = mongoose.model("User", userSchema);

app.use(express.json());
app.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedpwd = await bcrypt.hash(password, 10);
    const user = {
      name,
      email,
      password: hashedpwd,
      role,
    };
    const result = await userModel.create(user);
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const result = await userModel.find();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
});
