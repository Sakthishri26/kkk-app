const express= require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.get("/",(req,res)=>{
    res.json({message:"Hello from Node.js Backend"});
});
app.listen(3000,()=>{
    console.log("server runing on port 3000")
});
