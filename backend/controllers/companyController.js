
const companyModel= require("../models/companyModel");
const companyForm=async(req,res)=>{
    const {tittle, name, description,location,logo} = req.body;
    const data=await companyModel.create({
        tittle:tittle,
        name:name,
        description:description,
        location:location,
        logo:logo
        
    })

    res.send("succesfully submited!");
}
module.exports={
    companyForm
}