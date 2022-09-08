import React from 'react'
import { BsEye, BsThermometer, BsWater, BsWind } from 'react-icons/bs'
import { FaChevronLeft, FaChevronRight, FaRegTimesCircle } from 'react-icons/fa'
import { ImSpinner8 } from 'react-icons/im'
import { TbTemperatureCelsius } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { removeLocation } from '../redux/slices/selectedLocation'
import { iconWeather } from '../utils'

const CardLocationSelected = ({data}) => {
const dispatch = useDispatch();

  //objeto date
  const date = new Date();

  const handleRemove = (e) => {
    dispatch(removeLocation(e))
  }

  return (
    <div className="bg-black/20 min-h-[100px] min-w-[283px] lg:min-w-[320px] mt-2 text-white backdrop-blur-[32px] rounded-[20px] mx-1 py-4 px-1">
      {data.length === 0 ? (
        <div className="flex w-full justify-center items-center min-h-[170px]">
          <h1 className="text-[20px] font-normal">Agregue una ciudad</h1>
        </div>
      ) : (
        <div>
          {/* card top */}
          <div className="flex w-full justify-around items-center gap-x-4">
            {/* icon */}
            <div className="text-[55px]">{iconWeather(data.weather[0].main)}</div>
            <div>
              {/* country name */}
              <div className="text-2md font-semibold">
                {data?.location}, {data?.country}
              </div>
              {/* date */}
              <div>
                {date.getUTCDate()}/{date.getUTCMonth() + 1}/{date.getUTCFullYear()}
              </div>
            </div>
            <div>
              <button name={data?.location} onClick={() => handleRemove(data?.id)} className="bg-black/20 rounded-[40px]">
                <FaRegTimesCircle className="text-xl" />
              </button>
            </div>
          </div>
          {/* card body */}
          <div className="my-3">
            <div className="flex justify-center items-center">
              {/* temperatura */}
              <div className="text-[100px] leading-none font-light">
                {parseInt(data?.main.temp)}
              </div>
              {/* Icono Celcius */}
              <div className="text-[35px]">
                <TbTemperatureCelsius />
              </div>
            </div>
            {/* descripcion clima */}
            <div className="capitalize text-center text-[20px]">
              {data?.weather[0].description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardLocationSelected