
const userModel = require("../models/userModel");
const UserModel= require("../models/userModel");

const userRegistration=async(req,res)=>{
    const {name, email, password} = req.body;
    const empdata=await UserModel.create({
        name:name,
        email:email,
        password:password
    })

    // console.log("succesfully registered!");
    res.send("succesfully registered!");
}


const userLogin=async(req, res)=>{
    const {email, password} = req.body;
    const userdata= await userModel.find({email:email});
      if (userdata.length<1)
      {
        res.status(401).send("Invalid Email!")
      }
      else
      {
        if (userdata[0].password!=password)
        {
            res.status(401).send("Invalid Credentials!");
        }
        else
        {
            res.status(200).send(userdata);
        }
      }
}


module.exports={
    userRegistration,
    userLogin
    
}