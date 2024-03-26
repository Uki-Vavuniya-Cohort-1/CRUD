const mongoose = require("mongoose");

const User = new mongoose.Schema({
    userID:{
        type:String,
        unique:true,
        required: true,
    },
    name:{
        type:String,
        required: true,
    },
    role:{
        type:String,
        required:true,
        enum: ["Admin", "Buyer","Seller"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("User",User);