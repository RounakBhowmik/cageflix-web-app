import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import '../../styles/Navbars.css';
import { FaSearch, FaBell } from 'react-icons/fa';
import Dropdowns from '../dropdown/Dropdowns';
const Navbars = () => {
  return (
    <>
      <Navbar expand="lg" className="netflix-navbar fixed-top" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#" className="text-danger fw-bold">
            CAGEFLIX
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-responsive" />
          <Navbar.Offcanvas
            id="navbar-responsive"
            aria-labelledby="navbar-label"
            placement="end"
            className="bg-black"
          >
            <Offcanvas.Header closeButton className="text-white border-bottom border-secondary">
              <Offcanvas.Title id="navbar-label" className="text-danger fw-bold">
                CAGEFLIX
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto">
                <Nav.Link href="#" active>
                  Home
                </Nav.Link>
                <Nav.Link href="#"><Dropdowns /></Nav.Link>
              </Nav>

              <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0 justify-content-center justify-content-lg-end">
                <FaSearch className="text-white cursor-pointer" />
                <FaBell className="text-white cursor-pointer position-relative">
                  <span className="notification-badge">3</span>
                </FaBell>
                <img src="/profile.jpg" alt="Profile" className="profile-icon" />
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
