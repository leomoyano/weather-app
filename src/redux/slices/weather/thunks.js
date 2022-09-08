import { forecastWeekdays } from '../../../utils';
import { config } from '../../../constants/apiKeys';
import { setWeather } from './weatherSlice';

export const getWeather = (location) => {
  return async (dispatch) => {

    try {
      const resp = await fetch(`${config.WEATHER_API_ENDPOINT}q=${location}&units=metric&lang=es`);
      const { weather, name, main, sys, id } = await resp.json();

      const forecastGrouped = await forecastWeekdays(location)

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