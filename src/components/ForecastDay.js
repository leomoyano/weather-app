import React from "react";
import { FaAngleRight } from "react-icons/fa";

const ForecastDay = ({ day, minWeather, maxWeather }) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="text-[20px]">
        <FaAngleRight />
      </div>
      <div className="justify-around w-full">
        <span>{day}</span>
        <span className="ml-2">
          Min {minWeather}° | Max {maxWeather}°
        </span>
      </div>
    </div>
  );
};

export default ForecastDay;
