import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { message } from "antd";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../css/Signup.css'; 
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [input, setInput] =useState({});
  const [uploadImage, setUploadImage]=useState("");
  const navigate = useNavigate();

  const handleInput=(e)=>{
     let name=e.target.name;
     let value=e.target.value;
     setInput(values=>({...values, [name]:value}));
  }

  const handleImage=(e)=>{
    console.log(e.target.files[0]);
    setUploadImage(e.target.files[0])
}



  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData= new FormData();
    formData.append("file", uploadImage);
    formData.append("upload_preset", "JobPortal");
    formData.append('cloud_name', 'dtpy8tedd');

    const response = await axios.post('https://api.cloudinary.com/v1_1/dtpy8tedd/image/upload', formData); 
    console.log(response.data.url);

    let api="http://localhost:8000/users/userregistration";
    const resp1= await axios.post(api, {profilePhoto:response.data.url, ...input});

    alert("data succesfully inserted!!");
       navigate(`/login`)
  }
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Sign Up</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control  type="text" placeholder="Enter name" name="name" value={input.name} 
              onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter Email</Form.Label>
            <Form.Control type="email"  placeholder="Enter email" name="email" value={input.email} 
              onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" name="password" 
              value={input.password} 
              onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter number" name="number" value={input.number} 
              onChange={handleInput} />
          </Form.Group>

          <div className="signup-role">
            <Form.Check type="radio" name="role"  value={input.student}  onChange={handleInput} />
            <Form.Label>Student</Form.Label>

            <Form.Check type="radio" name="role" value={input.recruter}  onChange={handleInput} />
            <Form.Label>Recruiter</Form.Label>

            <Form.Group className="mb-3">
              <div style={{display:"flex"}}>
              <Form.Label >Profile</Form.Label>
              <Form.Control type="file" accept="image/*"  onChange={handleImage}/>
              </div>
           
          </Form.Group>
          </div>

          <Button  onClick={handleSubmit}   className="signup-button"> Submit</Button>

          <div className="signup-login">
            <span>Already have an account? <Link to="/login">Login</Link></span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
