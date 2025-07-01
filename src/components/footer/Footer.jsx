import React from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import "../../styles/Footer.css";

const Footer = () => (
  <footer className="footer-container text-white">
    <Container>
      <p className="footer-contact mb-4">Questions? Call 000-800-919-1743 (Toll-Free)</p>
      <Row className="footer-links">
        {[
          "FAQ",
          "Help Centre",
          "Terms of Use",
          "Privacy",
          "Cookie Preferences",
          "Corporate Information",
        ].map((text, idx) => (
          <Col xs={6} sm={4} md={3} key={idx}>
            <a href="#" className="footer-link">
              {text}
            </a>
          </Col>
        ))}
      </Row>
      <div className="footer-language mt-4">
        <DropdownButton
          id="dropdown-language"
          title="🌐 English"
          variant="outline-light"
          size="sm"
        >
          <Dropdown.Item href="#">English</Dropdown.Item>
          <Dropdown.Item href="#">Hindi</Dropdown.Item>
        </DropdownButton>
      </div>
    </Container>
  </footer>
);

export default Footer;
