import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { StepperButton } from "./StepperButton";
import React from "react";
const options = [
  { value: "mnt", option: "MNT-Mongolian Tugrik" },
  { value: "usd", option: "USD-American Dollar" },
  { value: "won", option: "WON-Korean Won" },
  { value: "yn", option: "YN-Chinese Yuan" },
  { value: "jpw", option: "JPW-Japanese Yen" },
  { value: "euro", option: "EUR-Europian Euro" },
];

export const Currency = () => {
  const [currencies, setCurrencies] = useState("");

  const handleSelect = (event) => {
    setCurrencies(event.target.value);
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
            <li className="step ">Balance</li>
            <li className="step">Finish</li>
          </ul>
        </div>
      </div>
      <div className="absolute mt-60 w-96 flex flex-col items-center">
        <div className="bg-[#0166FF] w-12 h-12 rounded-[50%] flex items-center justify-center  ">
          <Image src="/Money.png" width={32} height={32} className="w-8 h-8" />
        </div>
        <h3 className="font-semibold text-2xl mt-4">Select base currency</h3>
        <div className="mt-6">
          <select
            name=""
            id=""
            onChange={handleSelect}
            value={currencies}
            className="w-full h-16 border-2 pr-3 bg-slate-100 rounded-lg text-base font-semibold p-2 "
          >
            {options.map(({ option, value }, index) => (
              <option value={value} key={index}>
                {option}
              </option>
            ))}
          </select>

          <div className="text-xs font-normal text-[#475569] mt-3">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one
          </div>
        </div>
      </div>
    </div>
  );
};
