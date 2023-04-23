import React from "react";
import { useQuery } from "react-query";
import { cityWeather, currentCityWeather } from "Api/weather";
import styled from "styled-components";
import { weatherState } from "../../store/atom";


function MainForm() {

  //본인 위치기반 날씨
  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  const {
    isLoading: currentLoding,
    isError: currentError,
    data: currentdata,
  } = useQuery(
    "currentWeather",
    async () => {
      const position = await getCurrentLocation();
      const { latitude, longitude } = position?.coords;
      return currentCityWeather(latitude, longitude);
    }
  );
  //도시별 날씨 선택
  const cities = [
    "seoul",
    "incheon",
    "daejeon",
    "daegu",
    "busan",
    "gwangju",
    "jeju",
    "los angeles",
  ];
  const {
    isLoading: cityLoding,
    isError: cityError,
    data: cityData,
  } = useQuery(
    "cities",
    async () => {
      const results = await Promise.all(
        cities.map((city) => cityWeather(city))
      );
      return results;
    }
  );

  if (cityLoding || currentLoding) return <h1>로딩중 입니다...</h1>;
  if (cityError || currentError) return <h1>에러 입니다...</h1>;
  console.log(cityData);
  // , currentdata
  return (
    <StMainBg >
      <StMainUl>
        {cityData?.map((item) => {
          return (
            <StMainLi key={item.id}>
              <StTop>
                <StLocation>
                  <path d="M8 16C8 16 14 10.3137 14 6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6C2 10.3137 8 16 8 16ZM8 9C6.34315 9 5 7.65685 5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6C11 7.65685 9.65685 9 8 9Z" />
                </StLocation>
                <StLocationName>{item.name}</StLocationName>
                <StLocation>
                  <path d="M8 14C8.82843 14 9.5 13.3284 9.5 12.5C9.5 11.6716 8.82843 11 8 11C7.17157 11 6.5 11.6716 6.5 12.5C6.5 13.3284 7.17157 14 8 14Z" />
                  <path d="M8 0C6.61929 0 5.5 1.11929 5.5 2.5V10.0505C4.88196 10.6813 4.5 11.5463 4.5 12.5C4.5 14.433 6.067 16 8 16C9.933 16 11.5 14.433 11.5 12.5C11.5 11.5463 11.118 10.6813 10.5 10.0505V2.5C10.5 1.11929 9.38071 0 8 0ZM6.5 2.5C6.5 1.67157 7.17157 1 8 1C8.82843 1 9.5 1.67157 9.5 2.5V10.4874L9.66654 10.6365C10.1788 11.0949 10.5 11.7596 10.5 12.5C10.5 13.8807 9.38071 15 8 15C6.61929 15 5.5 13.8807 5.5 12.5C5.5 11.7596 5.8212 11.0949 6.33346 10.6365L6.5 10.4874V2.5Z" />
                </StLocation>
              </StTop>
              <StCenter>
                <StWeatherImgWrap>
                  <StWeatherImg src={item.weather[0].icon} alt="Weather Icon" />
                </StWeatherImgWrap>
                <StTemp>
                  {Math.floor(item.main.temp - 273.15)}
                  <StTempF>°</StTempF>
                </StTemp>
                <StWeatherText>{item.weather[0].description}</StWeatherText>
              </StCenter>
            </StMainLi>
          );
        })}
      </StMainUl>
    </StMainBg>
  );
}

export default MainForm;

const StMainBg = styled.div`
  //background-image: url(${(props) => props});
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StMainUl = styled.ul`
  width: 1400px;
  display: flex;
  flex-wrap: wrap;
  gap: 1.43%;
`;
const StMainLi = styled.li`
  width: 23.92%;
  background: rgba(255, 255, 255, 0.25);
  padding: 30px;
  border-radius: 10px;
  margin-top: 20px;
`;
const StTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StLocation = styled.svg`
  fill: #fff;
  width: 16px;
  height: 16px;
`;
const StLocationName = styled.p`
  display: block;
  color: #fff;
`;
const StCenter = styled.div`
  text-align: center;
  margin: 30px 0;
  font-size: 0;
`;
const StWeatherImgWrap = styled.div`
  margin: 0 auto;
  width: 150px;
  height: 150px;
  position: relative;
`;
const StWeatherImg = styled.img`
  position: absolute;
  inset: 0px;
  width: auto;
  height: auto;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
`;

const StTemp = styled.em`
  font-size: 3.75rem;
  font-weight: 200;
  color: #fff;
  justify-content: center;
  display: flex;
  margin-bottom: 20px;
`;
const StTempF = styled.span`
  font-size: 1.87rem;
  color: #fff;
  margin-left: 2px;
`;
const StWeatherText = styled.p`
  color: #fff;
`;
