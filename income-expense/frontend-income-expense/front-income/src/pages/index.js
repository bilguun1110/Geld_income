import Image from "next/image";
import { Login } from "@/components/Login";
import { Signup } from "@/components/Signup";
import { useState } from "react";

export default function Home() {
  const [onSignup, setOnSignUp] = useState(false);

  const handleSwitchForm = () => setOnSignUp(!onSignup);

  return (
    <div>
      <div>
        {onSignup ? (
          <Signup handleSwitchForm={handleSwitchForm} />
        ) : (
          <Login handleSwitchForm={handleSwitchForm} />
        )}
      </div>
    </div>
  );
}
