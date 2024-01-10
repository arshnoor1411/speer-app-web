// pages/signup.tsx
import React, { Dispatch, SetStateAction, MouseEvent, useState } from "react";
import Signup from "./Signup";
import axios from "axios";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:4000/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    console.log("RRR", response);

    if (response.data) {
      console.log("Successfully Signed Up");
    } else {
      // Handle error scenarios
      console.error("User registration failed:", response.data.error);
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>

      <div>
        <label>First Name</label>
        <input
          type="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label>Last Name</label>
        <input
          type="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupPage;
