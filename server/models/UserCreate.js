const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const userSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

userSchema.pre(
    'save',
    async function(next){
        this.password=await bcrypt.hash(this.password,10)
        next()
    }
)

const createUser=async(item)=>{
  const newUser=new User(item)
   return await newUser.save()
}


const User=mongoose.model('user',userSchema)

module.exports={createUser}