import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home=()=>{
const [username, setUsername]= useState("");
const [useremail, setUseremail]=useState("");
const navigate= useNavigate();

 useEffect(()=>{
    const userName= localStorage.getItem("name");
    const userEmail= localStorage.getItem("email");
    
    if (!userName)
    {
      navigate("/login");
    }


    setUsername(userName);
    setUseremail(userEmail);
 }, [])


 const logout=()=>{
   localStorage.clear();
   navigate("/login");
 }


    return(
        <>
         <h6>profile</h6>
          <h6> Welcome : {username} <br />
            Email: {useremail}</h6>
          <button  onClick={logout}>Logout</button>
        </>
    )
}
export default Home;