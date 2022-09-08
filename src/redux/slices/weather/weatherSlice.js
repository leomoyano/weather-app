import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    location: '',
    country: '',
    id: 0,
    minTemp1: 0,
    minTemp2: 0,
    minTemp3: 0,
    minTemp4: 0,
    minTemp5: 0,
    maxTemp1: 0,
    maxTemp2: 0,
    maxTemp3: 0,
    maxTemp4: 0,
    maxTemp5: 0,
    weather: {},
    main: {},
    isLoading: false,
  },
  reducers: {
    startLoadingWeather: ( state ) => {
      state.isLoading = true;
    },
    stopLoadingWeather: ( state ) => {
      state.isLoading = false;
    },
    setWeather: ( state, action ) => {
      state.isLoading = false;
      state.location = action.payload.location;
      state.weather = action.payload.weather;
      state.main = action.payload.main;
      state.country = action.payload.country;
      state.id = action.payload.id;
      state.minTemp1 = action.payload.minTemp1;
      state.minTemp2 = action.payload.minTemp2;
      state.minTemp3 = action.payload.minTemp3;
      state.minTemp4 = action.payload.minTemp4;
      state.minTemp5 = action.payload.minTemp5;
      state.maxTemp1 = action.payload.maxTemp1;
      state.maxTemp2 = action.payload.maxTemp2;
      state.maxTemp3 = action.payload.maxTemp3;
      state.maxTemp4 = action.payload.maxTemp4;
      state.maxTemp5 = action.payload.maxTemp5;
    }
  }
});
// Actiones generadas para cada caso del reducer
export const { startLoadingWeather, stopLoadingWeather, setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;