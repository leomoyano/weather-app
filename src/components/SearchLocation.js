import React, { useEffect, useState } from 'react'
import { IoMdSearch } from 'react-icons/io';

const SearchLocation = () => {
    const [animate, setAnimate] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [location, setLocation] = useState('Tucuman');
    const [errorMsg, setErrorMsg] = useState('');

    const handleInput = (e) => {
        setInputValue(e.target.value)
      }

    const handleSubmit = (e) => {
        if(inputValue) {
          setLocation(inputValue);
        }
        const input = document.querySelector('input');
        if(input.value === '') {
          setAnimate(true)
          setTimeout(() => {
            setAnimate(false)
          }, 500);
        }
        input.value = '';
        e.preventDefault();
      }

      useEffect(() => {
        const timer = setTimeout(() => {
          setErrorMsg('')
        }, 2000);
        return () => clearTimeout(timer)
      }, [errorMsg])

  return (
    <form 
      className={`${animate ? 'animate-shake' : 'animate-none'} h-16 bg-black/30 w-full max-w-[450px] rounded-full back-blur-[32px] mb-7`}>
        <div className="h-full relative flex items-center justify-between p-2">
          <input onChange={(e) => handleInput(e)} className="flex-1 bg-transparent outline-none text-white text-[15px] font-light pl-5 h-full" type="text" placeholder='Busqueda de ciudad' />
          <button onClick={(e) => handleSubmit(e)}className="bg-[#E6C3A5] hover:bg-[#c9ab90] w-20 h-12 rounded-full flex justify-center items-center transition">
            <IoMdSearch className="text-2xl"/>
          </button>
        </div>
      </form>
  )
}

export default SearchLocation