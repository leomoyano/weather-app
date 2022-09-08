import React from 'react'
import { useSelector } from 'react-redux';
import ForecastDay from './ForecastDay';

const Forecast = () => {
  const { weatherLocation } = useSelector((state) => state)

  const minTemp1 = weatherLocation?.minTemp1;
  const minTemp2 = weatherLocation?.minTemp2;
  const minTemp3 = weatherLocation?.minTemp3;
  const minTemp4 = weatherLocation?.minTemp4;
  const minTemp5 = weatherLocation?.minTemp5;
  const maxTemp1 = weatherLocation?.maxTemp1;
  const maxTemp2 = weatherLocation?.maxTemp2;
  const maxTemp3 = weatherLocation?.maxTemp3;
  const maxTemp4 = weatherLocation?.maxTemp4;
  const maxTemp5 = weatherLocation?.maxTemp5;

  const week = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  const today = new Date();
  const day = today.getDay();
  const firstDay = week[day];
  const secondDay = week[(day + 1) % 7];
  const thirdDay = week[(day + 2) % 7];
  const fourthDay = week[(day + 3) % 7];
  const fifthDay = week[(day + 4) % 7];

  return (
    <div className="max-w-[378px] mx-auto rounded-[20px] p-2 bg-black/30 flex flex-col gap-y-6">
      <div className="flex flex-col justify-between">
        <ForecastDay day={firstDay} minWeather={minTemp1} maxWeather={maxTemp1} />
        <hr />
        <ForecastDay day={secondDay} minWeather={minTemp2} maxWeather={maxTemp2} />
        <hr />
        <ForecastDay day={thirdDay} minWeather={minTemp3} maxWeather={maxTemp3} />
        <hr />
        <ForecastDay day={fourthDay} minWeather={minTemp4} maxWeather={maxTemp4} />
        <hr />
        <ForecastDay day={fifthDay} minWeather={minTemp5} maxWeather={maxTemp5} />
      </div>
    </div>
  )
}

export default Forecast