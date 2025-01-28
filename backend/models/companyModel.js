const mongoose =require("mongoose");
const companySchema=new mongoose.Schema({
   tittle:{
    type:String
   },
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String, 
    },
   
    location:{
        type:String 
    },
    logo:{
        type:String 
    }
    // userId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'User',
    //     required:true
    // }

})
module.exports=mongoose.model("company", companySchema)