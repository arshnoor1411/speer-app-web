import OtpForm from "@/components/SignUp/OtpForm";
import SignupPage from "@/components/SignUp/Signup";
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const [signedUp, setSignedUp] = useState(false);

  return (
    <div>
      {signedUp ? (
        <div>
          <h2>Registration Successful!</h2>
          <p>You are now signed up.</p>
        </div>
      ) : (
        <div>
          <SignupPage />
        </div>
      )}
    </div>
  );
};

export default SignUp;
