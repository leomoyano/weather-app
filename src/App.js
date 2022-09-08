import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ImSpinner8 } from 'react-icons/im'
import Layout from './components/Layout';
import Card from './components/Card';
import CarouselLocation from './components/CarouselLocation';
import SearchLocation from './components/SearchLocation';
import { errorMessage } from './redux/slices/selectedLocation';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const dispatch = useDispatch();
  const state = useSelector(state => state)

  useEffect(() => {
    if (state.selectLocation?.errorMsg !== '') {
      setErrorMsg(state.selectLocation.errorMsg)
    }
    const timer = setTimeout(() => {
      setErrorMsg('')
      dispatch(errorMessage(''))
    }, 2000);
    return () => clearTimeout(timer)
  }, [state.selectLocation.errorMsg])


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
        {errorMsg && (
          <div
            className="ease-in-out w-full m-auto z-[100] max-w-[90vw] lg:max-w-[450px] bg-red-700/80 text-white absolute top-2 lg:top-10 p-4 rounded-lg">
            <p className="text-center text-lg">{errorMsg}</p>
          </div>
        )}
        <SearchLocation />
        <Card loading={loading} />
        <CarouselLocation />
      </Layout>
    </>
  );
};

export default App;
