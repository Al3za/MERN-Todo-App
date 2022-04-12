const mongoose=require('mongoose');

const toDoSchema=new mongoose.Schema({
    text:{type:String,required:true},
    user:[{type:mongoose.Types.ObjectId, ref:"user" }]
},{timestamps:true} )

const ToDoList=mongoose.model('ToDoList',toDoSchema)

module.exports={ToDoList}