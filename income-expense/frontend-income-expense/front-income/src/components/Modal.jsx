import Image from "next/image";
import { useState } from "react";

export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div
      style={{
        position: "absolute",
        background: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
      className="flex justify-center items-center"
    >
      <div className="bg-white rounded-lg w-[792px]  h-[512px]">
        <div className="flex justify-between border-b-2 px-6 py-5">
          <p className=" flex items-center  font-semibold text-xl ">
            Add Record
          </p>
          <Image
            onClick={onClose}
            src="/X.png"
            width={24}
            height={24}
            className="w-6 h-6 cursor-pointer"
          />
        </div>

        <div className="flex">
          <div className="w-[50%] px-5 py-6 flex flex-col gap-5 ">
            <div className="w-[100%]] h-[40px] rounded-[100px] text-base font-normal bg-[#F3F4F6] ">
              <button className="w-[50%] bg-[#0166FF]  h-[100%] text-[#F9FAFB] rounded-[100px]">
                Expense
              </button>
              <button className="w-[50%] h-[100%]">Income</button>
            </div>
            <div className="w-[100%] px-3 py-4 h-[76px] bg-[#F3F4F6] rounded-lg  border-[1px]">
              <p className="font-normal text-base">Amount</p>
              <input
                placeholder="₮ 000.00"
                className="bg-[#F3F4F6] text-xl font-normal"
              />
            </div>
            <div>
              <p>Category</p>
              <select
                className="w-[100%] h-[48px] bg-[#F9FAFB] rounded-lg border-[1px]"
                name="dd"
                id=""
              >
                <option value="">Choose</option>
              </select>
            </div>
            <div className="flex gap-3">
              <div className="w-[50%]">
                <p>Date</p>
                <select
                  className="w-[100%] h-[48px] bg-[#F9FAFB] rounded-lg border-[1px] mt-2"
                  name=""
                  id=""
                >
                  <option value="">Oct 30, 2023</option>
                </select>
              </div>
              <div className="w-[50%]">
                <p>Date</p>
                <select
                  className="w-[100%] h-[48px] bg-[#F9FAFB] rounded-lg border-[1px] mt-2"
                  name=""
                  id=""
                  placeholder="Choose"
                >
                  <option value="">4:15 PM</option>
                </select>
              </div>
            </div>
            <button className="w-[100%] h-[40px] bg-[#0166FF] rounded-[20px] text-[#F9FAFB]">
              Add Record
            </button>
          </div>

          <div className="w-[50%] p-6 flex flex-col gap-5">
            <div>
              <p className="text-base font-normal">Payee</p>
              <select
                className="w-[100%] h-[48px] bg-[#F9FAFB] rounded-lg border-[1px] mt-2"
                name="dd"
                id=""
              >
                <option></option>
              </select>
            </div>
            <div className="">
              <p className="text-base font-normal">Note</p>

              <textarea
                className="w-[100%] h-[250px] bg-[#F9FAFB] rounded-lg border-[1px] mt-2 p-4  "
                name=""
                id=""
                placeholder="Write here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
