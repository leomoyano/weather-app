import { configureStore } from '@reduxjs/toolkit';
import { selectedLocationSlice } from './slices/selectedLocation/selectedLocationSlice';
import {weatherSlice} from './slices/weather/weatherSlice';



// Crear Store
export const store = configureStore({
  reducer: {
    selectLocation: selectedLocationSlice.reducer,
    weatherLocation: weatherSlice.reducer,
  },
})