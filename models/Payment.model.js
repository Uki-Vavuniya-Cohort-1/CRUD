const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    paymentID: {
        type: String,
        required: true,
        unique:true,
    },
    paymentMethod: {
        type: String,
        required: true
    },
    fee: {
        type: Number,
        required: true
    }
});

const Payment = mongoose.model("Payment", PaymentSchema);

module.exports = Payment;
