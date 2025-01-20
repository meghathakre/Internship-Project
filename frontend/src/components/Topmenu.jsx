import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

const Topmenu=()=>{
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="home">jobs</Nav.Link>
            <Nav.Link as={Link} to="home">browse</Nav.Link>
           
           <div id='Button' style={{alignContent:"end"}}>
           <Button  as={Link} to="login" >login </Button>
           <Button as={Link} to="registration">Registration</Button>
           </div>
          
           
           
          
            
          </Nav>
        </Container>
      </Navbar>
     </>
    )
}
export default Topmenu;