import { useState } from "react";

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
      <h1>Welcome to Next.js!</h1>
    </div>
  );
}
