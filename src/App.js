import './App.css';
import DefaultButton from './DefaultButton.js';
//import cloudy from './Images/cloudy-bg.jpg';
//import stormy from './Images/stormy-bg.jpg';
//import sunny from './Images/sunny-bg.jpg';
import rainy from './Images/rainy-bg.PNG';
import WeatherInput from './CityInput';
//import snowy from './Images/snowy-bg.jpg';
//import foggy from './Images/foggy-bg.jpg';

function App() {
  return (
    <div className="background">
      <div className="upper-bar">
        <WeatherInput/>
      </div>
      
      <div className="weather-card" text={WeatherInput[0]}/>
    </div>
  );
}

export default App;
