import React from "react";
import { GoHomeFill } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";

export const AddCateModal = ({ onCloseTwo, isOpenTwo }) => {
  if (!isOpenTwo) return null;
  return (
    <div className="w-[494px] h-[236px] bg-white rounded-xl">
      <div className="flex justify-between  px-6 py-5">
        <p className=" flex items-center  font-semibold text-xl ">Add Record</p>
        {/* <Image
          onClick={onCloseTwo}
          src="/X.png"
          width={24}
          height={24}
          className="w-6 h-6 cursor-pointer"
        /> */}
      </div>
      <hr />
      <div className="flex">
        <div className="w-[84] h-12 flex  rounded-lg gap-2 p-4 bg-[#F9FAFB] border-[1px]">
          <GoHomeFill width={18} height={17} />
          <IoMdArrowDropdown width={10} height={10} onClick={onCloseTwo} />
        </div>
        <div className="w-[350px] h-12 rounded-lg bg-[#F9FAFB] border-[1px] p-4">
          <textarea name="sa" id="" cols="30" rows="10">
            <IoMdArrowDropdown width={10} height={10} />
          </textarea>
        </div>
      </div>
      <button className="w-[446px] h-[40px] bg-[#16A34A] rounded-[20px]"></button>
    </div>
  );
};
