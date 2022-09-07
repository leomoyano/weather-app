import { configureStore } from "@reduxjs/toolkit";
import { weatherSlice } from "../slices1/weatherSlices";

export const store = configureStore({
    reducer:{
        weather: weatherSlice
    },
})