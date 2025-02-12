const UserModel= require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userValidation=async(req, res)=>{
  const token = req.header("x-auth-token");

  if (!token) return res.json(false);
  const verified = jwt.verify(token, "ankita123");
  if (!verified) return res.json(false);
   return res.json(true);

}


const userRegistration=async(req,res)=>{
    const {name, email, password,number} = req.body;
    const salt =await bcrypt.genSalt(10);
    const hashedPassword =await bcrypt.hash(password, salt);

    const userdata=await UserModel.create({
        name:name,
        email:email,
        password:hashedPassword,
        number:number
    })

    res.send("succesfully registered!");
}



const userLogin=async(req, res)=>{
    const {email, password} = req.body;
    const userdata= await UserModel.findOne({email:email});
      if (!userdata)
      {
        res.status(404).json({
            message: "Email not found",
            status: "404 Not Found",
          });
          return;
      }

      const validPassword = await bcrypt.compare(
        password,
        userdata.password
      );
      if (!validPassword) {
        res.status(400).json({
          message: "Invalid password",
          status: "400 Bad Request",
        });
        return;
      }
      const token = jwt.sign({ id: userdata._id, name:userdata.name, email:userdata.email }, "ankita123");
      res.json({ token, user: { id: userdata._id, username: userdata.name } });
     
}


module.exports={
    userRegistration,
    userLogin,
    userValidation
    
    
}