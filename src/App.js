import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ImSpinner8 } from 'react-icons/im'
import Layout from './components/Layout';
import Card from './components/Card';
import { getWeather } from './redux/slices/weather';
import CarouselLocation from './components/CarouselLocation';
import SearchLocation from './components/SearchLocation';
import { config } from './constants/apiKeys';
import { errorMessage } from './redux/slices/selectedLocation';

const API_KEY = '74f6a0a9b04a89362c947cfc1ed58015'

const App = () => {
  const [location, setLocation] = useState('Tucuman');
  const [inputValue, setInputValue] = useState('');
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const dispatch = useDispatch();
  const state = useSelector(state => state)

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    if (inputValue) {
      setLocation(inputValue);
    }
    const input = document.querySelector('input');
    if (input.value === '') {
      setAnimate(true)
      setTimeout(() => {
        setAnimate(false)
      }, 500);
    }
    input.value = '';
    e.preventDefault();
  }

  // useEffect(() => {
  //   setLoading(true);
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}&lang=es`;
  //   const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}&lang=es&exclude=daily,minutely,hourly,alerts`;

  //   // const urlIpApi = config.IP_API_ENDPOINT
  //   // axios.get(urlIpApi).then(res => {
  //   //   console.log('API IP: ', res)
  //   // })

  //   // axios.get(url5Days).then(res => {
  //   //   console.log('API 5 DAYS: ', res)
  //   // })

  //   axios.get(url).then(res => {
  //     setTimeout(() => {
  //       setData(res.data);
  //       setLoading(false)
  //     }, 1500);
  //   }).catch(err => {
  //     setLoading(false);
  //     setErrorMsg(err)
  //   })
  // }, [location])

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg('')
    }, 2000);
    return () => clearTimeout(timer)
  }, [errorMsg])


  if (!state?.weatherLocation) {
    return (
      <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
        <div>
          <ImSpinner8 className='text-5xl animate-spin text-white' />
        </div>
      </div>)
  }

  return (
    <>
      <Layout>
        {errorMsg && <div className="w-full max-w-[90vw] lg:max-w-[450px] bg-red-400 text-white absolute top-2 lg:top-10 p-4 capitalize rounded-md">{`${errorMsg.response.data.message}`}</div> }
        {/* //FORM */}
        <SearchLocation />
        {/* CARD */}
        <Card loading={loading} />
        {/* Location Selected */}
        <CarouselLocation />
      </Layout>
    </>
  )
};

export default App;
