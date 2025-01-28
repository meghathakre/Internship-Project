const express= require("express");
const route=express.Router();
const companyController =require("../controllers/companyController")


route.post("/companyform",companyController.companyForm);

module.exports=route;
