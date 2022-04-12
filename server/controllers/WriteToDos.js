const express=require('express');
const ToDoRoute=express.Router();
const {ToDoList}=require('../models/UserToDos')
const JWT=require('jsonwebtoken');

ToDoRoute.post('/TodoList/:token', async (req,res)=>{
    const params=req.params.token

    const RenderToken=JWT.verify(params,process.env.SECRET_KEY)
    console.log(RenderToken.Userid)


   // console.log(params)
    const {toDo}=req.body
    console.log({toDo})
    //const Todo= await ToDoList.create({text:toDo})
    //console.log(Todo)
   res.json('')
})


module.exports={ToDoRoute}







exports.ToDoRoute=ToDoRoute