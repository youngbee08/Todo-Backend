const express = require('express');
const connectToDb = require('./config/connectToDb');
const todoRoute = require('./routes/Todo');
const cors = require("cors");
const app = express();
app.use(express.json())
app.use(cors())
connectToDb()
app.listen(5000, ()=>{
    console.log('listening to port 5000')
})
app.use("/api/todos", todoRoute)