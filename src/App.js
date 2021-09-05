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
          `https://api.openweathermap.org/data/2.5/weather?q=${searchItem}&units=imperial&appid=78bec356987690af36ca3c4146513bc9`
        );
        const finalData = await fetchedData.json();
        setWeatherData(finalData);
      } catch (error) {
        console.log(error);
      }

      //    fetch(
      //       `https://api.openweathermap.org/data/2.5/weather?q=${searchItem}&units=imperial&appid=78bec356987690af36ca3c4146513bc9`
      //     )
      //       .then((res) => res.json())
      //       .catch(err => console.error(err))
      //       .then((res) => setWeatherData(res))
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
