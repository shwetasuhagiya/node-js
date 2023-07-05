const mongoose = require('mongoose');

const proModel = new mongoose.Schema({
    id: {type:Number},
    title: {type:String},
    description: {type:String},
    price: {type:Number},
    discountPercentage: {type:Number},
    rating: {type:Number},
    stock: {type:Number},
    brand: {type:String},
    category: {type:String},
    thumbnail:{type:String},
    images: [
       {type:String},
       {type:String},
       {type:String},
       {type:String},
       {type:String},
    ]
})
const productModel = mongoose.model('product',proModel);

module.exports = productModel;
