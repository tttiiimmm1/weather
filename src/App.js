import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherInput from "./CityInput";

function App() {
  const [textInput, setTextInput] = useState("");
  const [searchItem, setSearchItem] = useState("Tokyo");
  const [weatherData, setWeatherData] = useState({
    weather: [{ main: "Clouds" }],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchItem}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
        );
        const finalData = await fetchedData.json();
        setWeatherData(finalData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [searchItem]);

  const img = weatherData?.weather[0]?.main || "Clouds";
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <div className={`background ${img}`}>
      <div className="upper-bar">
        <WeatherInput
          textInput={textInput}
          setTextInput={setTextInput}
          setSearchItem={setSearchItem}
        />
      </div>

      <div className="weather-card">{weatherData?.main?.temp}</div>
    </div>
  );
}

export default App;
