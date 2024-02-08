import { Balance } from "@/components/Balance";
import { Currency } from "@/components/Currency";
import { Finish } from "@/components/Finish";
import { useState } from "react";
import { button } from "@/components/Currency";
const stepper = [Currency, Balance, Finish];

export default function Home() {
  const [step, setStep] = useState(0);

  const Step = stepper[step];

  // const changePage = () => {
  //   setStep(step + 1);
  // };
  // if (step < stepper.length) {
  //   <Step button={changePage} />;
  // }

  return (
    <div>
      <div>
        <Step />
      </div>
    </div>
  );
}
