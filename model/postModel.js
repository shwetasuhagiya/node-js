const mongoose = require('mongoose');

const postModel = new mongoose.Schema({

    id:{type:Number},
    title:{type:String},
    body:{type:String},
    userId:{type:String},
    tags:[
        {type:String},
        {type:String},
        {type:String}
    ],
    reactions:{type:String}

})

const postsModel = mongoose.model('post',postModel);

module.exports = postsModel;
