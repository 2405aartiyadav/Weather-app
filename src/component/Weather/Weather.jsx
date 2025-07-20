import React, { useState } from "react";
import search from "../../assets/images/search.png";
import humidity from "../../assets/images/humidity.png";
import wind from "../../assets/images/wind.png";
import { getWeatherDetailByCity } from "../../api/api";
import getWeatherByImage  from "../../api/getWeatherByImg.js";
const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    if (city.trim() === "") return;
    const data = await getWeatherDetailByCity(city);
    if (data) {
      setWeatherData(data);
    }
  };

  return (
    <div className="container  bg-gradient-to-r from-green-300 to-blue-200 mt-4 mr-auto ml-auto rounded-lg max-w-xl min-h-auto">
      <div className=" search text-center mt-16 ml-10 mr-10 sm:mt-16 sm:mx-10 ">
        <input
          className="border-black500 rounded-full mt-5 p-2 ml-20 w-80 text-4xl font-serif text-center"
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="Enter city name"
        />
        <button
          className="rounded-full w-10 h-12 m-4 bg-slate-50 align-middle"
          onClick={handleSearch}
        >
          <img 
          className="center w-6 mr-2 ml-2" src={search} alt="" />
        </button>
      </div>
      {weatherData && (
        <>
          <div className="flex justify-center">
            <img src={getWeatherByImage(weatherData.weather[0].main)} alt="" />
          </div>
          <div className="flex justify-center mt-4">
            <h1 className="text-6xl text-white font-bold">
              {Math.round(weatherData.main.temp)} <sup>o</sup>c
            </h1>
          </div>
          <div className="flex justify-center mt-4">
            <h1 className="text-6xl text-white">{weatherData.name}</h1>
          </div>
          <div className=" text-white text-2xl font-bold flex ml-24 mt-2">
            <div className="flex mt-8">
              <img className="w-12 h-12 m-2 " src={humidity} alt="" />
              <span>{weatherData.main.humidity}%</span>
              <span >Humidity</span>
            </div>
            <div className="flex m-6">
              <img className="w-12 h-12  m-2" src={wind} alt="" />
              <span>{weatherData.wind.speed}</span>
              <p> wind speed</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
