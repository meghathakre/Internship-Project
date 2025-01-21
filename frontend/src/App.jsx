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
<<<<<<< HEAD
=======

>>>>>>> 423660e2759b1326908be27938c81b8532b89fc0
    <Route path="login" element={<Login/>}/>
    <Route path="registration" element={<Signup/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}
export default App;
