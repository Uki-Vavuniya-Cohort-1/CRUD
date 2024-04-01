const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    ID:{
        type:String,
        required: true },
    Reviewdescription:{
        type:String,
        required: true },
    userID:{
        type:String,
        required:true},
})


const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;