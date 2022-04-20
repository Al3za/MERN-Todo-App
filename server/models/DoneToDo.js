const mongoose=require('mongoose');

const doneToDoSchema=new mongoose.Schema({
    text:{type:String,required:true},
    user:[{type:mongoose.Types.ObjectId,ref:'user'}]
},{timestamps:true});

const DoneToDo=mongoose.model('DoneToDo',doneToDoSchema);

module.exports={DoneToDo};

