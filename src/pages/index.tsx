import { Inter } from "next/font/google";
import Header from "../components/Header";
import { SetStateAction, useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Link from "next/link";

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);

  // const handleLogin = (username: SetStateAction<null>) => {
  //   setCurrentUser(username);
  // };

  // const handleSignup = (username: SetStateAction<null>) => {
  //   setCurrentUser(username);
  // };

  return (
    <div>
      <Header />
      <h1>Welcome to Next.js!</h1>
    </div>
  );
}
