const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    fullname:{type:String},
    profilepicture:{type:String,unique:true, required:true}

},{timestamps:{createdAt:'created_at',modifiedAt:'modified_at'}}
)
module.exports=mongoose.model('user',UserSchema);