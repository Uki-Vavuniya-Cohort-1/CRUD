const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productID: {
         type: String,
         required: true },
    productName: { 
        type: String, 
        required: true },
    productPrice: {
         type: Number, 
         required: true },
    productcategary: {
         type: String,
         required: true },
})

const product = mongoose.model('prodect', prodectSchema);

module.exports = product;