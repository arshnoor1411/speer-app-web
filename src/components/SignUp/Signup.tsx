// pages/signup.tsx
import React, { Dispatch, SetStateAction, MouseEvent } from "react";
import Signup from "./Signup";

interface SignupPageProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  otp: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  setLastName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setOtp: Dispatch<SetStateAction<string>>;
  onSubmit: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}

const SignupPage: React.FC<SignupPageProps> = (props: SignupPageProps) => {
  const {
    firstName,
    lastName,
    email,
    password,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    onSubmit,
  } = props;

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
      <button
        onClick={(e) => {
          onSubmit(e);
        }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignupPage;
