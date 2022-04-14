const express=require('express');
const ToDoRoute=express.Router();
const {ToDoList}=require('../models/UserToDos')
const JWT=require('jsonwebtoken');

ToDoRoute.post('/TodoList/:token', async (req,res)=>{
    const params=req.params.token

    const RenderToken=JWT.verify(params,process.env.SECRET_KEY)
    const check=RenderToken.Userid
    const {toDo}=req.body
    const Todo= await ToDoList.create({text:toDo,user:check})
    res.json('done') 
})
  
ToDoRoute.get('/SeeUserTodos/:token',async(req,res)=>{
    const token=req.params.token;
    const decryptToken=JWT.verify(token,process.env.SECRET_KEY)
    const tokenToString=decryptToken.Userid;
   
    const seeAllUserTodo=await ToDoList.find({user:tokenToString}).sort({createdAt:-1}) ;
    res.send(seeAllUserTodo) 
})  

ToDoRoute.get('/deleteTodo/:ToDoId',async(req,res)=>{
const ToDoId=req.params.ToDoId
const deleteTodo= await ToDoList.deleteOne({_id:ToDoId})
res.json('')
}) 


 





exports.ToDoRoute=ToDoRoute