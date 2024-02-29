import Image from "next/image";
import { Login } from "@/components/Login";
import { Signup } from "@/components/Signup";
import { useContext, useState } from "react";
import { UserContext } from "@/components/provider/UserProvider";
import { useRouter } from "next/navigation";

export default function Home() {
  const [onSignup, setOnSignUp] = useState(false);
  const router = useRouter();

  const { userEmail } = useContext(UserContext);

  if (userEmail) {
    router.push("/dashboard");
  }

  const handleSwitchForm = () => setOnSignUp(!onSignup);

  return (
    <div>
      <div>
        {onSignup ? (
          <Signup
            handleSwitchForm={handleSwitchForm}
            setOnSignUp={setOnSignUp}
          />
        ) : (
          <Login handleSwitchForm={handleSwitchForm} />
        )}
      </div>
    </div>
  );
}
