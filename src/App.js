import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherInput from "./CityInput";
import getCountryName from "./GetCountry.js";


function App() {
  const [textInput, setTextInput] = useState("");
  const [searchItem, setSearchItem] = useState("Tokyo");
  const [weatherData, setWeatherData] = useState({
    weather: [{ main: "Clouds" }],
  });
  const [unitType, setUnitType] = useState(true);

  const city = getCountryName(weatherData?.sys?.country);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchItem}&units=${unitType ? "metric" : "imperial"}&appid=${process.env.REACT_APP_API_KEY}`
        );
        if (fetchedData.status !== 200)
          throw new Error("That is't a city bro!");
        const finalData = await fetchedData.json();
        setWeatherData(finalData);
      } catch (error) {
        console.error(error);
        alert("That doesn't appear to be a city");
      }
    }
    fetchData();
  }, [searchItem]);

  const img = weatherData?.weather[0]?.main || "Clouds";
  return (
    <div className={`background ${img}`}>
      <div className="upper-bar">
        <WeatherInput
          textInput={textInput}
          setTextInput={setTextInput}
          setSearchItem={setSearchItem}
        />
      </div>

      <div className="weather-card {weatherData?.weather?.main}">
        <div className="{weatherData?.weather?.main} place-name">{weatherData?.name}, {city}
        </div>
        <div className="temp">{weatherData?.main?.temp.toFixed(0)}{unitType ? "°C" : "°F"}</div>
        <div className="weather">{weatherData?.weather[0].main}</div>
        <div className="humidity">
          <p>Humidity :</p>
          <p>&nbsp; {weatherData?.main?.humidity}%</p>
        </div>
      </div>
    </div>
  );
}

export default App;
