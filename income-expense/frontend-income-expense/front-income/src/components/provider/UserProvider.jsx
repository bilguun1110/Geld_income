import axios from "axios";

import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/");
    }

    const verifyToken = async () => {
      try {
        const email = await axios.post("http://localhost:8000/refresh", {
          header: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        });
        setUser(email);
        router.push("/dashboard");
      } catch (error) {
        router.push("/");
      }
    };
    verifyToken();
  }, []);
  console.log(user);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
