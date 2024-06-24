const mongoose=require('mongoose');
const {Schema}= mongoose;

const userSchema=new Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    }
})

module.exports= mongoose.models.User || mongoose.model("User",userSchema)