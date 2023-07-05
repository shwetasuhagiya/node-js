const mongoose = require('mongoose');

const todoModel = new mongoose.Schema({
    id:{type:Number},
    todo:{type:String},
    completed:{type:Boolean},
    userId:{type:Number},
})

const todosModel = mongoose.model('todos',todoModel);

module.exports = todosModel;