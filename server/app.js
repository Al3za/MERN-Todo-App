const mongoose=require('mongoose');
const express=require('express');
const app=express();
const {createUser}=require('./models/UserCreate')
const PORT=4000;

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('test.ejs')
}) 

mongoose.connect('mongodb://localhost/backend2')

app.post('/test', async (req,res)=>{
    const {username,password}=req.body;
    createUser(req.body)
   res.send('hej')
})
 
 app.listen(PORT,()=>{
     console.log(`server körs på port ${PORT}`)
 })