import React from 'react'
import { BsEye, BsThermometer, BsWater, BsWind } from 'react-icons/bs'
import { ImSpinner8 } from 'react-icons/im'
import { TbTemperatureCelsius } from 'react-icons/tb'

const CardSelected = ({loading, data, icon, date}) => {
  return (
    <div className="w-full bg-black/20 max-w-[450px] min-h-[584px] text-white backdrop-blur-[32px] rounded-[20px] py-12 px-6">
    {loading ? (
      <div className="w-full h-full flex justify-center items-center"><ImSpinner8 className="text-white text-5xl animate-spin"/></div>
      ) :        
    <div>
      {/* card top */}
      <div className="flex items-center gap-x-5">
        {/* icon */}
        <div className="text-[80px]">{icon}</div>
        <div>
        {/* country name */}
        <div className="text-2xl font-semibold">{data.name}, {data.sys.country}</div>
          {/* date */}
        <div>{date.getUTCDate()}/{date.getUTCMonth()}/{date.getUTCFullYear()}</div>
        </div>
      </div>
      {/* card body */}
      <div className="my-20">
      <div className="flex justify-center items-center">
      {/* temperatura */}
        <div className="text-[144px] leading-none font-light">{parseInt(data.main.temp)}</div>
        {/* Icono Celcius */}
        <div className="text-[35px]"><TbTemperatureCelsius /></div>
      </div>
      {/* descripcion clima */}
      <div className="capitalize text-center">{data.weather[0].description}</div>
      </div>
      {/* card bottom */}
      <div className="max-w-[378px] mx-auto flex flex-col gap-y-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            {/* icono */}
            <div className="text-[20px]"><BsEye /></div>
            <div>Visiblidad <span className="ml-2">{data.visibility / 1000} Km</span></div>
          </div>
          <div className="flex items-center gap-x-2">
            {/* icono */}
            <div className="text-[20px]"><BsThermometer /></div>
            <div className="flex">ST <div className="flex ml-2 items-center">{parseInt(data.main.feels_like)} <TbTemperatureCelsius /></div></div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            {/* icono */}
            <div className="text-[20px]"><BsWater /></div>
            <div>Humedad <span className="ml-2">{data.main.humidity} %</span></div>
          </div>
          <div className="flex items-center gap-x-2">
            {/* icono */}
            <div className="text-[20px]"><BsWind /></div>
            <div className="flex">Viento <div className="flex ml-1 items-center">{data.wind.speed} m/s</div></div>
          </div>
        </div>
      </div>
    </div>
    }
  </div>
  )
}

export default CardSelected