// src/pages/SignupPage.jsx
import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import Footer from "../components/Footer";
import "../styles/LoginPage.css";

const LogoutPage = () => {
  return (
    <div className="login-page">
      <div className="overlay d-flex flex-column justify-content-between">
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
          <Card className="p-4 login-card">
            <h2 className="text-white mb-4 text-center">Sign Up</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSignupEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSignupPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="danger" type="submit" className="w-100 mb-3">
                Create Account
              </Button>

              <div className="text-white text-center">
                Already have an account?{" "}
                <a href="#" className="text-white fw-bold">
                  Sign in
                </a>
                .
              </div>
            </Form>
          </Card>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default LogoutPage;
