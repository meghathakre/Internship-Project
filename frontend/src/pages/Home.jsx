import Catagory from "./Category";
import HeroSection from "./HeroSection";
import LetestJob from "./LetestJob";
import {useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Home=()=>{
    const navigate= useNavigate();
  useEffect(()=>{
  const authCheck = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) { localStorage.setItem("auth-token", ""); token = ""; }
    const tokenResponse = await axios.post("http://localhost:8000/user/checkuservalidation", null, { headers: { "x-auth-token": token } });    
    console.log(tokenResponse.data);
    if (tokenResponse.data) { 
          navigate("/topmenu");
     }
  }
  authCheck();
}, []) 


    return(
        <>
        <center style={{marginTop:"20px"}}>
        <HeroSection/>
       <Catagory/>
       <LetestJob/>
        </center>
        
        </>
    )
}
export default Home;