import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {message} from "antd";
import axios from "axios";



const Signup=()=>{
    const [input,setInput]=useState({});

    const handleInput=(e)=>{
        let name=e.target.name;
        let value= e.target.value;
        setInput((values)=>({...values,[name]:value}))
       
    }

    const handleSubmit=()=>{
        let api="http://localhost:8000/users/userregistration";
        axios.post(api,input).then((res)=>{
           message.success("you are registurd successfully");

        })


    }

    return(
        <>
        <h1>sign up page</h1>
        <Form>
      
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Enter Name</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="enter name"  name="name" value={input.name} onChange={handleInput}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Enter Email</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Enter email" name="email" value={input.email} onChange={handleInput}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Enter Password</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="enter password" name="password" value={input.password} onChange={handleInput}/>
        </Form.Group>
        
        <Button onClick={handleSubmit}>Submit</Button>
     
    </Form>
        </>
    )
}
export default  Signup;