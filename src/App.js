import React, { useState } from "react";


const App = () => {

  const [temperature, setTemperature] = useState(10);
  const [temperatureColour, setTemperatureColour] = useState("");
  const [temperatureIcon, setTemperatureIcon] = useState("");

  const increaseTemperature = () => {
    const newTemperature = temperature + 1;
    setTemperature(newTemperature);
    setTemperatureColour(newTemperature > 20? "hot" : newTemperature > 15? "neutral" : "blue");
    setTemperatureIcon(newTemperature > temperature? "fa-solid fa-temperature-arrow-up" : "");
    
  }

  const decreaseTemperature = () => {
    const newTemperature = temperature - 1;
    setTemperature(newTemperature);
    setTemperatureColour(newTemperature > 20? "hot" : newTemperature > 15? "neutral" : "blue");
    setTemperatureIcon(newTemperature < temperature? "fa-solid fa-temperature-arrow-down" : "");
  }

  return (

    <>
    
    <h1><i class={`icon-size  ${temperatureIcon}`}></i></h1>

    <div className="app-container">

      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColour}`}> {temperature}°C</div>
      </div>

      <div className="button-container">
        <button className="button" onClick={() => increaseTemperature()}>+</button>
        <button className="button" onClick={() => decreaseTemperature()}>-</button>
      </div>
      
    </div>
      
      
    </>
  );
}

export default App;
