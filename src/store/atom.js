import { atom,selector,useRecoilValue  } from "recoil";
import addit from "../assets/addit.svg"
import dayatom from "../assets/dayatom.svg"
import dayclear from "../assets/dayclear.svg"
import dayclouds from "../assets/dayclouds.svg"
import daydrizzle from "../assets/daydrizzle.svg"
import dayex from "../assets/dayex.svg"
import daymist from "../assets/daymist.svg"
import dayrain from "../assets/dayrain.svg"
import daysnow from "../assets/daysnow.svg"
import daythunderstorm from "../assets/daythunderstorm.svg"
import nightatom from "../assets/nightatom.svg"
import nightclear from "../assets/nightclear.svg"
import nightclouds from "../assets/nightclouds.svg"
import nightdrizzle from "../assets/nightdrizzle.svg"
import nightthunderstorm from "../assets/nightthunderstorm.svg"
import nightex from "../assets/nightex.svg"
import nightmist from "../assets/nightmist.svg"
import nightrain from "../assets/nightrain.svg"
import nightsnow from "../assets/nightsnow.svg"

//사계절마다 백그라운드 변경됨.
const currentDate = new Date()
const currentMonth = currentDate.getMonth()
let season
if (currentMonth >= 2 && currentMonth <= 4) {
  season = "봄";
} else if (currentMonth >= 5 && currentMonth <= 7) {
  season = "여름";
} else if (currentMonth >= 8 && currentMonth <= 10) {
  season = "가을";
} else {
  season = "겨울";
}

const backgroundStyleBySeason = {
  "봄": {
    backgroundImage: "url(spring-background.jpg)",
    backgroundSize: "cover",
  },
  "여름": {
    backgroundImage: "url(summer-background.jpg)",
    backgroundSize: "cover",
  },
  "가을": {
    backgroundImage: "url(fall-background.jpg)",
    backgroundSize: "cover",
  },
  "겨울": {
    backgroundImage: "url(winter-background.jpg)",
    backgroundSize: "cover",
  },
};

export const weatherState = atom({
  key: "weatherState",
  default: {
    main: "",
    icon: "",
    season: season,
    backgroundStyle: backgroundStyleBySeason[season],
  },
});

function App() {
  const weather = useRecoilValue(weatherState);
  return (
    <div style={weather.backgroundStyle}>
      {/* ... */}
    </div>
  );
}
export const weatherIconSelector = selector({
  key: 'weatherIconSelector',
  get: ({ get }) => {
    const { icon } = get(weatherState);
    const currentTime = Date.now() / 1000;
    const { sunrise, sunset } = get(weatherState).sys;

    const isDayTime = currentTime > sunrise && currentTime < sunset;

    if (icon === '01d') {
      return dayclear
    } else if (icon === '01n') {
      return nightclear;
    } else if (icon === '02d') {
      return dayclouds 
    } else if (icon === '02n') {
      return nightclouds;
    } else if (icon === '03d' ||  icon === '04d') {
      return 'Cloudy';
    } else if(icon === '03n' || icon === '04n'){

    }else if(icon === '09n' || icon === '10n'){

    }else if (icon === '09d' ||  icon === '10d' ) {
      return 'Rain';
    } else if (icon === '11d' ) {
      return 'Thunderstorm';
    } else if (icon === '11n') {
      return 'Thunderstorm';
    } else if (icon === '13d') {
      return 'Snow';
    } else if (icon === '13n') {
      return 'Snow';
    } else if (icon === '50d' ) {
      return 'Fog';
    }else if (icon === '50n') {
      return 'Fog';
    } else {
      return 'Unknown';
    }
  },
});