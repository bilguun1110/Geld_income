import React from "react";

export const AddCateModal = () => {
  return (
    <div className="w-[494px] h-[236px] bg-white rounded-xl">
      <div className="flex justify-between  px-6 py-5">
        <p className=" flex items-center  font-semibold text-xl ">Add Record</p>
        <Image
          onClick={onClose}
          src="/X.png"
          width={24}
          height={24}
          className="w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};
