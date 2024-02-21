import Image from "next/image";
import { TbPointFilled } from "react-icons/tb";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { DoughnutChart } from "./PieChart";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

export const Dashboard = () => {
  const records = [
    {
      logo: "/home.png",
      lending: "Lending & Renting",
      hours: "3 hours ago",
      currency: " - 1,000₮",
    },
    {
      logo: "/home.png",
      lending: "Lending & Renting",
      hours: "3 hours ago",
      currency: " - 1,000₮",
    },
    {
      logo: "/home.png",
      lending: "Lending & Renting",
      hours: "3 hours ago",
      currency: " - 1,000₮",
    },
    {
      logo: "/home.png",
      lending: "Lending & Renting",
      hours: "3 hours ago",
      currency: " - 1,000₮",
    },
    {
      logo: "/home.png",
      lending: "Lending & Renting",
      hours: "3 hours ago",
      currency: " - 1,000₮",
    },
  ];

  const data = {
    labels: ["Jul", "Jul ", " Jul", "Jul", "Jul", "Jul"],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#84CC16",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 0,
        barThickness: 15,
        data: [3200000, 3200000, 3200000, 3200000, 3200000, 3200000],
      },
      {
        data: [2200000, 2200000, 2200000, 2200000, 2200000, 2200000],
        backgroundColor: ["#F97316"],
        barThickness: 15,
        label: "Expense",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 10,
        bottom: 5,
      },
      margin: {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        border: { dash: [6, 6], display: true },
        grid: {
          display: true, // Display grid lines for the y-axis
        },
        ticks: {
          padding: 15,
        },
      },
      x: {
        beginAtZero: true,
        border: { display: true },
        grid: {
          display: false, // Display grid lines for the y-axis
        },
        ticks: {
          padding: 7,
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 20,
        borderWidth: 0.1,
      },
    },
  };

  const data2 = {
    labels: ["processed", "pending"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["rgb(0, 197, 0)", "rgb(204, 223, 243)"],
        borderWidth: 2,
        radius: "40%",
      },
    ],
  };

  return (
    <div className="bg-[#F3F4F6] w-[100wh]  flex flex-col  px-[120px] pt-8 pb-[50px] ">
      <div className="flex gap-6 ">
        <div className="">
          <Image
            src="/Large.png"
            width={384}
            height={216}
            className="w-[384px] h-[216px] absolute "
          />
          <div className="relative flex mt-8 ml-8 items-center gap-2">
            <Image
              src="/whiteLogo.png"
              width={21}
              height={21}
              className="w-[21px] h-[21px] "
            />
            <Image
              src="/whiteGeld.png "
              width={42}
              height={15}
              className="w-[42px] h-[15px]"
            />
          </div>
          <div className="relative ml-8 mt-[66px]">
            <p className="text-base font-normal text-gray-300">Cash</p>
            <p className="text-2xl font-semibold text-white">10,000,00</p>
          </div>
        </div>

        <div className="w-[384px] h-[216px] bg-white rounded-xl ml-[238px] ">
          <div className="flex w-[100%] h-14 px-4 py-6 gap-1 items-center border-solid border-b-2">
            <TbPointFilled
              width={8}
              height={8}
              className="w-4 h-4 text-[#84CC16]"
            />
            <p className="text-base font-semibold">Your Income</p>
          </div>
          <div className="p-6 flex flex-col gap-4">
            <div>
              <p className="text-4xl font-semibold">1,200,000 ₮</p>
              <p className="text-xl font-normal text-[#64748B]">
                Your Income Amount
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/upArrow.png"
                width={19}
                height={19}
                className="w-[19px] h-[19px]"
              />
              <p className="text-xl font-normal">32% from last month</p>
            </div>
          </div>
        </div>
        <div className="w-[384px] h-[216px] bg-white rounded-xl ">
          <div className="flex w-[100%] h-14 px-4 py-6 gap-1 items-center border-solid border-b-2">
            <TbPointFilled
              width={8}
              height={8}
              className="w-4 h-4 text-[#0166FF]"
            />
            <p className="text-base font-semibold">Total Expenses</p>
          </div>
          <div className="p-6 flex flex-col gap-4">
            <div>
              <p className="text-4xl font-semibold">-1,200,000 ₮</p>
              <p className="text-xl font-normal text-[#64748B]">
                Your Income Amount
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/downArrow.png"
                width={19}
                height={19}
                className="w-[19px] h-[19px]"
              />
              <p className="text-xl font-normal">32% from last month</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1200px] flex gap-6">
        <div className="w-[588px]  rounded-xl bg-white mt-6  ">
          <div className="w-[100%] h-[56px] border-solid font-semibold text-base border-b-2 px-6 py-4">
            Income - Expense
          </div>
          <Bar
            className="w-[100%] h-[226px] px-3 py-4 "
            data={data}
            options={options}
          />
        </div>
        <div className="w-[600px] h-[360px] rounded-xl mt-[25px] bg-white">
          <DoughnutChart />
        </div>
      </div>

      <div className="w-[100%] bg-white rounded-xl mt-6">
        <div className="w-[100%] h-[56px] px-6 py-4 font-semibold text-base border-b-2 ">
          Last Records
        </div>
        <div className="w-[100%] h-[400px] px-6 ">
          {records.map(({ logo, lending, hours, currency }, idx) => (
            <div
              key={idx}
              className="flex justify-between border-b-2 h-20 py-5"
            >
              <div className="flex gap-4">
                <Image
                  src={logo}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <p className="font-normal text-base">{lending}</p>
                  <p className="font-normal text-xs">{hours}</p>
                </div>
              </div>

              <div className="text-base font-semibold text-[#84CC16]">
                {currency}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
