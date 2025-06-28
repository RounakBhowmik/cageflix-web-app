// src/pages/SignupPage.jsx
import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "../../styles/Auth.css";


const Signup = () => {
  const user_signup_schema = yup.object({
    first_name: yup.string().required('Plese enter the first name'),
    last_name: yup.string().required('Plese enter the last name'),
    email: yup.string().email().required('Plese enter the email address'),
    password: yup.string().required('Plese enter the password'),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(user_signup_schema)
  });
  const onSubmit = (data) => console.log(data)
  return (
    <div className="login-page">
      <div className="overlay d-flex flex-column justify-content-between">
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
          <Card className="p-4 login-card">
            <h2 className="text-white mb-4 text-center">Sign Up</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Control type="text" placeholder="First Name" {...register("first_name")} />
                <ErrorMessage message={errors.first_name?.message} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Control type="text" placeholder="Last Name" {...register("last_name")} />
                <ErrorMessage message={errors.last_name?.message} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSignupEmail">
                <Form.Control type="email" placeholder="Email" {...register("email")} />
                <ErrorMessage message={errors.email?.message} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSignupPassword">
                <Form.Control type="password" placeholder="Password" {...register("password")} />
                <ErrorMessage message={errors.password?.message} />
              </Form.Group>

              <Button variant="danger" type="submit" className="w-100 mb-3">
                Create Account
              </Button>

              <div className="text-white text-center">
                Already have an account?{" "}
                <Link to="/signin" className="text-white fw-bold">
                  Sign in
                </Link>
                .
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signup;
