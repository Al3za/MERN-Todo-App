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

userSchema.statics.login=async function (username,password){
const user= await this.findOne({username})
if(user && (await bcrypt.compare(password,user.password))) {
    return user
}else {
  return  null 
}
}

const User=mongoose.model('user',userSchema)

const createUser= async(item)=>{
return await User.create(item)
}

// const validation=async({item})=>{
// const zes= item.username
// return zes
// }


module.exports={createUser,User}