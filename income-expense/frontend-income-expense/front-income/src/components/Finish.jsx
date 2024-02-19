import Image from "next/image";
import { useRouter } from "next/navigation";

export const Finish = () => {
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
            <li className="step step-primary">Finish</li>
          </ul>
        </div>
      </div>
      <div className="absolute mt-80 w-96 flex flex-col items-center">
        <div className="bg-[#0166FF] w-12 h-12 rounded-[50%] flex items-center justify-center  ">
          <Image
            src="/correct.png"
            width={30}
            height={22}
            className="w-7 h-5"
          />
        </div>
        <h3 className="font-semibold text-2xl mt-4">Good Job!</h3>

        <div className="text-base font-normal text-[#475569] mt-3">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </div>
        {/* <button className="w-[100%] h-12 rounded-2xl bg-[#0166FF] mt-8 bg-p-2 mx-auto text-white text-xl font-normal">
          Go to Dashboard
        </button> */}
      </div>
    </div>
  );
};
