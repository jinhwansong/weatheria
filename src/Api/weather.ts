import axios from "axios";



export const currentCityWeather = async (latitude, longitude) => {
  const response = await axios.get(
    `${process.env.REACT_APP_WEATHER_API_HOST}?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
  );
  return response.data;
};

export const cityWeather = async (city) => {
  const response = await axios.get(
    `${process.env.REACT_APP_WEATHER_API_HOST}?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );
  return response.data;
};
