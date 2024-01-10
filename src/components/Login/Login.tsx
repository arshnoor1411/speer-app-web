import React, { Dispatch, SetStateAction, MouseEvent, useState } from "react";

import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const repsonse = await axios.post("http://localhost:4000/auth/login", {
      email,
      password,
    });
  };
  return (
    <div>
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
      <button onClick={handleLogin}></button>
    </div>
  );
};

export default LoginForm;
