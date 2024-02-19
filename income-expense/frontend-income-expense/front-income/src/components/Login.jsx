import { useState } from "react";
import Image from "next/image";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const Login = ({ handleSwitchForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const loginHandler = async () => {
    try {
      const result = await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("token", result.data.token);
      router.push(`/dashboard
      `);
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
    }
  };

  return (
    <div className="flex">
      <div className=" h-[100vh] w-[50%] flex flex-col  bg-white pt-64">
        <div className="w-96 h-[426px] flex flex-col gap-y-10 justify-center items-center  ml-56">
          <div className="flex">
            <Image
              src="/logo.png"
              width={92}
              height={34}
              className="w-23 h-9"
            />
          </div>
          <div className=" w-72 flex flex-col items-center ">
            <h2 className="text-2xl font-semibold">Welcome Back</h2>
            <p className="font-normal text-sm">
              Welcome back, Please enter your details
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <input
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              className="w-96 h-12 rounded-lg bg-gray-200 p-2 mx-auto"
              placeholder="Email"
            />
            <input
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              type="password"
              className="w-96 h-12 rounded-lg bg-gray-200 p-2 mx-auto"
              placeholder="Password"
            />
            <div>{error && <div className="text-red-500">{error}</div>}</div>

            <button
              onClick={loginHandler}
              className="w-[100%] h-12 rounded-2xl bg-[#0166FF] bg-p-2 mx-auto text-white text-base font-normal"
            >
              Log in
            </button>
          </div>
          <div className="flex font-normal text-sm gap-3">
            <p>Dont't have account?</p>
            <button className="text-[#0166FF]" onClick={handleSwitchForm}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
