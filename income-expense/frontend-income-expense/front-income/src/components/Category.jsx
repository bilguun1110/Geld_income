import { GoHomeFill } from "react-icons/go";
import Image from "next/image";
import { PiForkKnifeFill } from "react-icons/pi";
import { HiComputerDesktop } from "react-icons/hi2";
import { AddCateModal } from "./AddCateModal";

import { useState } from "react";
import {
  PiGiftFill,
  PiWineFill,
  PiTaxiFill,
  PiTShirtFill,
} from "react-icons/pi";

export const Category = ({ isOpen, onClose, handleCateModal }) => {
  const [open, setOpen] = useState(false);

  const handleCategory = () => {
    setOpen(!open);
  };

  const options = [
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
    { icon: <PiGiftFill size={24} color="#FF4545" />, name: "Gift" },
    { icon: <PiForkKnifeFill size={24} color="#FB8A22" />, name: "Food" },
    { icon: <PiWineFill size={24} color="#A804AB" />, name: "Drink" },
    { icon: <PiTaxiFill size={24} color="#EAB308" />, name: "Taxi" },
    { icon: <PiTShirtFill size={24} color="#EAB308" />, name: "Shopping" },
    {
      icon: <HiComputerDesktop size={24} color="#D1D5DB" />,
      name: "Communication",
    },
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
  ];
  if (!isOpen) return null;

  return (
    <div
      className="w-[356px] h-[392px] bg-white rounded-xl overflow-y-scroll "
      on
    >
      <div className="h-[56px] flex w-[100%] gap-4 p-4  ">
        <Image
          src="/plus2.png"
          width={20}
          height={20}
          onClick={handleCateModal}
          className="w-5 h-5"
          style={{ cursor: "pointer" }}
        />{" "}
        <p>Add Category</p>
      </div>
      <hr />

      <div className="">
        {options.map(({ icon, name }, idx) => (
          <div
            key={idx}
            onClick={onClose}
            className=" h-[56px] p-4  flex gap-3 cursor-pointer"
          >
            <div>{icon}</div>
            <div>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
