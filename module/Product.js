const mongoose = require("mongoose")
const Product_schema = new mongoose.Schema({
ProductID:{
    type : String,
    require : true,
    unique :true
},
ProductName:{
    type : String,
    require :true
},
ProductCat:{
    type : String,
    require :true
},
ProductPrice:{
    type : Number,
    require :true
},
ProductQuantity:{
    type: Number,
    require :true,
},

});
const Document = mongoose.model("Product" ,Product_schema);
module.exports = Document;