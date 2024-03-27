const mongoose = require("mongoose");
const User = require("./Model/User");
const URL ="mongodb+srv://luxmikaran75:luxmi1234@cluster0.thzy8ck.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectMongoDB = async () => {
  try {
    await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true,});
    console.log("MongoDB Successfully connected.");
  } catch (err) {
    console.log("Error", err);
  }
};
connectMongoDB();

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Postman is working fine.");
});
app.get("/home", (req, res) => {
  res.send("Welcome to Home Page");
});

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  res.send(user);
});

app.delete("/users/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.send(user);
});