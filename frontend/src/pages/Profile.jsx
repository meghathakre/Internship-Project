// 




import img from "../images/IMG-ankita.jpg";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("uname");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    
    localStorage.removeItem("uname"); // Remove only username, not clearing all storage
    message.success("You are logged out");

    setTimeout(() => {
      navigate("/login", { replace: true }); // Navigate to login page
      window.location.reload(); // Force a UI refresh
    }, 500);
  };

  return (
    <div>
      <img
        src={img}
        width="50px"
        style={{ borderRadius: "50%", margin: "2px", cursor: "pointer" }}
        onClick={handleShow}
        alt="Profile"
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <img
            src={img}
            width="50px"
            style={{ borderRadius: "50%", margin: "20px" }}
            alt="Profile"
          />
          <Modal.Title>{username ? username : "Guest"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            View Profile
          </Button>
          <br />
          <Button variant="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Profile;
