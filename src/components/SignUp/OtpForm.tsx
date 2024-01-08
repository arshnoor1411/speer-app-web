import { Dispatch, SetStateAction, useState, MouseEvent } from "react";
interface OtpFormProps {
  email: string;
  otp: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setOtp: Dispatch<SetStateAction<string>>;
  onSubmit: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}

const OtpForm = (props: OtpFormProps) => {
  const { email, otp, setEmail, setOtp, onSubmit } = props;
  return (
    <div>
      <input
        type="otp"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      ></input>
      <button onClick={(e) => onSubmit(e)}>Verify</button>
    </div>
  );
};

export default OtpForm;
