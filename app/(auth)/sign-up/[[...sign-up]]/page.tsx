import React from "react";
import { SignUp } from "@clerk/nextjs";
const Register = () => {
  return (
    <div className="flex-center w-full h-screen">
      <SignUp />
    </div>
  );
};

export default Register;
