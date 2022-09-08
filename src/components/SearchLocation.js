import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { IoMdSearch} from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { config } from '../constants/apiKeys';
import { getWeather, startLoadingWeather } from '../redux/slices/weather';

const SearchLocation = () => {
    const [animate, setAnimate] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const handleInput = (e) => {
        setInputValue(e.target.value)
      }

    const handleSubmit = (e) => {
      const input = document.querySelector('input');
      const isEmpty = !input.value.trim();

      if(isEmpty || input.value === '') {
        setAnimate(true)
        setTimeout(() => {
          setAnimate(false)
        }, 500);
      }else {
          dispatch(startLoadingWeather());
          dispatch(getWeather(inputValue));
        }
        input.value = '';
        e.preventDefault();
      }


      useEffect(() => {
        dispatch(startLoadingWeather());
        const urlIpApi = config.IP_API_ENDPOINT
        axios.get(urlIpApi).then(res => {
          dispatch(getWeather(res.data.city));
        }).catch(err => {
          console.log(err);
        })
      }, []);
      

  return (
    <form 
      className={`${animate ? 'animate-shake' : 'animate-none'} h-16 bg-black/30 w-full max-w-[450px] rounded-full back-blur-[32px] mb-7`}>
        <div className="h-full relative z-40 flex items-center justify-between p-2">
          <input onChange={(e) => handleInput(e)} className="flex-1 bg-transparent outline-none text-white text-[15px] font-light pl-5 h-full" type="text" placeholder='Busqueda de ciudad' />
          <button onClick={(e) => handleSubmit(e)}className="bg-[#E6C3A5] hover:bg-[#c9ab90] w-20 h-12 rounded-full flex justify-center items-center transition">
            <IoMdSearch className="text-2xl"/>
          </button>
        </div>
      </form>
  )
}

export default SearchLocation;