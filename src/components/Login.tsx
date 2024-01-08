// pages/login.tsx
import React, { Dispatch, SetStateAction, MouseEvent } from "react";
import Header from "../components/Header";
import Login from "../components/Login";

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  onSubmit: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}

const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const { email, password, setEmail, setPassword, onSubmit } = props;
  return (
    <div>
      <Header />
      <h1>Login Page</h1>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <button
        onClick={(e) => {
          onSubmit(e);
        }}
      ></button>
    </div>
  );
};

export default LoginForm;
