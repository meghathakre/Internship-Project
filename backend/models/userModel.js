const mongoose = require("mongoose");
const userSchema=new mongoose.Schema({
name:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true
},
password:{
    type:String,
    require:true
},
number:{
    type:Number,
    require:true
} ,
role:{
    type:String,
    enum:['student','recruiter'],
    required:true
},
profile:{
    bio:{type:String},
    skills:[{type:String}],
    resume:{type:String}, 
    resumeOriginalName:{type:String},
    company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'}, 
    profilePhoto:{
        type:String,
        default:""
    }
},


},{timestamps:true})
module.exports = mongoose.model("user",userSchema);