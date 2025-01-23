

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
const userLogin=async(req, res)=>{
    const {email, password} = req.body;
    const empdata= await UserModel.find({email:email});
      if (empdata.length<1)
      {
        res.status(401).send("Invalid Email!")
      }
      else
      {
        if (empdata[0].password!=password)
        {
            res.status(401).send("Invalid Credentials!");
        }
        else
        {
            res.status(200).send(empdata);
        }
      }
}




module.exports={
    userRegistration,
    userLogin
    
    
}