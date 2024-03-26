const Mongoose = require("mongoose");
const schema = new Mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    }
});
const Model = Mongoose.model('Product', schema);
module.exports = Model;
