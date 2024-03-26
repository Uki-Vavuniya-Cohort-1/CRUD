const Mongoose = require("mongoose");
const schema = new Mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    paymentType: {
        type: String,
        require: true
    },
    fee: {
        type: String,
        require: true
    },
});
const Model = Mongoose.model('Payment', schema);
module.exports = Model;
