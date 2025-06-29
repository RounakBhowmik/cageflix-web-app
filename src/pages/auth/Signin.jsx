import React, { useEffect } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { has, isEmpty } from "lodash";
import * as yup from "yup"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Link } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../shared/services/auth";
import "../../styles/Auth.css"

const Signin = () => {
  const user_signin_schema = yup.object({
    email: yup.string().email().required('Plese enter the email address'),
    password: yup.string().required('Plese enter the password'),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm({
    resolver: yupResolver(user_signin_schema)
  });
  const mutation = useMutation({
    mutationFn: async (postData) => {
      return await signIn(postData);
    }
  })
  const onSubmit = (data) => {
    mutation.mutate(data);
  }

  useEffect(() => {
  if (mutation.isError && has(mutation.error, 'error') && !isEmpty(mutation.error.error)) {
    const { error } = mutation.error;
    for (let key in error) {
      setError(key, { message: error[key] });
    }
  }
}, [mutation.isError, mutation.error, setError]);

  return (
    <div className="login-page">
      <div className="overlay d-flex flex-column justify-content-between">
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
          <Card className="p-4 login-card">
            <h2 className="text-white mb-4 text-center">Sign In</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email or mobile number"
                  {...register("email")}
                />
                <ErrorMessage message={errors.email?.message} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" {...register("password")} />
                <ErrorMessage message={errors.password?.message} />
              </Form.Group>
              <ErrorMessage message={errors.message?.message} />
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
                <Link to='/signup' className="text-white fw-bold">
                  Sign up now
                </Link>
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
      </div>
    </div>
  );
};

export default Signin;
