import axios from "axios";
import { useState } from "react";

const OtpForm = () => {
  const [otp, setOtp] = useState("");
  const [showOtpPopup, setShowOtpPopup] = useState(false);

  const [signedUp, setSignedUp] = useState(false);
  const handleOtp = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const repsonse = await axios.post("http://localhost:4000/auth/verify-otp", {
      // email,
      otp,
    });
  };
  return (
    <div>
      <input
        type="otp"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      ></input>
      <button onClick={handleOtp}>Verify</button>
    </div>
  );
};

export default OtpForm;
