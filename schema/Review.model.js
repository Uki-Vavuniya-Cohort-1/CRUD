const Mongoose = require("mongoose");
const User = require("./User.model.js");
const schema = new Mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    revewDiscription: {
        type: String,
        require: true
    },
    UserID: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User",
        // unique: true
    }
});
const Model = Mongoose.model('Review', schema);
module.exports = Model;
