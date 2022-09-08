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
    <div className="bg-black/20 min-h-[100px] mt-2 text-white backdrop-blur-[32px] rounded-[20px] py-8 px-6">
      {!data ? (
        <h1>No hay nada</h1>
      ) : (
        <div>
          {/* card top */}
          <div className="flex justify-around items-center gap-x-5">
            {/* icon */}
            <div className="text-[80px]">{iconWeather(data.weather[0].main)}</div>
            <div>
              {/* country name */}
              <div className="text-2xl font-semibold">
                {data?.location}, {data?.country}
              </div>
              {/* date */}
              <div>
                {date.getUTCDate()}/{date.getUTCMonth()}/{date.getUTCFullYear()}
              </div>
            </div>
            <div>
              <button name={data?.location} onClick={() => handleRemove(data?.id)} className="bg-black/20 rounded-[40px]">
                <FaRegTimesCircle className="text-xl" />
              </button>
            </div>
          </div>
          {/* card body */}
          <div className="my-7">
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