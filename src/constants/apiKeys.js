export const OPEN_WEATHER_MAP_API_KEY = '74f6a0a9b04a89362c947cfc1ed58015';
export const REACT_APP_IP_API_KEY = '6f6c866bdee0751e39f98080714ac531';

export const config = {
  WEATHER_API_ENDPOINT: `https://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_MAP_API_KEY}&`,
  WEATHER_DATA_ENDPOINT: `https://api.openweathermap.org/data/2.5/onecall?appid=${OPEN_WEATHER_MAP_API_KEY}&exclude=minutely&units=metric&`,
  WEATHER_DATA_FORECAST: `https://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_MAP_API_KEY}&units=metric&`,
  WEATHER_DATA_ONECALL: `https://api.openweathermap.org/data/3.0/onecall?appid=${OPEN_WEATHER_MAP_API_KEY}&units=metric&`,
  IP_API_ENDPOINT: `http://api.ipapi.com/api/check?access_key=${REACT_APP_IP_API_KEY}`
};