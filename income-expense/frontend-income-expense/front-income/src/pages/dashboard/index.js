import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-[100%] flex h-18 bg-white px-[120px] py-[16px] justify-between">
      <div className="flex w-56 h-10 gap-6 text-base font-normal">
        <Image
          src="/blueGeld.png"
          width={27}
          height={27}
          className="w-[27px] h-[27px]"
        />
        <p>Dashboard</p>
        <p>Records</p>
      </div>
      <div className="flex w-41 gap-6">
        <button className="bg-[#0166FF] text-white  rounded-3xl w-24 font-normal text-base">
          + Record
        </button>
        <Image
          src="/Placeholder.png"
          width={40}
          height={40}
          className="w-10 h-10"
        />
      </div>
    </div>
  );
};

export default Home;
