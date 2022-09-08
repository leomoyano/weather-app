import React from "react";
import { FaAngleRight } from "react-icons/fa";

const ForecastDay = ({ day, minWeather, maxWeather }) => {
  return (
    <div className="flex py-2 items-center gap-x-2">
      <div className="text-[20px]">
        <FaAngleRight />
      </div>
      <div className="flex justify-between w-full">
        <span>{day}</span>
        <span className="ml-2 font-light">
          Min {parseInt(minWeather)}° / Max {parseInt(maxWeather)}°
        </span>
      </div>
    </div>
  );
};

export default ForecastDay;
