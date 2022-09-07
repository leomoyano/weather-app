import React, { useEffect, useState } from "react";
import { BsCloudDrizzleFill, BsCloudHaze2Fill, BsEye, BsThermometer, BsWater, BsWind } from "react-icons/bs";
import { ImSpinner8 } from "react-icons/im";
import { IoMdCloudy, IoMdRainy, IoMdSnow, IoMdSunny, IoMdThunderstorm } from "react-icons/io";
import { TbTemperatureCelsius } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../redux/slices/weather";
import Forecast from "./Forecast";

const Card = (loading) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // useEffect(() => {
  //   // dispatch(startLoadingWeather());
  // }, []);

  let icon;

  if(state.weatherLocation.weather[0]?.main) {
    switch (state.weatherLocation.weather[0].main) {
      case 'Clouds':
        icon = <IoMdCloudy />
        break;
      case 'Haze':
        icon = <BsCloudHaze2Fill />
        break;
      case 'Rain':
        icon = <IoMdRainy />
        break;
      case 'Drizzle':
        icon = <BsCloudDrizzleFill />
        break;
      case 'Clear':
        icon = <IoMdSunny />
        break;
      case 'Snow':
        icon = <IoMdSnow />
        break;
      case 'Thunderstorm':
        icon = <IoMdThunderstorm />
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    console.log('Loading: ',  state?.weatherLocation.isLoading);
  }, [state?.weatherLocation.isLoading])

  //objeto date
  const date = new Date();

  return (
    <div className="w-full bg-black/20 max-w-[450px] min-h-[584px] text-white backdrop-blur-[32px] rounded-[20px] py-12 px-6">
      {state?.weatherLocation.isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <ImSpinner8 className="text-white text-5xl animate-spin" />
        </div>
      ) : (
        <div>
          {/* card top */}
          <div className="flex items-center gap-x-5">
            {/* icon */}
            <div className="text-[80px]">{icon}</div>
            <div>
              {/* country name */}
              <div className="text-2xl font-semibold">
                {state.weatherLocation.location},{" "}
                {state.weatherLocation.country}
              </div>
              {/* date */}
              <div>
                {date.getUTCDate()}/{date.getUTCMonth()}/{date.getUTCFullYear()}
              </div>
            </div>
          </div>
          {/* card body */}
          <div className="my-20">
            <div className="flex justify-center items-center">
              {/* temperatura */}
              <div className="text-[144px] leading-none font-light">
                {parseInt(state.weatherLocation.main.temp)}
              </div>
              {/* Icono Celcius */}
              <div className="text-[35px]">
                <TbTemperatureCelsius />
              </div>
            </div>
            {/* descripcion clima */}
            <div className="capitalize text-center">
              {state.weatherLocation.weather[0]?.description}
            </div>
          </div>
          {/* card bottom */}

          <Forecast />
        </div>
      )}
    </div>
  );
};

export default Card;
