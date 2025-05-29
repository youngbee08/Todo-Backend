const todoModel = require('../models/Todo');
const getTodos = async (req,res)=>{
    try {
        const todos = await todoModel.find();
        if (!todos) {
            return res.status(404).json({
                status:'Error',
                message:'Unable to find todos'
            })
        }
        res.status(200).json({
            status:'Success',
            message:'This are all todos',
            todos
        })
    } catch (error) {
        console.log(error)
    }
}
const addTodo = async (req,res) =>{
    try {
        const todo = await todoModel.create(req.body);
        if (!todo) {
            return res.status(400).json({
                status:"error",
                message:"Unable To Add Todo"
            })
        }
        res.status(201).json({
            status:"success",
            message:"Todo Created Successfully",
            todo
        })
    } catch (error) {
        console.log(error)
    }
}
const completeTodo = async (req,res)=>{
    const {id} = req.params;
    try {
        const todo = await todoModel.findOne({todoId:id});
        if (!todo) {
            return res.status(404).json({
                status:"error",
                message:"Unable to find todo"
            })
        }
        await todoModel.findOneAndUpdate({todoId:id},{todoStatus:"Completed"})
        res.status(200).json({
            status:"success",
            message:"Todo Updated Successfully"
        })
    } catch (error) {
        console.log(error)
    }
}
const deleteTodo = async (req,res)=>{
    const {id} = req.params;
    try {
        const todo = await todoModel.findOne({todoId:id});
        if (!todo) {
            return res.status(404).json({
                status:"error",
                message:"Unable to find todo"
            })
        }
        await todoModel.findOneAndDelete({todoId:id})
        res.status(200).json({
            status:"success",
            message:"Todo Deleted Successfully"
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {addTodo,getTodos,completeTodo,deleteTodo}