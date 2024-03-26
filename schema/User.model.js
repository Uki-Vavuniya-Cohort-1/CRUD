const Mongoose =require("mongoose");
const schema = new Mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  }, 
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true  
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    require: true
  }
});
const Model = Mongoose.model('User', schema);
module.exports = Model;

