import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '74f6a0a9b04a89362c947cfc1ed58015'

//action
export const fetchWeatherAction = createAsyncThunk(
    'weather/fetch',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${payload}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}&lang=es`);
            console.log('ASYNC THUNK DATA: ', data);
            return data;
        } catch (error) {
            if (!error?.response) {
                console.log('ERROR DESDE THUNK');
                throw error;
            }
            return rejectWithValue(error?.response.data);
        }
    }
)

//Slice
export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        city: "",
        mainWeather1: "",
        mainWeather2: "",
        mainWeather3: "",
        mainWeather4: "",
        mainWeather5: "",
        tempMax1: "",
        tempMax2: "",
        tempMax3: "",
        tempMax4: "",
        tempMax5: "",
        weatherWind: "",
        pressure: "",
        humidity: ""
    },
    reducers: {
        changeWeather: (state, action) => {
            state.weatherWind = action.payload.list[8].wind.speed
            state.pressure = action.payload.list[8].main.pressure
            state.humidity = action.payload.list[8].main.humidity
            state.mainWeather1 = action.payload.list[8].weather[0].main
            state.mainWeather2 = action.payload.list[14].weather[0].main
            state.mainWeather3 = action.payload.list[22].weather[0].main
            state.mainWeather4 = action.payload.list[30].weather[0].main
            state.mainWeather5 = action.payload.list[38].weather[0].main
            state.tempMax1 = action.payload.list[8].main.temp_max
            state.tempMax2 = action.payload.list[14].main.temp_max
            state.tempMax3 = action.payload.list[22].main.temp_max
            state.tempMax4 = action.payload.list[30].main.temp_max
            state.tempMax5 = action.payload.list[38].main.temp_max
            console.log(state.tempMax1)
        },
        pendingData: (state, action) => {
            state.loading = true
        },
        fullFilledData: (state, action) => {
            state.weather = action?.payload;
            state.loading = false;
            state.error = undefined;
        },
        errorData: (state, action) => {
            state.loading = false;
            state.weather = undefined;
            state.error = action?.payload;
        }
    }
})

export const { errorData, pendingData, changeWeather, fullFilledData } = weatherSlice.actions
export default weatherSlice.reducer