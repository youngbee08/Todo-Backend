const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    todoId:{
        type:Number,
        unique:[true, "Todo ID can't be the same"]
    },
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