const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userID: {
        type:String,
        required:true},
    paymenttype:{
        type:String,
        required:true},
    fee:{
        type:Number,
        required:true},
  
})

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;