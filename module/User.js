const mongoose = require("mongoose")
const schema = new mongoose.Schema({
UserId:{
    type : String,
    require : true,
    unique :true
},
Name:{
    type : String,
    require :true
},
Age:{
    type : Number,
    require :true
},
Course:{
    type : String,
    require :true
},
Email:{
    type: String,
    require :true,
    unique :true
},
District:{
    type:String,
    require:true,
}

});
const Document = mongoose.model("user" ,schema);
module.exports = Document;