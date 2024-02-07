import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Currency = () => {
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
      <div className="absolute mt-80 w-96 flex flex-col items-center">
        <div className="bg-[#0166FF] w-12 h-12 rounded-[50%] flex items-center justify-center  ">
          <Image src="/Money.png" width={32} height={32} className="w-8 h-8" />
        </div>
        <h3 className="font-semibold text-2xl mt-4">Select base currency</h3>
        <Select>
          <SelectTrigger className="w-96 h-16 font-semibold-600 text-base text-[#1F2937] bg-[#F3F4F6] rounded-3 mt-6">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <div className="text-xs font-normal text-[#475569] mt-3">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one
        </div>
        <button className="w-[100%] h-12 rounded-2xl bg-[#0166FF] mt-8 bg-p-2 mx-auto text-white text-base font-normal">
          Confirm
        </button>
      </div>
    </div>
  );
};
