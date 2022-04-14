const mongoose=require('mongoose');
const express=require('express');
const app=express();
const cors=require('cors');
const {routers}=require('./controllers/CreateUser')
const {ToDoRoute}=require('./controllers/ToDos')
const dotenv=require('dotenv')
const PORT=4000;
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use('/',routers)
app.use('/ToDo', ToDoRoute ) 
  
dotenv.config();
  
mongoose.connect('mongodb://localhost/backend2')
 
 app.listen(PORT,()=>{
     console.log(`server körs på port ${PORT}`)
 })