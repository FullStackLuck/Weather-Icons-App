import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForecast from "./components/weatherForecast";


export default function App() {

  const allWeatherData = weatherData.map((ele, index) => {
    return <WeatherForecast {...ele} key={index} />;
  });

  return (
    <div className="App">
      <section>{allWeatherData}</section>
    </div>
  );
};
v