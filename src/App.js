import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch
} from 'react-icons/io';

import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind
} from 'react-icons/bs'

import { TbTemperatureCelsius } from 'react-icons/tb'
import { ImSpinner8 } from 'react-icons/im'
import { parse } from 'postcss';

const API_KEY = '74f6a0a9b04a89362c947cfc1ed58015'

const App = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('Tucuman');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}&lang=es`;
    // const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}&lang=es`;
    
    axios.get(url).then(res => {
      setData(res.data);
    })
  }, [location])
  
  console.log('DATOS: ', data);

  if(!data) {
    return <div>
      <div>
        <ImSpinner8 className='text-5x1 animate-spin'/>
      </div>
    </div>
  }

  let icon;

  switch (data.weather[0].main) {
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

  //objeto date
  const date = new Date()


  return (
    <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0">
    {/* //FORM */}
      <form className="h-16 bg-black/30 w-full max-w-[450px] rounded-full back-blur-[32px] mb-7">
        <div className="h-full relative flex items-center justify-between p-2">
          <input className="flex-1 bg-transparent outline-none text-white text-[15px] font-light pl-5 h-full" type="text" placeholder='Busqueda de ciudad' />
          <button className="bg-[#E6C3A5] hover:bg-[#c9ab90] w-20 h-12 rounded-full flex justify-center items-center transition">
            <IoMdSearch className="text-2xl"/>
          </button>
        </div>
      </form>
      {/* CARD */}
      <div className="w-full bg-black/20 max-w-[450px] min-h-[584px] text-white backdrop-blur-[32px] rounded-[20px] py-12 px-6">
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
      </div>
    </div>
  )
};

export default App;