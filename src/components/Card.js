import React from "react";
import { ImSpinner8 } from "react-icons/im";
import { TbTemperatureCelsius } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { addLocation, errorMessage } from "../redux/slices/selectedLocation";
import { iconWeather } from "../utils";
import Forecast from "./Forecast";

const Card = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleAddLocation = (state) => {
    const locationList = state.selectLocation.locationList;
    const { id, location, country, weather, main } = state.weatherLocation;

    if(locationList.length >= 5) {
      dispatch(errorMessage('Solo puedes elegir cinco ciudades'))
      return 
    };

   for( let location of state?.selectLocation.locationList) {
      if(location.id === id) {
       dispatch(errorMessage('La ciudad ya fue elegida'))
       return
      }
   }
    dispatch(addLocation({id, location, country, weather, main }))
  }

  const date = new Date();

  return (
    <div className="w-full bg-black/20 max-w-[450px] min-h-[524px] text-white backdrop-blur-[32px] rounded-[20px] py-12 px-6">
      {state?.weatherLocation.isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <ImSpinner8 className="text-white text-5xl animate-spin" />
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-x-5">
            <div className="text-[80px]">{iconWeather(state.weatherLocation.weather[0]?.main)}</div>
            <div>
              <div className="text-2xl font-semibold">
                {state.weatherLocation.location},{" "}
                {state.weatherLocation.country}
              </div>
              <div className="italic">
                {date.getUTCDate()}/{date.getUTCMonth() + 1}/{date.getUTCFullYear()}
              </div>
              <div>
                <button className="bg-green-600/80 rounded-lg p-2 my-1" onClick={() => handleAddLocation(state)}>
                  Agregar +
                </button>
              </div>
            </div>
          </div>
          <div className="my-7">
            <div className="flex justify-center items-center">
              <div className="text-[130px] leading-none font-light">
                {parseInt(state.weatherLocation.main.temp)}
              </div>
              <div className="text-[35px]">
                <TbTemperatureCelsius />
              </div>
            </div>
            <div className="capitalize text-center">
              {state.weatherLocation.weather[0]?.description}
            </div>
          </div>
          <Forecast />
        </div>
      )}
    </div>
  );
};

export default Card;
