import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../Signup.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  function saveUser() {
    console.log("User Saving");
    console.log(FirstName, LastName, Email, Password, ConfirmPassword);

    console.log("sending data");
    const sendData = async () => {
      const obj = {
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: Password,
      };
      console.log(obj);
      const result = await axios.post(
        "http://localhost:3001/saveUser/signup",
        obj
      );
    };
    sendData();
    console.log("DATA Sent");
    navigate("/");
  }

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label">First Name </label>
          <input
            className="form__input"
            type="text"
            id="firstName"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="lastname">
          <label className="form__label">Last Name </label>
          <input
            type="text"
            name=""
            id="lastName"
            className="form__input"
            placeholder="LastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="email">
          <label className="form__label">Email </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <label className="form__label">Password </label>
          <input
            className="form__input"
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="confirm-password">
          <label className="form__label">Confirm Password </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="footer">
        <button onClick={saveUser}>Create New Account</button>
      </div>
    </div>
  );
}
