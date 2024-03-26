//Import
const mongoose = require("mongoose");
const User = require("./Models/User");
const URI =
  "mongodb+srv://joy_james:j2002o3y12jr@cluster0.ydyhuwj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//Connect MongoDB
const connectMongoDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Successfully connected.");
  } catch (err) {
    console.log("Error in connecting MongoDB.", err);
  }
};
connectMongoDB();

//Using Express
const express = require("express");
const app = express();
const port = 3000;

//Middleware
app.use(express.json());

//Port Listening
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

//App Request
app.get("/", (req, res) => {
  res.send("Postman is working fine.");
});
app.get("/home", (req, res) => {
  res.send("Welcome to Home Page");
});

//Post Users
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

//Get Users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

//Update User
app.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  res.send(user);
});

//Delete User
app.delete("/users/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.send(user);
});