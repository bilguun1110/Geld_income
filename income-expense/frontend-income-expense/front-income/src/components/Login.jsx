import { useState } from "react";
import Image from "next/image";
import React from "react";

export const Login = ({ handleSwitchForm }) => {
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
              className="w-96 h-12 rounded-lg bg-gray-200 p-2 mx-auto"
              placeholder="Email"
            />
            <input
              className="w-96 h-12 rounded-lg bg-gray-200 p-2 mx-auto"
              placeholder="Password"
            />
            <button className="w-[100%] h-12 rounded-2xl bg-[#0166FF] bg-p-2 mx-auto text-white text-base font-normal">
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
      <div className="w-[50%] h-[100vh] bg-[#0166FF]"></div>
    </div>
  );
};
