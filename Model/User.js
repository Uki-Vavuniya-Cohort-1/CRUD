const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  UserID: {
    type: String,
    require: true,
    unique: true,
  },
  Name: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
    unique: true,
  },
  Password: {
    type: String,
    require: true,
  },
  Role: {
    type: String,
    require: true,
  },
});
const Model = mongoose.model("User", schema);
module.exports = Model