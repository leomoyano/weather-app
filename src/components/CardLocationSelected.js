import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import { TbTemperatureCelsius } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { removeLocation } from '../redux/slices/selectedLocation'
import { iconWeather } from '../utils'

const CardLocationSelected = ({data}) => {
const dispatch = useDispatch();

  const date = new Date();

  const handleRemove = (e) => {
    dispatch(removeLocation(e))
  }

  return (
    <div className="bg-black/20 min-h-[100px] min-w-[283px] lg:min-w-[320px] mt-4 text-white backdrop-blur-[32px] rounded-[20px] mx-1 py-4 px-1">
      {data.length === 0 ? (
        <div className="flex w-full justify-center items-center min-h-[170px]">
          <h1 className="text-[20px] font-normal">Agregue una ciudad</h1>
        </div>
      ) : (
        <div>
          <div className="flex w-full justify-around items-center gap-x-4 after:animate-spin">
            <div className="text-[55px]">{iconWeather(data.weather[0].main)}</div>
            <div>
              <div className="text-2md text-2md max-w-[170px] font-semibold text-ellipsis overflow-hidden">
                {data?.location}, {data?.country}
              </div>
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
          <div className="my-3">
            <div className="flex justify-center items-center">
              <div className="text-[100px] leading-none font-light">
                {parseInt(data?.main.temp)}
              </div>
              <div className="text-[35px]">
                <TbTemperatureCelsius />
              </div>
            </div>
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