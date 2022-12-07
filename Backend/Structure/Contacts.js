 const mongoose=require("mongoose")
 const {Schema}=mongoose;

 const ContactSchema=new Schema({
    email:
    {
        type:String,
        required:true
    },
    name:
    {
        type:String,
        required:true
    },
    subject: 
    {
        type:String,
        required:true
    },
    description:
    {
        type:String,
        required:true
    },

 })
 module.exports=mongoose.model("contactUs",ContactSchema)