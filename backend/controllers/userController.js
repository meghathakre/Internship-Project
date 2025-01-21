
const UserModel= require("../models/userModel");

const userRegistration=async(req,res)=>{
    const {name, email, password,number} = req.body;
    const empdata=await UserModel.create({
        name:name,
        email:email,
        password:password,
        number:number
    })

    // console.log("succesfully registered!");
    res.send("succesfully registered!");
}

// ankita


module.exports={
    userRegistration
    
}