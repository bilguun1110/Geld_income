import Image from "next/image";
import { useState } from "react";

export const Balance = (props) => {
  const { button } = props;

  const text = "Confirm";

  const [email, setEmail] = useState("");

  const handleSelect = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="w-[100wh]  flex justify-center gap-8 ">
      <div className="w-80 h-67 mt-10  flex flex-col  items-center  ">
        <div>
          <Image
            src="/logo.png"
            width={107}
            height={40}
            className="w-28 h-10"
          />
        </div>
        <div className=" mt-12">
          <ul className="steps w-[350px] ">
            <li className="step  step-primary ">Currency</li>
            <li className="step step-primary ">Balance</li>
            <li className="step">Finish</li>
          </ul>
        </div>
      </div>
      <div className="absolute mt-60 w-96 flex flex-col items-center">
        <div className="bg-[#0166FF] w-12 h-12 rounded-[50%] flex items-center justify-center  ">
          <Image src="/zoos.png" width={30} height={22} className="w-7 h-5" />
        </div>
        <h3 className="font-semibold text-2xl mt-4">
          Set up your cash Balance
        </h3>
        <input
          placeholder="Email"
          onChange={handleSelect}
          value={email}
          className="w-96 h-12 mt-6 bg-[#F3F4F6] pl-2 rounded-md"
        ></input>
        <div className="text-xs font-normal text-[#475569] mt-3">
          How much cash do you have in your wallet?
        </div>
      </div>
    </div>
  );
};
