import img from "../images/IMG-ankita.jpg"
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
const Profile=()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [username, setUsername]= useState("");
    
    useEffect(()=>{
        setUsername(localStorage.getItem("uname"));
    }, [])

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      localStorage.clear();
        navigate("/login")
      };

    return( 
        <div>
                    <img src={img} width="50px" style={{ borderRadius: "50%", margin: "2px" }} onClick={handleShow} />
                    {/* <Link to="/profile">Welcome, {user.name}</Link> */}

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <img src={img} width="50px" style={{ borderRadius: "50%", margin: "20px" }} />
                        <Modal.Title>{username}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                      
                      <Button variant="primary" onClick={handleClose}>
                      
                          View Profile
                        </Button>
                        <br/>
                        <Button variant="secondary" onClick={handleLogout}>
                          logout
                        </Button>
                        
                      </Modal.Footer>
                    </Modal>
                  </div>
    )
}
export default Profile;