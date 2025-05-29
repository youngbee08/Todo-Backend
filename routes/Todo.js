const express = require("express");
const { addTodo, getTodos, completeTodo, deleteTodo } = require("../controllers/Todo");
const todoRoute = express.Router();
todoRoute.get("/", getTodos)
todoRoute.post("/add", addTodo)
todoRoute.patch("/:id", completeTodo)
todoRoute.delete("/remove/:id", deleteTodo)
module.exports = todoRoute