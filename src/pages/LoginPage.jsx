import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import Footer from "../components/Footer";
import "../styles/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="overlay d-flex flex-column justify-content-between">
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
          <Card className="p-4 login-card">
            <h2 className="text-white mb-4 text-center">Sign In</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email or mobile number"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="danger" type="submit" className="w-100 mb-2">
                Sign In
              </Button>

              <div className="text-center text-white mb-2">OR</div>

              {/* <Button variant="secondary" className="w-100 mb-3">
                Use a sign-in code
              </Button> */}

              <div className="d-flex justify-content-between text-white">
                <Form.Check type="checkbox" label="Remember me" />
                <a href="#" className="text-white">
                  Forgot password?
                </a>
              </div>

              <div className="mt-4 text-white text-center">
                New to Netflix?{" "}
                <a href="#" className="text-white fw-bold">
                  Sign up now
                </a>
                .
              </div>
              {/* <div className="mt-2 text-white small text-center">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{" "}
                <a href="#" className="text-white">
                  Learn more.
                </a>
              </div> */}
            </Form>
          </Card>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
