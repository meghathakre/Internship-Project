const express = require("express");
const app=express();
var bodyParser = require('body-parser')
const mongoose = require("mongoose");
const cors = require('cors');
const userRoute=require("./routes/userRoutes");

const comRoute=require("./routes/companyRoute")
require("dotenv").config();

mongoose.connect(process.env.DBCONECTION).then(()=>{
    console.log("DB succesfullly Connected")
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.use("/users", userRoute); 
app.use("/company",comRoute);

 const port=process.env.PORT || 3000


app.listen(port,()=>{
    console.log(`server run on port ${port}`);
})