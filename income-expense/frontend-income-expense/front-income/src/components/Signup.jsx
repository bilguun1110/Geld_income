import Image from "next/image";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Signup = ({ handleSwitchForm, setOnSignUp }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const signUpHandler = async () => {
    try {
      const result = await axios.post("http://localhost:8000/signup", {
        email: email,
        name: name,
        password: password,
        rePassword: rePassword,
      });
      if (password === rePassword) {
        console.log(result);
        setOnSignUp(false);
      } else {
        setError("wrong password");
      }
      router.push(`/steps`);
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
    }
  };

  return (
    <div className="">
      <div className=" h-[100vh] w-[50%] flex flex-col  bg-white pt-64">
        <div className="w-96 h-[554px] flex flex-col gap-y-10 justify-center items-center  ml-56">
          <div className="flex">
            <Image
              src="/logo.png"
              width={92}
              height={34}
              className="w-23 h-9"
            />
          </div>
          <div className=" w-72 flex flex-col items-center">
            <h2 className="text-2xl font-semibold">Create Geld account</h2>
            <p className="font-normal text-sm">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="flex flex-col gap-4 robotoText">
            <input
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              className="w-96 h-12 rounded-lg bg-gray-200 p-2 mx-auto"
              placeholder="Name"
            />
            <input
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              className="w-96 h-12 rounded-lg bg-gray-200 p-2 mx-auto"
              placeholder="Email"
            />
            <input
              value={password}
              type="password"
              onChange={(ev) => setPassword(ev.target.value)}
              className="w-96 h-12 rounded-lg bg-gray-200 p-2 mx-auto"
              placeholder="Password"
            />
            <input
              value={rePassword}
              type="password"
              onChange={(ev) => setRePassword(ev.target.value)}
              className="w-96 h-12 rounded-lg bg-gray-200 p-2 mx-auto"
              placeholder="Re-Password"
            />
            <div>{error && <div className="text-red-600">{error} </div>}</div>
            <button
              onClick={signUpHandler}
              className="w-[100%] h-12 rounded-2xl bg-[#0166FF] bg-p-2 mx-auto text-white text-base font-normal"
            >
              Sign up
            </button>
          </div>
          <div className="flex font-normal text-sm gap-3">
            <p>Already have account?</p>
            <button className="text-[#0166FF]" onClick={handleSwitchForm}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
