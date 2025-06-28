import React from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import "../../styles/Footer.css";

const Footer = () => (
  <footer className="text-white py-4 footer-container">
    <Container>
      <p className="mb-3">Questions? Call 000-800-919-1743 (Toll-Free)</p>
      <Row>
        <Col xs={6} md={3}>
          <a href="#" className="text-white d-block mb-2">
            FAQ
          </a>
        </Col>
        <Col xs={6} md={3}>
          <a href="#" className="text-white d-block mb-2">
            Help Centre
          </a>
        </Col>
        <Col xs={6} md={3}>
          <a href="#" className="text-white d-block mb-2">
            Terms of Use
          </a>
        </Col>
        <Col xs={6} md={3}>
          <a href="#" className="text-white d-block mb-2">
            Privacy
          </a>
        </Col>
        <Col xs={6} md={3}>
          <a href="#" className="text-white d-block mb-2">
            Cookie Preferences
          </a>
        </Col>
        <Col xs={6} md={3}>
          <a href="#" className="text-white d-block mb-2">
            Corporate Information
          </a>
        </Col>
      </Row>
      <div className="mt-3">
        <DropdownButton
          id="dropdown-language"
          title="⚛ English"
          variant="secondary"
        >
          <Dropdown.Item href="#">English</Dropdown.Item>
          <Dropdown.Item href="#">Hindi</Dropdown.Item>
        </DropdownButton>
      </div>
    </Container>
  </footer>
);

export default Footer;
