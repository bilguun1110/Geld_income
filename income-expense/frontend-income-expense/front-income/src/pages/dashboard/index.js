import React from "react";
import Image from "next/image";
import { Dashboard } from "@/components/DashBoard";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const Home = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [color, setColor] = useState(false);

  const recordHandler = async () => {
    try {
      router.push(`/records`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[1440px] m-auto">
      <div className="w-[100wh] flex h-18 bg-white px-[120px] py-[16px] justify-between">
        <div className="flex w-56 h-10 gap-6 text-base font-normal">
          <Image
            src="/blueGeld.png"
            width={27}
            height={27}
            className="w-[27px] h-[27px] mt-2"
          />
          <button>Dashboard</button>
          <button
            onClick={() => {
              recordHandler();
            }}
            className={`curser-pointer ${
              pathname === "/dashboard" ? "text-gray-500" : "text-black"
            }`}
          >
            Records
          </button>
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
      <div>
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
