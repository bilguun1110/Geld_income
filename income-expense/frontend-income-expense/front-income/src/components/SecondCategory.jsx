import { GoHomeFill } from "react-icons/go";
import {
  PiIdentificationBadgeFill,
  PiLadderBold,
  PiIntersectSquareFill,
  PiImageSquareFill,
  PiMicrophoneFill,
  PiMicrosoftExcelLogoFill,
  PiLeafFill,
  PiRoadHorizonFill,
  PiHourglassSimpleHighFill,
  PiAnchorSimple,
  PiBezierCurveFill,
  PiExcludeFill,
  PiBaseballFill,
  PiExamFill,
  PiWatchFill,
  PiOrangeSliceFill,
  PiPeaceFill,
  PiToiletPaperFill,
  PiPencilLineFill,
  PiGlobeSimpleFill,
  PiNotepadFill,
} from "react-icons/pi";
import { HiIdentification } from "react-icons/hi2";
import { BiSolidZoomIn } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { TbSquareRoundedNumber5Filled, TbCircle7Filled } from "react-icons/tb";
import { MdVignette, MdHelp } from "react-icons/md";
import Image from "next/image";

export const SecondCategory = ({ isOpenSecond, onCloseSecondCate }) => {
  const icons = [
    <GoHomeFill size={24} />,
    <GoHomeFill size={24} />,
    <PiIdentificationBadgeFill size={24} />,
    <HiIdentification size={24} />,
    <PiLadderBold size={24} />,
    <PiIntersectSquareFill size={24} />,
    <PiImageSquareFill size={24} />,
    <BiSolidZoomIn size={24} />,
    <PiMicrophoneFill size={24} />,
    <PiMicrosoftExcelLogoFill size={24} />,
    <PiNotepadFill size={24} />,
    <IoMenu size={24} />,
    <PiLeafFill size={24} />,
    <TbSquareRoundedNumber5Filled size={24} />,
    <TbCircle7Filled size={24} />,
    <PiRoadHorizonFill size={24} />,
    <PiHourglassSimpleHighFill size={24} />,
    <PiAnchorSimple size={24} />,
    <PiBezierCurveFill size={24} />,
    <PiExcludeFill size={24} />,
    <MdVignette size={24} />,
    <MdHelp size={24} />,
    <PiExamFill size={24} />,
    <PiWatchFill size={24} />,
    <PiOrangeSliceFill size={24} />,
    <PiBaseballFill size={24} />,
    <PiPeaceFill size={24} />,
    <PiToiletPaperFill size={24} />,
    <PiPencilLineFill size={24} />,
    <PiGlobeSimpleFill size={24} />,
  ];

  if (!isOpenSecond) return null;
  return (
    <div className=" bg-white w-[312px] p-6 h-[336px]  rounded-lg ">
      <div className="grid grid-cols-6 gap-4 ">
        {icons.map((el, index) => {
          return (
            <div className="w-8 h-8" onClick={onCloseSecondCate} key={index}>
              {el}
            </div>
          );
        })}
      </div>
      <hr className="mt-3" />
      <div className="flex pt-5 justify-between">
        <Image src="/blue.png" width={24} height={24} className="w-6 h-6" />
        <Image src="/blue2.png" width={24} height={24} className="w-6 h-6" />
        <Image src="/green.png" width={24} height={24} className="w-6 h-6" />
        <Image src="/yellow.png" width={24} height={24} className="w-6 h-6" />
        <Image src="/orange.png" width={24} height={24} className="w-6 h-6" />
        <Image src="/pruple.png" width={24} height={24} className="w-6 h-6" />
        <Image src="/red.png" width={24} height={24} className="w-6 h-6" />
      </div>
    </div>
  );
};
