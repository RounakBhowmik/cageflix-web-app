import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl } from 'react-bootstrap';
import '../../styles/Navbars.css';
import { FaSearch, FaBell } from 'react-icons/fa';

const Navbars = () => {
  return (
    <Navbar expand="lg" className="netflix-navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="text-danger fw-bold">CAGEFLIX</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="#" active>Home</Nav.Link>
          <Nav.Link href="#">TV Shows</Nav.Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">My List</Nav.Link>
        </Nav>

        <div className="d-flex align-items-center gap-3">
          <FaSearch className="text-white cursor-pointer" />
          <FaBell className="text-white cursor-pointer position-relative">
            <span className="notification-badge">3</span>
          </FaBell>
          <img src="/profile.jpg" alt="Profile" className="profile-icon" />
        </div>
      </Container>
    </Navbar>
  );
};

export default Navbars;


