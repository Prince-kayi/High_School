const mongoose=require("mongoose")
const {Schema}= mongoose;

const RegisterSchema= new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    retypeEmail:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    retypePassword:{
        type:String,
        required:true
    },
    Mnumber:{
        type:String,
        required:true
    },
},
{
    timestamps: true 
  }
)
module.exports=mongoose.model("register",RegisterSchema)