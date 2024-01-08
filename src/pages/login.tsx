import LoginForm from "@/components/Login/Login";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const repsonse = await axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    });
  };
  return (
    <LoginForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={handleLogin}
    ></LoginForm>
  );
};
export default Login;
