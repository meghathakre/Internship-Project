const express= require("express");
const route=express.Router();
const userController =require("../controllers/userController")

 route.post("/userregistration",userController.userRegistration)
 route.post("/userlogin", userController.userLogin);
 route.post("/checkuservalidation", userController.userValidation);
 
 
module.exports=route;