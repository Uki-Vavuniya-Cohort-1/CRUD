const mongoose=require("mongoose")
const payment_schema=new mongoose.Schema({
    PaymentID:{
        type:String,
        required:true,
        unique:true,

    },
    PaymentMethod:{
        type:String,
        required:true,
    },
    Fee:{
        type:Number,
        required:true,
    },

});
const Document = mongoose.model("payment" ,payment_schema);
module.exports = Document;