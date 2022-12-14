const mongoose=require("mongoose")
const {Schema}=mongoose;

const FetSchema=new Schema({
   firstName:
   {
       type:String,
       required:true
   },
   lastName:
   {
       type:String,
       required:true
   },
   email: 
   {
       type:String,
       required:true
   },
   phone:
   {
       type:String,
       required:true
   },
   address:
   {
       type:String,
       required:true
   },
   nextOfKinFirstName:
   {
    type:String,
    required:true
} ,
   nextOfKinLastName:
   {
    type:String,
    required:true
},
   nextOfKinEmail:
   {
    type:String,
    required:true
},
   nextOfKinPhone:
   {
    type:String,
    required:true
},
selector1:
{
 type:String,
 required:true
},
}
,
{
    timestamps: true 
  }
)
module.exports=mongoose.model("fet",FetSchema)