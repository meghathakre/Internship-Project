import {Outlet} from "react-router-dom";
import Topmenu from "./components/Topmenu";
const Layout=()=>{
    return(
        <>
        <Topmenu/>
        <Outlet/>
        
        </>
    )
}
export default Layout;