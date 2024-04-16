import { SignIn } from "@clerk/nextjs";

export default function LogIn() {
  return (
    <div className="flex-center w-full h-screen">
      <SignIn  />
    </div>
  );
}
