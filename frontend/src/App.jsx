import { Routes,Route, BrowserRouter } from "react-router-dom"
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/signup";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>

    <Route path="login" element={<Login/>}/>
    <Route path="registration" element={<Signup/>}/>

      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}
export default App;
