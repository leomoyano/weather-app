import { config } from "../constants/apiKeys";

export const forecastWeekdays = async (location) => {

  try {
    const forecastCall = await fetch(`${config.WEATHER_DATA_FORECAST}q=${location}&units=metric&lang=es&exclude=hourly,daily`)
    const forecastData = await forecastCall.json();

    const groupedData = forecastData.list.reduce((days, row) => {
      const date = row.dt_txt.split(' ')[0];
      days[date] = [...(days[date] ? days[date]: []), row];
      
      return days;
    }, {});
    

    let groupDays = [];
    for(let date of Object.keys(groupedData)){
      groupDays.push({
        date,
        maxTemp: getMax(groupedData[date], 'temp_max'),
        minTemp: getMin(groupedData[date], 'temp_min'),
        humidity: getMax(groupedData[date], 'humidity'),
      })
    }
  
  function getMax(arr, attr){
    return Math.max.apply(Math, arr.map(item => item.main[attr]));
  }
  
  function getMin(arr, attr){
    return Math.min.apply(Math, arr.map(item => item.main[attr]));
  };

  return groupDays;
  } catch (error) {
    console.log(error);
  }
}