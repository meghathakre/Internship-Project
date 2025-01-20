const express= require("express");
const route=express.Router();
const userController =require("../controllers/userController")

 route.post("/userregistration",userController.userRegistration)

module.exports=route;