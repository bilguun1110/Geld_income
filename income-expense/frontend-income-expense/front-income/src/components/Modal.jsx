import Image from "next/image";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Category } from "./Category";
export const Modal = ({ isOpen, onClose }) => {
  const [color, setColor] = useState(false);
  const [open, setOpen] = useState(false);

  const handleShowModal = () => {
    setOpen(!open);
  };

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
              <button
                onClick={() => {
                  setColor(true);
                }}
                className={`w-[50%] py-2 h-[100%] rounded-[100px] ${
                  color
                    ? "text-[#F9FAFB] bg-[#0166FF]"
                    : "text-[#00000] bg-[#F3F4F6]"
                }`}
              >
                Expense
              </button>
              <button
                onClick={() => {
                  setColor(false);
                }}
                className={`w-[50%] py-2 h-[100%] rounded-[100px] ${
                  color
                    ? "text-[#00000] bg-[#F3F4F6]"
                    : "text-[#F9FAFB] bg-[#16A34A]"
                }`}
              >
                Income
              </button>
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
              <div className="w-[100%] h-[48px] bg-[#F9FAFB] rounded-lg curser-pointer border-[1px] flex items-center justify-end pr-3">
                <IoMdArrowDropdown
                  onClick={handleShowModal}
                  width={15}
                  height={15}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="z-20 absolute">
                <Category isOpen={open} onClose={handleShowModal}></Category>
              </div>
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
            <button
              className={`w-[100%] py-2 h-[100%] rounded-[100px] ${
                color
                  ? "text-[#F9FAFB] bg-[#0166FF]"
                  : "text-[#F9FAFB] bg-[#16A34A]"
              }`}
            >
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