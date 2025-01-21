
const userModel = require("../models/userModel");
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

<<<<<<< HEAD
// ankita
=======

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
>>>>>>> 423660e2759b1326908be27938c81b8532b89fc0


module.exports={
    userRegistration,
    userLogin
    
}