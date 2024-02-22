import Image from "next/image";
import { IoIosRadioButtonOff } from "react-icons/io";
import { MdArrowRight } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import React from "react";

import { Modal } from "./Modal";

export const Records = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const categories = [
    {
      name: "Food & Drinks",
    },
    {
      name: "Shopping",
    },
    {
      name: "Housing",
    },
    {
      name: "Transportation",
    },
    {
      name: "Vehicle",
    },
    {
      name: "Life & Entertainment",
    },
    {
      name: "Communication, PC",
    },
    {
      name: "Financial expenses",
    },
    {
      name: "Investments",
    },
    {
      name: "Income",
    },
    {
      name: "Other",
    },
  ];

  const today = [
    {
      logo: "/home.png",
      lending: "Lending & Renting",
      hours: "14:00",
      currency: " - 1,000₮",
    },
    {
      logo: "/food2.png",
      lending: "Food & Drinks",
      hours: "14:00",
      currency: " - 1,000₮",
    },
    {
      logo: "/food2.png",
      lending: "Food & Drinks",
      hours: "14:00",
      currency: " - 1,000₮",
    },
    {
      logo: "/food2.png",
      lending: "Food & Drinks",
      hours: "14:00",
      currency: " - 1,000₮",
    },
    {
      logo: "/food2.png",
      lending: "Food & Drinks",
      hours: "14:00",
      currency: " - 1,000₮",
    },
  ];

  return (
    <div className="w-[100wh] h-[100vh] px-[120px] bg-[#F3F4F6] pt-6  flex justify-between">
      <div className=" w-[282px] h-[1080px] px-4 py-6 bg-white rounded-xl flex flex-col gap-6 ">
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-2xl">Records</h3>
          <button
            type="button"
            onClick={handleOpen}
            className="w-[250px] h-[32px] rounded-[20px] bg-[#0166FF] text-white text-base gap-2 font-normal flex justify-center items-center"
          >
            <FiPlus width={20} height={20} className="w-[20px] h-[20px]" />
            Add
          </button>
        </div>
        <input
          placeholder="Search"
          className="w-[100%] h-8 rounded bg-[#F3F4F6] p-4 border-solid border-[1px]"
        />
        <div className="text-base flex flex-col gap-2">
          <h3 className="font-semibold mb-4">Types</h3>
          <div className="flex font-normal items-center gap-1">
            <IoIosRadioButtonOff />
            All
          </div>
          <div className="flex font-normal items-center gap-1">
            <IoIosRadioButtonOff />
            Income
          </div>
          <div className="flex font-normal items-center gap-1">
            <IoIosRadioButtonOff className="" />
            Expense
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <h3 className="text-base font-semibold">Category</h3>
            <button className="font-normal text-base text-gray-300 w-[61px] h-[32px]">
              Clear
            </button>
          </div>

          <div className="w-[100%] flex flex-col gap-2 ">
            {categories.map(({ name }, idx) => (
              <div key={idx} className="flex items-center h-8 justify-between ">
                <div className="flex gap-2">
                  <IoEyeSharp
                    className="text-gray-400 w-5 h-5 my-auto"
                    width={20}
                    height={20}
                  />
                  <p>{name}</p>
                </div>
                <div>
                  <MdArrowRight
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px]"
                  />
                </div>
              </div>
            ))}
            <button className="flex items-center gap-1">
              <FiPlus
                width={24}
                height={24}
                className="text-[#0166FF] w-5 h-5"
              />
              Add Category
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-base">Amount Range</p>
          <div className="flex gap-4">
            <input
              type="number"
              className="bg-[#F3F4F6] w-[114px] h-[48px] rounded-lg border-[1px] border-solid"
            />
            <input
              type="number"
              className="bg-[#F3F4F6] w-[114px] h-[48px] rounded-lg border-[1px] border-solid"
            />
          </div>
          <div>
            <input type="range" id="" name="" min="0" max="100" />
            <label for="volume">100</label>
          </div>
        </div>
      </div>
      <div className="w-[894px] flex flex-col gap-6">
        <div className="flex w-[100%] justify-between mt-6">
          <div className="flex gap-4">
            <button className="flex items-center justify-center  rounded-lg w-8 h-8 bg-[#E5E7EB]">
              <IoIosArrowBack width={15} height={15} />
            </button>
            <p className="mt-1">Last 30 days</p>
            <button className="flex items-center justify-center rounded-lg  w-8 h-8 bg-[#E5E7EB]">
              <IoIosArrowForward width={15} height={15} />
            </button>
          </div>

          <select
            name="dd"
            id="dd"
            className="w-[180px] h-[48px] rounded-lg bg-[#F9FAFB] p-3 text-base font-semibold border-[1px]"
          >
            <option>Newest first</option>
            <option>bb</option>
          </select>
        </div>

        <div className="w-[100%] bg-white flex justify-between px-6 rounded-xl py-3 ">
          <div className="flex gap-4 items-center ">
            <input type="checkbox" className="w-5 h-5 bg-red-300" />
            <p>Select all</p>
          </div>

          <div className="flex gap-2 text-[#94A3B8]">
            <p>-</p>
            <p className="">35,500₮</p>
          </div>
        </div>
        <div className="w-[100%] flex flex-col gap-3  ">
          <div className="text-base font-semibold">Today</div>
          {today.map(({ logo, lending, hours, currency }, idx) => (
            <div
              key={idx}
              className="flex justify-between  border-solid border-2 rounded-xl h-16 px-6 w-[100%] bg-white py-3"
            >
              <div className="flex gap-4 items-center">
                <input type="checkbox" className="w-5 h-5" />
                <Image
                  src={logo}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <p className="font-normal text-base">{lending}</p>
                  <p className="font-normal text-xs">{hours}</p>
                </div>
              </div>

              <div className="text-base font-semibold text-[#EAB308]">
                {currency}
              </div>
            </div>
          ))}
        </div>
        <div className="w-[100%] flex flex-col gap-3  ">
          <div className="text-base font-semibold">Yesterday</div>
          {today.map(({ logo, lending, hours, currency }, idx) => (
            <div
              key={idx}
              className="flex justify-between  border-solid border-2 rounded-xl h-16 px-6 w-[100%] bg-white py-3"
            >
              <div className="flex gap-4 items-center">
                <input type="checkbox" className="w-5 h-5 " />
                <Image
                  src={logo}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <p className="font-normal text-base">{lending}</p>
                  <p className="font-normal text-xs">{hours}</p>
                </div>
              </div>

              <div className="text-base font-semibold text-[#EAB308]">
                {currency}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" ">
        <Modal isOpen={open} onCloseBig={handleClose}></Modal>
      </div>
    </div>
  );
};
