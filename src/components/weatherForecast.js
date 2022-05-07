import React from "react";
import WeatherIcon from "./weatherIcon";
import WeatherData from "./WeatherData";

const weatherForecast = (props) => {
    return (
      <div className="weather">
        <WeatherIcon img={props.img} />
        <WeatherData conditions={props.conditions} time={props.time} />
      </div>
    );
  };
  
  export default weatherForecast;