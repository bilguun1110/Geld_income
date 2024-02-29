import axios from "axios";

import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/");
      return;
    }

    const verifyToken = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:8000/refresh",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
          }
        );
        setUserEmail(data);
        router.push("/dashboard");
      } catch (error) {
        localStorage.removeItem("token");
        router.push("/");
      }
    };
    verifyToken();
  }, []);

  return (
    <UserContext.Provider value={{ userEmail }}>
      {children}
    </UserContext.Provider>
  );
};
