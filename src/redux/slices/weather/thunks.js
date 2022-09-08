import { forecastWeekdays } from '../../../utils';
import { config } from '../../../constants/apiKeys';
import { setWeather } from './weatherSlice';

export const getWeather = (location) => {
  return async (dispatch) => {

    try {
      const resp = await fetch(`${config.WEATHER_API_ENDPOINT}q=${location}&units=metric&lang=es`);
      const { weather, name, main, sys, id } = await resp.json();

      const forecastGrouped = await forecastWeekdays(location)

      // const resp3 = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${OPEN_WEATHER_MAP_API_KEY}q=${location}&units=metric&lang=es`);
      //  const data3 = await resp3.json();
      //  console.log("🚀 ~ file: thunks.js ~ line 31 ~ return ~ data3", data3)

      dispatch(setWeather({
        weather,
        main,
        id,
        location: name,
        country: sys?.country,
        minTemp1: forecastGrouped?.[0].minTemp,
        minTemp2: forecastGrouped?.[1].minTemp,
        minTemp3: forecastGrouped?.[2].minTemp,
        minTemp4: forecastGrouped?.[3].minTemp,
        minTemp5: forecastGrouped?.[4].minTemp,
        maxTemp1: forecastGrouped?.[0].maxTemp,
        maxTemp2: forecastGrouped?.[1].maxTemp,
        maxTemp3: forecastGrouped?.[2].maxTemp,
        maxTemp4: forecastGrouped?.[3].maxTemp,
        maxTemp5: forecastGrouped?.[4].maxTemp,
      }));
    } catch (error) {
      // dispatch(errorData(error));
      console.log(error);
    }
  }
}