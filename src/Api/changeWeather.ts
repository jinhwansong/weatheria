
import {

  addit,
  dayatom,
  dayclear,
  dayclouds,
  daydrizzle,
  dayex,
  daymist,
  dayrain,
  daysnow,
  daythunderstorm,
  nightatom,
  nightclear,
  nightclouds,
  nightdrizzle,
  nightex,
  nightmist,
  nightrain,
  nightsnow,
  nightthunderstorm,
} from "assets";



  


export const WeatherTypeIconWithHours = props => {
    let weathericon = null
  const weatherType = props.type;
  const isDaytime = Date.now();
  if (weatherType === "thunderstorm") {
    weathericon = isDaytime ? daythunderstorm : nightthunderstorm;
  } else if (weatherType === "drizzle") {
    weathericon = isDaytime ? daydrizzle : nightdrizzle;
  } else if (weatherType === "rain") {
    weathericon = isDaytime ? dayrain : nightrain;
  } else if (weatherType === "snow") {
    weathericon = isDaytime ? daysnow : nightsnow;
  } else if (weatherType === "atmosphere") {
    weathericon = isDaytime ? dayatom : nightatom;
  } else if (weatherType === "clear") {
    weathericon = isDaytime ? dayclear : nightclear;
  } else if (weatherType === "clouds") {
    weathericon = isDaytime ? dayclouds : nightclouds;
  } else if (weatherType === "extreme") {
    weathericon = isDaytime ? dayex : nightex;
  } else if (weatherType === "additional") {
    weathericon = addit;
  } else if (weatherType === "mist") {
    weathericon = isDaytime ? daymist : nightmist;
  } else {
    weathericon = null; // 해당하는 날씨 상황에 맞는 이미지가 없을 경우
  }
};
export const millisecondsToTime = ms => {
  const date = new Date(ms);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};


  


