const mongoose = require("mongoose");

const Review = new mongoose.Schema({
    reviewID:{
        type:String,
        unique:true,
        required: true,
    },
    description:{
        type:String,
        required:true,
    },
    userID:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model("Review",Review);