const mongoose=require('mongoose');
const express=require('express');
const app=express();
const cors=require('cors');
const {User}=require('./models/UserCreate')
const bcrypt=require('bcrypt');

const {createUser}=require('./models/UserCreate')
const PORT=4000;

app.use(cors());

app.use(express.urlencoded({extended:true}));

app.get('/login/:username/:password', async (req,res)=>{
    const {username,password}=req.params;
    const login= await User.login(username,password);
    if(login){
        res.json({login})
        console.log(login)
    }
    else{ 
        res.sendStatus(401)
    }
}) 
 
app.get('/:username/:password',(req,res)=>{
    console.log(req.params);
    createUser(req.params)
    res.json('aaa')
})

mongoose.connect('mongodb://localhost/backend2')

 app.listen(PORT,()=>{
     console.log(`server körs på port ${PORT}`)
 })