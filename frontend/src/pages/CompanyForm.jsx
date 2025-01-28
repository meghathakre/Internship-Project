import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";
const CompanyForm=()=>{
const[input,setInput]=useState({});
const[myimage,setMyimage]=useState();

const handleInput=(e)=>{
   
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values,[name]:value}));
    console.log(input);
}
const handleImage=(e)=>{
    setMyimage(e.target.files[0]);
    console.log(myimage);
}
const handleSubmit=async(e)=>{
    e.preventDefault();

   const formData=new FormData() ;
   formData.append("file",myimage);
   formData.append('upload_preset','jobport');
   formData.append('cloud_name','dvnw285n8');
   const response=await axios.post('http://api.cloudinary.com/v1_1/dvnw285n8/image/upload',formData);
console.log('Image uploaded:',response.data);
console.log('Image uploaded:',response.data.url)
    
let api1="http://localhost:8000/company/companyform";
axios.post(api1,{...input,  logo:response.data.url}).then((res)=>{
    alert("Data Save");
})
}
return(
    <>
    <h1 className="newhead" >Insert company </h1>
    
    <Form className="form" style={{width:'300px'}}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter company tittle name</Form.Label>
        <Form.Control type="text" name="tittle" 
        value={input.tittle} onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter company name</Form.Label>
        <Form.Control type="text" name="name" 
        value={input.name} onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="description" 
         value={input.description} onChange={handleInput}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Location</Form.Label>
        <Form.Control type="text" name="location" value={input.location} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" name="file" onChange={handleImage}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>

    </>
)
}
export default CompanyForm;