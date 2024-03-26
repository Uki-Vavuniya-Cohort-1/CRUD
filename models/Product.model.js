const mongoose = require("mongoose");

const Product= new mongoose.Schema({
    productID:{
        type:String,
        unique:true,
        required: true,
    },
    name:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Boolean,
        required:true,
    }
})

module.exports = mongoose.model("Product",Product);