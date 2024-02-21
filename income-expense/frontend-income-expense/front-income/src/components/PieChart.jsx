import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { PieData } from "./PieData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  datasets: [
    {
      label: [],
      data: [12, 19, 3, 5, 2],
      backgroundColor: ["#F2901C", "#16BDCA", "#FDBA8C", "#E74694", "#1C64F2"],
    },
  ],
};
export const DoughnutChart = () => {
  return (
    <div className="bg-[#fff] w-[544px] h-[284px] p-3 rounded-2xl">
      <div className="flex justify-between   px-2 py-2 border-b-[1px] w-[100%]">
        <h3 className="font-semibold text-base">Income-Expense</h3>
        <p className="font-semibold text-base">Jun 1 - Nov 30</p>
      </div>
      <hr />
      <div className="flex">
        <div className="w-[544px] h-[250px]">
          <Doughnut className="py-4 " data={data} />
        </div>
        <div className="w-full flex flex-col items-center justify-between py-2">
          <PieData
            color={"#F2901C"}
            desc={"Bills"}
            ammount={"5’000’000₮"}
            percent={"15.50%"}
          />
          <PieData
            color={"#16BDCA"}
            desc={"Food"}
            ammount={"5’000’000₮"}
            percent={"15.50%"}
          />
          <PieData
            color={"#FDBA8C"}
            desc={"Shopping"}
            ammount={"5’000’000₮"}
            percent={"15.50%"}
          />
          <PieData
            color={"#E74694"}
            desc={"Insurance"}
            ammount={"5’000’000₮"}
            percent={"15.50%"}
          />
          <PieData
            color={"#1C64F2"}
            desc={"Clothing"}
            ammount={"5’000’000₮"}
            percent={"15.50%"}
          />
        </div>
      </div>
    </div>
  );
};
