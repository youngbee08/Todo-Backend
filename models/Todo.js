const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    todoName:{
        type:String,
        required:[true, "Todo Name Is Required"]
    },
    todoDate:{
        type:Date,
        default:Date.now(),
        // required:[true, "Todo Date Is Required"]
    },
    todoStatus:{
        type:String,
        default:'Incompleted'
    },
});

const todoModel = mongoose.model("Todos", todoSchema);
module.exports = todoModel