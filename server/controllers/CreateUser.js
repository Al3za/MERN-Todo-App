const express=require('express')
const routers=express.Router()
const {User,createUser}=require('../models/UserCreate');
const JWT=require('jsonwebtoken');
  
routers.post('/login', async (req,res)=>{
    const {username,password}=req.body;
    const login= await User.login(username,password);
    if(login){
        const Userid=login._id.toString();
        const token=JWT.sign(
            {Userid,user:login.username},
            process.env.SECRET_KEY,
            {expiresIn:"24 h", subject:Userid},
        )
        return token,        
        res.json({token}) 
    }
    else{ 
        res.json('wrong login, try again')
    }
}) 

routers.post('/createUser',async(req,res)=>{
    const {username,password}=req.body;
    //console.log(username,password)
    try{
    const create= await createUser({username,password})
    res.json('done')
    } catch(err){
        res.json('try again with a new password or username')
    }       
})

module.exports={routers}
  