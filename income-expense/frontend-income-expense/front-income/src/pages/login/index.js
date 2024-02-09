import Image from "next/image";

const Home = () => {
  return (
    <div className="w-[100%] h-[100vh]">
      <div>
        <Image
          src="/logo.png"
          width={100}
          height={500}
          className="w-[100px] h-[50px]"
        />
        <div>Түр хүлээнэ үү</div>
      </div>
    </div>
  );
};

export default Home;

import { PiMoneyFill } from "react-icons/pi";
import { StepperButton } from "./StepperButton";
import { CurrencyStep } from "./CurrencyStep";
import { useState } from "react";
import { useRouter } from "next/navigation";

const options = [
  { value: "mnt", option: "MNT-Mongolian Tugrik" },
  { value: "usd", option: "USD-American Dollar" },
  { value: "won", option: "WON-Korean Won" },
  { value: "yn", option: "YN-Chinese Yuan" },
  { value: "jpw", option: "JPW-Japanese Yen" },
  { value: "euro", option: "EUR-Europian Euro" },
];

export const CurrencySelect = (props) => {
  const { button } = props;

  const { push } = useRouter();

  const jumpToPage = () => {
    push("/signupPage");
  };
  const [currency, setCurrency] = useState("");
  const text = "Confirm";

  const handleSelect = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="flex flex-col  w-full h-full items-center gap-[200px] mt-24">
      <CurrencyStep count={1} />
      <div className="flex flex-col items-center gap-10 w-full ">
        <div className="flex flex-col justify-start w-full h-1/3 items-center ">
          <div className="bg-[#0166FF] w-[60px] h-[60px] rounded-full flex items-center justify-center">
            <PiMoneyFill
              color="white"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
              }}
            />
          </div>
          <p className="text-3xl font-bold">Select base currency</p>
        </div>
        <div className="flex flex-col items-center gap-4 w-full h-1/3 rounded-lg p-4 mb-4">
          <select
            name=""
            id=""
            value={currency}
            onChange={handleSelect}
            className="border-2 bg-slate-100 w-[25%] h-[70px] rounded-lg p-4 text-2xl"
          >
            {options.map(({ option, value }, index) => (
              <option value={value} key={index}>
                {option}
              </option>
            ))}
          </select>
          <p className="w-[25%] text-2xl text-[#475569]">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one
          </p>
        </div>
        <StepperButton onClick={button} text={text} />
      </div>
    </div>
  );
};
