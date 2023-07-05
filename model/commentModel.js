const mongoose = require('mongoose');

const commentModel = new mongoose.Schema({
    id:{type:Number},
    body:{type:String},
    postId:{type:String},
    user:{
        id:{type:Number},
        username:{type:String}
    }
})

const commentsModel = mongoose.model('comment',commentModel);

module.exports = commentsModel;
