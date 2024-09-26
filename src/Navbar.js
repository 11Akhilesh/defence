import React from 'react';
import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import './Navbar.css'; // Custom styles
import MOD1 from './images/MOD2.png';
import face from './images/face(1).png'; // Replace with actual path
import youtube from './images/youtube.png'; // Replace with actual path
import instagramIcon from './images/insta_2_.png'; // Replace with actual path
import mainLogo from './images/MAIN.png'; // Import your logo

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Container fluid>
        {/* Top First Navbar Subsection */}
        <Nav className="top-navbar">
          <Nav.Link href="#" className="top-navbar-link">Home</Nav.Link>
          <Nav.Link href="#" className="top-navbar-link">About Us</Nav.Link>
          <Nav.Link href="#" className="top-navbar-link">Contact Us</Nav.Link>
        </Nav>
        <Nav className="main">
        <Navbar.Brand href="#">
          <Image src={mainLogo} alt="Main Logo" className="main-logo" />
        </Navbar.Brand>
        </Nav>

        {/* Center Section */}
        <Nav className="mx-auto">
          <div className="ministry-logo-section">
            <Image src={MOD1} alt="Ministry of Defence Logo" className="ministry-logo" />
           
          </div>
        </Nav>

        {/* Right Section with Social Media Icons */}
        <Nav className="social-icons">
        <Nav.Link href="https://www.facebook.com" target="_blank" aria-label="Facebook">
  <Image src={face} alt="Facebook" style={{ width: '31px', height: 'auto' ,bottom:'100px',marginLeft:'50px'}} />
</Nav.Link>

          <Nav.Link href="https://www.youtube.com" target="_blank" aria-label="YouTube">
            <Image src={youtube} alt="YouTube" className="icon" />
          </Nav.Link>
          <Nav.Link href="https://www.instagram.com" target="_blank" aria-label="Instagram">
            <Image src={instagramIcon} alt="Instagram" className="icon" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;