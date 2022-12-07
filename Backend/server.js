const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const Globalink=require("./Navigate/routing")

app.use(cors());
app.use(express.json());
 mongoose.connect("mongodb+srv://LeratoDB:LeratoAbdul@cluster0.3pqwdtt.mongodb.net/SaveAlotDB",
 () => console.log("Database connected"));


app.use("/app",Globalink)
app.listen(1500,()=>console.log("server is running" ))