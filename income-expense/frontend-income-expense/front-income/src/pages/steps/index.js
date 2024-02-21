import { Balance } from "@/components/Balance";
import { Currency } from "@/components/Currency";
import { Finish } from "@/components/Finish";
import { useState } from "react";
import { useRouter } from "next/navigation";

const stepper = [Currency, Balance, Finish];

export default function Home() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const Step = stepper[step];

  const changePage = () => {
    if (step === 2) return router.push("/dashboard");
    setStep(step + 1);
  };

  // if (step < stepper.length) {
  //   <Step />;
  // }

  return (
    <div>
      <div className="flex flex-col items-center ">
        <Step />
        <button
          onClick={changePage}
          className="w-[384px] h-12 rounded-2xl bg-[#0166FF] mt-[300px] top-[400px] bg-p-2 mx-auto text-white text-xl font-normal"
        >
          {step === 2 ? "Go To Dashboard" : "Confirm"}
        </button>
      </div>
    </div>
  );
}
