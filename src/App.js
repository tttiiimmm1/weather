import './App.css';
//import cloudy from './Images/cloudy-bg.jpg';
//import stormy from './Images/stormy-bg.jpg';
//import sunny from './Images/sunny-bg.jpg';
import rainy from './Images/rainy-bg.PNG';
//import snowy from './Images/snowy-bg.jpg';
//import foggy from './Images/foggy-bg.jpg';

function App() {
  return (
    <div className="background">
      <div className="upper-bar">

      </div>
      <img src={rainy} className="cloudy-bg" alt=""/>
      <div className="weather-card"/>
    </div>
  );
}

export default App;
