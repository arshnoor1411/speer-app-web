import SignupPage from "@/components/Signup";
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [otp, setOtp] = useState("");

  const [signedUp] = useState(false);

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
      {signedUp ? (
        <div>
          <h2>Registration Successful!</h2>
          <p>You are now signed up.</p>
        </div>
      ) : (
        <SignupPage
          firstName={firstName}
          lastName={lastName}
          email={email}
          password={password}
          otp={otp}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setPassword={setPassword}
          setOtp={setOtp}
          onSubmit={handleSignup}
        ></SignupPage>
      )}
    </div>
  );
};

export default SignUp;
