import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner';
import { setLoading } from "../Redux/authSlice";


import axios from "axios";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loading = useSelector((state) => { state.auth.loading })
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const handleSubmit = async () => {

        try {
            dispatch(setLoading(false))
            let api = "http://localhost:8000/users/userlogin"
            const res = await axios.post(api, { email: email, password: password });
            console.log(res.data);
            localStorage.setItem("name", res.data[0].name);
            localStorage.setItem("email", res.data[0].email);
            navigate("/home");
        } catch (error) {
            alert(error.response.data)
        } finally {
            dispatch(setLoading(true))

        }
    }
    return (
        <>

            <div className="signup-container">
                <div className="signup-card">
                    <h2 className="signup-title">login</h2>
                    <Form >

                        <Form.Group className="mb-3">
                            <Form.Label>Enter Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={email}
                                onChange={(e) => { setEmail(e.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Enter Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" name="password"
                                value={password}
                                onChange={(e) => { setEmail(e.target.value) }} />
                        </Form.Group>


                        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                            <Form.Check type="radio" label="Student" name="role" />
                            <Form.Check type="radio" label="Recruiter" name="role" />
                        </div>

                        <Button onClick={handleSubmit} className="signup-button" > Submit</Button>

                        <div className="signup-login">
                            <span>Don't have an account? <Link to="/registration">Signup</Link></span>
                        </div>
                        {
                            loading ? <Button className="w-full my-4"> <Spinner animation="border" /> Please wait </Button> : <Button type="submit" className="w-full my-4">Login</Button>
                        }
                        <span className='text-sm'>Don't have an account? <Link to="/signup" className='text-blue-600'>Signup</Link></span>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default Login;