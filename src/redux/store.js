import { configureStore } from '@reduxjs/toolkit';
import { selectedLocationSlice } from './slices/selectedLocation/selectedLocationSlice';
import {weatherSlice} from './slices/weather/weatherSlice';



// Crear Store
export const store = configureStore({
  reducer: {
    // Usar el reducer de nuestro slice
    selectLocation: selectedLocationSlice.reducer,
    weatherLocation: weatherSlice.reducer,

    // RTK Query
    // [todosApi.reducerPath]: todosApi.reducer,
  },
  // middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( todosApi.middleware )
})