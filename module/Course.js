const mongoose = require("mongoose")
const course_schema = new mongoose.Schema({
CourseId:{
    type : String,
    require : true,
    unique :true
},
CourseName:{
    type : String,
    require :true
},

CourseFee:{
    type : Number,
    require :true
},
CourseDuration:{
    type:String,
    require:true,
}

});
const Document = mongoose.model("course" ,course_schema);
module.exports = Document;