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

      <div className="weather-card">{weatherData?.main?.temp}</div>
    </div>
  );
}

export default App;
