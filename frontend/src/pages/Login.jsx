import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';



const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//    // const loading=useSelector((state)=>{state.auth})
//     const navigate = useNavigate();
//     const dispatch=useDispatch();

//     const handleSubmit = async () => {

//         try {
//             dispatch(setLoding(false))
//             let api = "http://localhost:8000/users/userlogin"
//             const res = await axios.post(api, { email: email, password: password });
//             console.log(res.data);
//             localStorage.setItem("name", res.data[0].name);
//             localStorage.setItem("email", res.data[0].email);
//             navigate("/home");
//         } catch (error) {
//             alert(error.response.data)
//         }finally{
//             dispatch(setLoding(true))

//         }
//     }

const [email, setEmail] =useState("");
const [password, setPassword] =useState("");
const navigate= useNavigate();


const handleSubmit=async()=>{


      try {
        let api="http://localhost:8000/users/userlogin";
        const res= await axios.post(api, {email:email, password:password});
        console.log(res.data);
        localStorage.setItem("name", res.data[0].name);
        localStorage.setItem("email", res.data[0].email);
        navigate("/home"); 
      } catch (error) {
        alert(error.response.data);
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
                                onChange={(e) => { setPassword(e.target.value) }} />
                        </Form.Group>


                        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                            <Form.Check type="radio" label="Student" name="role" />
                            <Form.Check type="radio" label="Recruiter" name="role" />
                        </div>

                        <Button onClick={handleSubmit} className="signup-button" > Submit</Button>

                        <div className="signup-login">
                            <span>Don't have an account? <Link to="/registration">Signup</Link></span>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default Login;