import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import img from "../images/IMG-ankita.jpg"
import { Link } from 'react-router-dom';

const Topmenu=()=>{
  const user = false;

    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark" >
        <Container className="justify-content-between">
          <Navbar.Brand href="#home">job Poratal</Navbar.Brand>
          
          <Nav className="ms-auto" style={{ alignItems: 'center' }}>
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="jobs">jobs</Nav.Link>
            <Nav.Link as={Link} to="browse">browse</Nav.Link>
           
           {
              !user ?
              (
                <div id='Button' style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Button  as={Link} to="login" >login </Button>
                <Button as={Link} to="registration">Registration</Button> 
                </div>
              ):(
                <div>
                <img src={img} width="50px" style={{borderRadius:"50%", margin:"2px"}}/>
               </div>
              )
           }
          
            
          </Nav>
        </Container>
      </Navbar>
     </>
    )
}
export default Topmenu;