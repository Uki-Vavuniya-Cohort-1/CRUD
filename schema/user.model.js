const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userID: {
        type:String,
        required:true},
    name: {
        type: String, 
        required: true },
    email: {
        type: String,
        required: true },
    password: { 
        type: String,
        required: true },
    role : {
        type:String},

})
const user = mongoose.model('User', userSchema);

module.exports = user;