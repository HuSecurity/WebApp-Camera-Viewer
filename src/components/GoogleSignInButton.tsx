import { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";


// Defines interface
interface GoogleSignInButtonProps {
  children: ReactNode;
}

// Create google button sign in that couldve been used
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () =>
    // Once signed in sends user to admin page
    signIn("google", { callbackUrl: "http://localhost:3000/admin" });

  return (
    <Button onClick={loginWithGoogle} className="w-full">
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
