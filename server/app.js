const mongoose=require('mongoose');
const express=require('express');
const app=express();

const {createUser}=require('./models/UserCreate')
const PORT=4000;


app.use(express.urlencoded({extended:true}));



mongoose.connect('mongodb://localhost/backend2')


app.get('/:username/:password',(req,res)=>{

    console.log(req.params);
    createUser(req.params)
    res.json('aaa')
})


 app.listen(PORT,()=>{
     console.log(`server körs på port ${PORT}`)
 })