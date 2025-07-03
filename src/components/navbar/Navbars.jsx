import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import '../../styles/Navbars.css';
import { FaBell } from 'react-icons/fa';
import Dropdowns from '../dropdown/Dropdowns';
import { searchMovies } from '../../fuzzy.js';
import { Link } from "react-router";

const Navbars = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(props);
  
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim()) {
      setSearchResults(searchMovies(value));
    } else {
      setSearchResults([]);
    }
  };

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
              <div className="navbar-left d-flex align-items-center gap-3 flex-grow-1">
                <Nav className="me-auto d-flex align-items-center gap-2">
                  
                    <Link to='/' className="nav-link">
                  Home
                </Link>
                 
                  <Nav.Link href="#" className="nav-link">
                    <Dropdowns />
                  </Nav.Link>
                </Nav>
              </div>
              <div className="navbar-right d-flex align-items-center gap-3 justify-content-end flex-shrink-0 position-relative">
                <input
                  className="search-box"
                  type="text"
                  placeholder="Search..."
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <FaBell className="text-white cursor-pointer position-relative" style={{ fontSize: '1.2rem' }}>
                  <span className="notification-badge">3</span>
                </FaBell>
                <img src="/profile.jpg" alt="Profile" className="profile-icon" />
                {/* Fuzzy search results dropdown */}
                {searchTerm && searchResults.length > 0 && (
                  <div style={{
                    position: 'absolute',
                    top: '110%',
                    right: 0,
                    left: 0,
                    background: '#181818',
                    color: '#fff',
                    border: '1px solid #333',
                    borderRadius: 4,
                    zIndex: 2000,
                    maxHeight: 220,
                    overflowY: 'auto',
                  }}>
                    {searchResults.map((movie, idx) => (
                      <div key={idx} style={{ padding: '8px 16px', borderBottom: '1px solid #222', cursor: 'pointer' }}>
                        {movie.title} <span style={{ color: '#b3b3b3', fontSize: '0.9em' }}>({movie.year})</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
