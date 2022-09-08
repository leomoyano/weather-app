import React, { useEffect } from "react";
import { ImSpinner8 } from "react-icons/im";
import { TbTemperatureCelsius } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { addLocation, errorMessage } from "../redux/slices/selectedLocation";
import { iconWeather } from "../utils";
import Forecast from "./Forecast";

const Card = (loading) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // useEffect(() => {
  //   // dispatch(startLoadingWeather());
  // }, []);

  useEffect(() => {
    console.log('Loading: ',  state);
  }, [])

  const handleAddLocation = (state) => {
    const locationList = state.selectLocation.locationList;
    const { id, location, country, weather, main } = state.weatherLocation;

    if(locationList.length > 5) {
      console.error('Superó el limite')
      return 
    };

   for( let location of state?.selectLocation.locationList) {
      if(location.id === id) {
       console.error('ESTA REPETIDO');
       dispatch(errorMessage('Esta repetido'))
       return
      }
   }
    dispatch(addLocation({id, location, country, weather, main }))
    console.log('Loading: ',  state);
  }

  //objeto date
  const date = new Date();

  return (
    <div className="w-full bg-black/20 max-w-[450px] min-h-[524px] text-white backdrop-blur-[32px] rounded-[20px] py-12 px-6">
      {state?.weatherLocation.isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <ImSpinner8 className="text-white text-5xl animate-spin" />
        </div>
      ) : (
        <div>
          {/* card top */}
          <div className="flex items-center gap-x-5">
            {/* icon */}
            <div className="text-[80px]">{iconWeather(state.weatherLocation.weather[0]?.main)}</div>
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
              <div>
                <button className="bg-green-600/80 rounded-lg p-2 my-1" onClick={() => handleAddLocation(state)}>
                  Agregar +
                </button>
              </div>
            </div>
          </div>
          {/* card body */}
          <div className="my-7">
            <div className="flex justify-center items-center">
              {/* temperatura */}
              <div className="text-[130px] leading-none font-light">
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
