import Image from "next/image";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Category } from "./Category";
import axios from "axios";
import { useRouter } from "next/navigation";

export const Modal = ({ isOpen, onCloseBig, handleCateModal }) => {
  const router = useRouter();
  const [color, setColor] = useState(false);
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [payee, setPayee] = useState("");
  const [note, setNote] = useState("");
  const [recordType, setRecordType] = useState(false);
  const [names, setNames] = useState("");

  const handleShowModal = () => {
    setOpen(!open);
  };

  if (!isOpen) return null;

  const recordHandler = async () => {
    try {
      console.log(amount);
      const result = await axios.post("http://localhost:8000/records", {
        amount: Number(amount),
        date: date,
        time: time,
        payee: payee,
        note: note,
      });

      console.log(result);
      onCloseBig(true);
    } catch (error) {
      console.log(error.message);
    }
  };

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
            onClick={onCloseBig}
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
                value={recordType}
                onChange={(event) => setRecordType(event.target.value)}
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
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                placeholder="₮ 000.00"
                className="bg-[#F3F4F6] text-xl font-normal"
              />
            </div>
            <div>
              <p>Category</p>
              <div className="w-[100%] h-[48px] bg-[#F9FAFB] rounded-lg curser-pointer border-[1px] flex items-center justify-between pr-3">
                <div className="pl-3">{names}</div>
                <div>
                  <IoMdArrowDropdown
                    onClick={handleShowModal}
                    width={15}
                    height={15}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
              <div className="z-20 absolute">
                <Category
                  isOpen={open}
                  onClose={handleShowModal}
                  handleCateModal={handleCateModal}
                ></Category>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-[50%]">
                <p>Date</p>
                <input
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  type="date"
                  className=" w-[100%] h-[48px] p-2 bg-[#F9FAFB] rounded-lg border-[1px] mt-2 "
                />
              </div>
              <div className="w-[50%]">
                <p>Time</p>
                <input
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  type="time"
                  className="w-[100%] h-[48px] p-2 bg-[#F9FAFB] rounded-lg border-[1px] mt-2"
                />
              </div>
            </div>
            <button
              onClick={recordHandler}
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
              <input
                value={payee}
                onChange={(event) => setPayee(event.target.value)}
                type="text"
                placeholder="Write here"
                className="w-[100%] h-[48px] bg-[#F9FAFB] rounded-lg border-[1px] mt-2 p-4"
              />
            </div>
            <div className="">
              <p className="text-base font-normal">Note</p>

              <textarea
                value={note}
                onChange={(event) => setNote(event.target.value)}
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
