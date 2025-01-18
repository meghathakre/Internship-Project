import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleSubmit=async()=>{
        try{
            let api="http://localhost:8000/users/userlogin"
            const res=await axios.post(api,{email:email,password:password});
            console.log(res.data);
            localStorage.setItem("name",res.data[0].name);
            localStorage.setItem("email",res.data[0].email);
            navigate("/home");
        }catch(error){
            alert(error.response.data)
        }
    }
    return(
        <>
         <center>
          <h1> User Login </h1>
          Enter Email : <input type="email" className="input" value={email} 
          onChange={(e)=>{setEmail(e.target.value)}} />
          <br/>
          Enter Password : <input type="password" className="input" value={password}
          onChange={(e)=>{setPassword(e.target.value)}} />
          <br/>
          <button onClick={handleSubmit}>Login</button>
          </center>
        </>
    )
}
export default Login;