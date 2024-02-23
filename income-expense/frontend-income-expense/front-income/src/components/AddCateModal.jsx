import React from "react";
import { GoHomeFill } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";

export const AddCateModal = ({
  onCloseTwo,
  isOpenTwo,
  cateOpen,
  isOpenAddCate,
  onCloseAddCate,
}) => {
  if (!isOpenAddCate) return null;
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
      className="flex items-center justify-center "
    >
      <div className="w-[494px] h-[236px] rounded-lg bg-white ">
        <div className="flex h-[68px] justify-between  px-6 py-5 bg-white rounded-lg">
          <p className=" flex items-center  font-semibold text-xl ">
            Add Category
          </p>

          <CiCircleRemove
            onClick={onCloseAddCate}
            width={24}
            height={24}
            style={{ cursor: "pointer" }}
            className="w-5 h-5"
          />
        </div>
        <hr />

        <div className="  p-6 flex flex-col gap-5">
          <div className="flex gap-2 w-[100%]">
            <div className="w-[84px] ] h-[48px] flex   rounded-lg gap-3 p-4 bg-[#F9FAFB] border-[1px]">
              <GoHomeFill
                width={18}
                height={17}
                className="w-[18px] h-[17px]"
              />
              <IoMdArrowDropdown width={10} height={10} />
            </div>
            <div className="w-[350px] h-[48px]  rounded-lg bg-[#F9FAFB] border-[1px] p-3 flex items-center gap-8 ">
              <input type="text" placeholder="Name" className="w-[80%] h-6" />
              <IoMdArrowDropdown width={10} height={10} />
            </div>
          </div>
          <button className="w-[446px] h-[40px] bg-[#16A34A] rounded-[20px]"></button>
        </div>
      </div>
    </div>
  );
};
