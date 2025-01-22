import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { message } from "antd";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../css/Signup.css'; 

const Signup = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    const api = "http://localhost:8000/users/userregistration";
    axios.post(api, input).then((res) => {
        message.success("You are registered successfully!");
      }).catch((err) => {
        message.error("Registration failed. Please try again.");
      });
  };

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
            <Form.Check type="radio" label="Student" name="role" />
            <Form.Check type="radio" label="Recruiter" name="role" />
            <Form.Group className="mb-3">
              <div style={{display:"flex"}}>
              <Form.Label >ProfilePhoto</Form.Label>
              <Form.Control type="file" accept="image/*" />
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
