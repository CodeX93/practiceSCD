import React, { useState } from "react";
import Home from "./Home";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [LoginStatus, setLoginStatus] = useState("");

  function Login() {
    console.log(Email, Password);
    const sendData = async () => {
      const obj = {
        Email: Email,
        Password: Password,
      };

      const result = await axios.post(
        "http://localhost:3001/loginUser/login",
        obj
      );
      console.log(result);
      if (result.status === 200) {
        console.log("Success");
        navigate("/Home");
      }
    };
    sendData();

    console.log("Login Request Sent");
  }

  return (
    <Form onSubmit={Login}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>
      <Link to="/SignUp">Create New Account</Link>
      <br></br>
      <p>{LoginStatus}</p>
      <br></br>

      <Button variant="primary" type="submit" onClick={Login}>
        Submit
      </Button>
    </Form>
  );
}
