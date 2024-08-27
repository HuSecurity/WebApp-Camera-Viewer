'use client';

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const UserAccountnav = () => {
  return ( 
    <Button onClick={() => signOut()} variant="destructive">
    Sign Out
    </Button>
  );
};

export default UserAccountnav;
